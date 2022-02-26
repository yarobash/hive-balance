#!/bin/bash
find ./dist -type f | xargs tar -cf - | ssh root@cloudapiary.ru tar -xf - -C /home/cloudapiary/hive-server 
