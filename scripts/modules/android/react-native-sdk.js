"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers = require("../../../helpers");
const path = require("../../path");
const fs = require("../../fs");
const fsnode = require('fs');
function postLink(config) {

    ///////////////////////////////////////////////
    // Copy google-services.json to /android/app //
    ///////////////////////////////////////////////

    if (!(config.firebase
        && config.firebase.android
        && config.firebase.android.googleServicesJsonFile)) {
        helpers.logError('firebase.android.googleServicesJsonFile must be specified in project config');

        return process.exit(1);
    }

    // Copy google services file to /android/app
    const jsonFilePath = path.project.resolve(config.firebase.android.googleServicesJsonFile);
    if (fsnode.existsSync(jsonFilePath)) {
        fs.copySync(jsonFilePath, path.resolve('android', 'app', 'google-services.json'));
        helpers.logInfo('copied google-services.json into ./android/');
    } else {
        helpers.logError('firebase.android.googleServicesJsonFile does not specify an existing file.')
        return process.exit(1)
    }

    /////////////////////////////
    // Patch root build.gradle //
    /////////////////////////////

    // Define firebaseVersion
    fs.update(
        path.project.resolve('android', 'build.gradle'),
        /(ext {)/,
        `$1
        firebaseVersion = "17.6.0"`
    )

    // If google-services does not exist already, add it to the root build.gradle.
    if(!fs.doesKeywordExist(
        path.project.resolve('android', 'build.gradle'),
        'com.google.gms:google-services'
    )) {
        fs.update(
            path.project.resolve('android', 'build.gradle'),
            /(dependencies {)/,
            `$1
        classpath 'com.google.gms:google-services:4.3.3'`
        );
    }

    ////////////////////////////
    // Patch app build.gradle //
    ////////////////////////////

    fs.update(
        path.android.gradlePath(),
        /(implementation project\(':react-native-navigation'\))/,
        `$1
    implementation "com.leanplum:leanplum-fcm:5.7.0"
    implementation("com.google.firebase:firebase-iid")
    implementation "com.google.firebase:firebase-messaging:21.0.1"`
    )

    fs.update(
        path.android.gradlePath(),
        /(dependencies {)/,
        `$1
    implementation 'com.google.firebase:firebase-iid'`
    );

    if(!fs.doesKeywordExist(
        path.android.gradlePath(),
        'com.google.gms.google-services'
    )) {
        fs.append(
            path.android.gradlePath(),
            "apply plugin: 'com.google.gms.google-services'"
        );
    }

    /////////////////////////////////////////////////
    // Initialize leanplum in MainApplication.java //
    /////////////////////////////////////////////////

    fs.update(
        path.android.mainApplicationPath(config),
        /(package[\s\S]+?\n)/,
        `$1
import com.leanplum.*;
import com.leanplum.annotations.Parser;
`
    )

    fs.update(
        path.android.mainApplicationPath(config),
        /(super\.onCreate[\s\S]+?\n)/,
        `$1
        Leanplum.setApplicationContext(this);
        Parser.parseVariables(this);
        LeanplumActivityHelper.enableLifecycleCallbacks(this);
`
    );

    ///////////////////////////////
    // Patch AndroidManifest.xml //
    ///////////////////////////////

    fs.update(
        path.android.manifestPath(),
        /(<activity\n)/,
        `<meta-data
            android:name="com.google.android.gms.version"
            android:value="@integer/google_play_services_version" />
        <receiver
            android:name="com.leanplum.LeanplumPushReceiver"
            android:exported="false">
            <intent-filter>
                <action android:name="com.leanplum.LeanplumPushFirebaseMessagingService" />
            </intent-filter>
        </receiver>
        <service android:name="com.leanplum.LeanplumLocalPushListenerService" android:exported="false" />
        <service android:name="com.leanplum.LeanplumPushRegistrationService" android:exported="false" />
        <service
            android:name="com.leanplum.LeanplumPushFirebaseMessagingService"
            android:exported="false">
            <intent-filter>
                <action android:name="com.google.firebase.MESSAGING_EVENT" />
            </intent-filter>
        </service>
        $1`
    );
}

exports.postLink = postLink;
