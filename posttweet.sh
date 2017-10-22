#!/bin/bash

set -e

tweetsh="/root/hntoday/tweet.sh"

now_date=$(date +"%Y%m%d")
now_nice=$(date +"%Y-%m-%d")

if [ ! -d "$now_date" ]
then
  echo "$now_date directory not found"
  exit 1
fi

cd "$now_date"

media_id=$($tweetsh upload "$now_date.gif" | jq '.media_id_string' | sed -e "s/\"//g")

$tweetsh post -m $media_id "HN top 10 -- $now_nice"
