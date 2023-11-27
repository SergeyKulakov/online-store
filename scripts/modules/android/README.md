# FLAGSHIP Android Native Module Support

Source files in this directory can make modifications to the boilerplate FLAGSHIP project to support
a given native dependency. All files with a .js extension in this directory are automatically
loaded.

The filename should match the node package name of the dependency (e.g. 'react-native-fbsdk` for
Facebook).

All scripts should export an `android` function which accepts the project configuration and
synchronously modifies the boilerplate to make the necessary modifications for `android`.

Refer to [@brandingbrand/flagship](https://github.com/brandingbrand/flagship/tree/develop/packages/flagship/src/lib/modules/android) for examples.
