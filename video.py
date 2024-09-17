import requests
from bs4 import BeautifulSoup

# Enlace del video
url = "https://www.instagram.com/p/C_WEpXbOnP1/"

# Enviar solicitud GET
response = requests.get(url)

# Analizar el HTML
soup = BeautifulSoup(response.content, "html.parser")

# Encontrar el enlace del video
video_url = soup.find("meta", {"property": "og:video:url"})["content"]

# Descargar el video
response = requests.get(video_url)
with open("video.mp4", "wb") as f:
    f.write(response.content)