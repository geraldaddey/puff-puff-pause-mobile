#!/usr/bin/env bash
# Creates an .env from ENV variables for use with react-native-config
# Note that variables needs to start with RN_ in app center, but this prefix will be omited in generated file
ENV_WHITELIST=${ENV_WHITELIST:-"^RN_"}
printf "Creating an .env file with the following whitelist:\n"
printf "%s\n" $ENV_WHITELIST
set | egrep -e $ENV_WHITELIST | sed 's/^RN_//g' > .env
printf "\n.env created with contents:\n\n"
cat .env