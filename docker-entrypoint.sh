#!/bin.sh -e

[ -z $TZ ] && echo "Please set an IANA timezone (\$TZ) for the server" && exit 0

ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone