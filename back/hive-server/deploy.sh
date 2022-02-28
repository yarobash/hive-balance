#!/bin/bash
cd dist && find . -type f | xargs tar -cf - | ssh root@cloudapiary.ru tar -xf - -C /home/cloudapiary/hive-server 
cd ..
scp package.json root@cloudapiary.ru:/home/cloudapiary/hive-server
