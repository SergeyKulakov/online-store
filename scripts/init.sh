#!/usr/bin/env bash

set -e

node ./scripts/modules

flagship clean
flagship init "$@"

yarn run jetify
