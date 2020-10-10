#!/bin/bash

ls -a --file-type config_files | grep -v / | xargs -I {} -n1 ln -s 'config_files/'{} {}

echo -e "\n container started"
npm run start
