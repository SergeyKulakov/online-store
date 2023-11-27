#!/usr/bin/env bash

set -e
yarn run lint # codestyle checks
yarn run prepare # make sure it compiles in typescript
yarn run init
