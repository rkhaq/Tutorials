from itertools import product
import requests
from bs4 import BeautifulSoup

baseurl = f'https://www.tokopedia.com/search?st=product&q=amplas%20per%20lembar&srp_component_id=02.01.00.00&navsource=home'

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.76 Safari/537.36', "Upgrade-Insecure-Requests": "1","DNT": "1","Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8","Accept-Language": "en-US,en;q=0.5","Accept-Encoding": "gzip, deflate"}

r = requests.get('https://www.tokopedia.com/search?st=product&q=amplas%20per%20lembar&srp_component_id=02.01.00.00&navsource=home', headers=headers)

soup = BeautifulSoup(r.content, 'lxml')

productlist = soup.find_all('a', class_='pcv3__info-content css-gwkf0u')

# print(productlist.prettify())
productName = []

name = productlist[0].find('div', class_='css-1b6t4dn')
price = productlist[0].find('div', class_='css-1ksb19c')
print (name.string, price.string)

# for item in productlist:
#     for name in item.find('div', class_='css-1b6t4dn'):
#         print(name.string)

# for item in productlist:
#     for price in item.find('div', class_='css-1ksb19c'):
#         print(price.string)