const { fs, path } = require("@brandingbrand/flagship");

function preLink(_) {
  fs.update(
    path.android.gradlePath(),
    /(signingConfigs {)/,
    `$1
        debug {
            storeFile file('debug.keystore')
            storePassword 'android'
            keyAlias 'androiddebugkey'
            keyPassword 'android'
        }`
  );

  fs.copySync(
    path.project.resolve("assets", "config", "firebase", "uat", "debug.keystore"),
    path.project.resolve("android", "app", "debug.keystore")
  );
}

exports.preLink = preLink;
