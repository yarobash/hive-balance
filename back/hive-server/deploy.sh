#!/bin/bash
find . -type f | grep -v -E '(node_modules)|(deploy.sh)' | xargs tar -cf - | ssh root@cloudapiary.ru tar -xf - -C /home/cloudapiary/hive-server
