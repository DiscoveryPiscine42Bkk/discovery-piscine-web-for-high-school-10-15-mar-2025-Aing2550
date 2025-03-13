#!/bin/bash

# ตรวจสอบว่ามีอาร์กิวเมนต์ถูกส่งเข้ามาหรือไม่
if [ $# -eq 0 ]; then
    echo "No arguments supplied"
    exit 1
fi

# วนลูปผ่านอาร์กิวเมนต์ และแสดงผล (จำกัดสูงสุด 3 อัน)
count=0
for arg in "$@"; do
    echo "$arg"
    ((count++))
    if [ $count -eq 3 ]; then
        break
    fi
done
