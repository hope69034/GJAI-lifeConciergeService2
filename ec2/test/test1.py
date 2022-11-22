# 셀레니움, 크롬드라이버 설치. 아마 한번만 실행하면 될듯. 런타임 재실행해도 남아있을 걸? 아마두
!apt-get update > /dev/null 2>&1
!pip install selenium > /dev/null 2>&1
!apt install chromium-chromedriver > /dev/null 2>&1

#각종 모듈 import
import time # 새로운 페이지로 셀레니음 웹드라이버가 넘어갈 때마다 잠시 멈춰주는 역할을 위해 불러옴. 
# 멈춰주지 않으면 페이지가 다 로딩되기도 전에 다음 코드를 실행해버리는 불상사가 생김. 그걸 막아준다.
from selenium import webdriver # 웹드라이버. 코랩이라 우리가 직접 볼 순 없지만 얘가 돌아다니면서 일을 해줌
from selenium.webdriver.common.keys import Keys # 이 파일에선 아직 딱히 쓰지 않은듯
from selenium.webdriver.common.by import By # element를 찾을 때 쓰이는 parameter를 불러오는 역할
import pandas as pd 
from bs4 import BeautifulSoup # html 요소에 접근해서 정보를 빼내올 때 씀
from tqdm import tqdm
import pickle
import numpy as np

import warnings # 사실 잘 모르지만 선생님이 하셨던거 암튼 가져옴
warnings.filterwarnings('ignore')

#크롬 드라이버의 각종 옵션들 생성 및 적용.
options = webdriver.ChromeOptions()
options.add_argument('--headless') # 화면없이 실행
options.add_argument('--no-sandbox')
options.add_argument('--single-process')
options.add_argument('--disable-dev-shm-usage')
# 구글에 user agent 검색
options.add_argument('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36') # 나는 기계가 아니고 사람이에요
driver = webdriver.Chrome('chromedriver', options=options)

# 드라이버로 링크 접속 sName은 출발지 eName은 도착지
#driver.get('http://map.kakao.com/?sName=광주동구서남로1&eName=광주서구내방로241번길10')

# xpath 이용 태그 가져오기
#result = driver.find_element(By.XPATH, '//*[@id="info.flagsearch"]/div[6]/ul/li/div[1]/div/div[1]/p/span[1]/span[1]').text

#
#print(result)

#
#if __name__ = '__main__':
    #main(svc[1],svc[2])

### json으로 출력
#import json
#json.dumps(result, ensure_ascii=False, indent=3)
#print(json.dumps(result, ensure_ascii=False, indent=3))

def main(sName,eName):
    # 드라이버로 링크 접속 sName은 출발지 eName은 도착지
    driver.get(f'http://map.kakao.com/?sName={sName}&eName={eName}')
    time.sleep(5)#딜레이
    # xpath 이용 태그 가져오기
    print(driver.find_element(By.XPATH, '//*[@id="info.flagsearch"]/div[6]/ul/li/div[1]/div/div[1]/p/span[1]/span[1]').text)

main('광주동구서남로1','광주서구내방로241번길10')