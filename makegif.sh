#!/bin/bash

set -e

convert="/usr/bin/convert"

now_date=$(date +"%Y%m%d")

if [ ! -d "$now_date" ]
then
  echo "$now_date directory not found"
  exit 1
fi

cd "$now_date"

$convert -dither none -deconstruct -layers optimize -matte -depth 8 -delay 100 -loop 0 "*.jpg" "$now_date.gif"
