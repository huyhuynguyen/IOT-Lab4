import requests

url = 'http://localhost:5000/main/sensor/light'
myobj = {
    "id": 3,
    "value": 365,
    "deviceName": "Rasperry Pi",
    "sensor": "Ánh sáng",
    "ipAddress": "192.168.1.2"
}

x = requests.put(url, data = myobj)
# x = requests.get(url)
# print(x.text)

#print the response text (the content of the requested file):

# print(type(x))
# print(x.raw)
