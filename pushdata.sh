#!/bin/bash

set -e

now_date=$(date +"%Y%m%d")

if [ ! -d "$now_date" ]
then
  echo "$now_date directory not found"
  exit 1
fi

cd "$now_date"

scp "$now_date.gif" abhirath:/root/hndatafromshrayasserver/
