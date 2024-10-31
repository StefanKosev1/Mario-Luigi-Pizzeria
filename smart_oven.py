import serial
import time

CONST_SERIAL_PORT = "COM9"
CONST_SERIAL_BITRATE = 9600

GLOBAL_OVEN_STATUS = [(), ()]

# SERVER_URL = "http://localhost:5000/post_data"

board = serial.Serial(CONST_SERIAL_PORT, CONST_SERIAL_BITRATE)

active = True

while active:
    smart_oven_status = board.readline().decode('utf-8').strip()
    print(smart_oven_status)

    if(smart_oven_status=="DONE"):
        active = False
        GLOBAL_OVEN_STATUS.append("DONE")
    elif(smart_oven_status=="COOKING"):
        GLOBAL_OVEN_STATUS[0] = "COOKING"
    else:
        GLOBAL_OVEN_STATUS[1] = str(smart_oven_status)


    print(GLOBAL_OVEN_STATUS)