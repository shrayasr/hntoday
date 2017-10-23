#!/bin/bash

set -e

wk="/root/hntoday/wkhtmltox/bin/wkhtmltoimage"
convert="/usr/bin/convert"

now_date=$(date +"%Y%m%d")

if [ ! -d "$now_date" ]
then
  mkdir "$now_date"
fi

cd "$now_date"

now=$(date +"%Y%m%d_%H%M")
now_human=$(date +"%Y-%m-%d %H:%M GMT")

filename="hn_$now.jpg"
filename_annotated="hn_$now.an.jpg"

$wk --custom-header "User-Agent" "HackerNewsToday (http://hntoday.xyz)" --crop-x 84 --crop-y 7 --crop-h 400 --crop-w 855 "http://news.ycombinator.com" "$filename"

$convert "$filename" -background "#c0c0c0" label:"$now_human" -gravity Center -append "$filename_annotated"

mv "$filename_annotated" "$filename"
