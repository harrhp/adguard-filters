#! /usr/bin/env bash

mkdir -p compiled
npx --yes  @adguard/hostlist-compiler --config config/config.json --output compiled/hostlist.txt
