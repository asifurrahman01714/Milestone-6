import pyautogui
import time
pyautogui.FAILSAFE = False
while True:
    time.sleep(1)
    for i in range(0, 100):
        pyautogui.moveTo(i*5)
    for i in range(0, 3):
        pyautogui.press('shift')
