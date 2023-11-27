# Assos Application
> Branding Brand ❤️ Assos

## Travis Status
[![Build Status](https://app.travis-ci.com/brandingbrand/assos.svg?token=gkr8jrBqzNpom9gSwCsT&branch=develop)](https://app.travis-ci.com/brandingbrand/assos)

## Quick Start

### Starting on iOS Emulator

1. `yarn`
2. `npm run init`
3. `npm run ios`

### Starting on Android Emulator

1. `yarn`
2. `npm run init`
3. `npm run android`

## Platform Initialization

There are 4 platform arguments that are available to send to the Flagship `init` command:

- android
- ios
- native
- web

The command `yarn init` will use `native` by default which will generate both `ios` and `android`
platform directories. Travis CI scripts `buildiOS.sh` and `buildAndroid.sh` will utilize
`yarn run init:ios ...` and `yarn run init:android ...` respectively so that Flagship will generate
the appropriate native directories, `ios` or `android` directories, per appropirate platform.
