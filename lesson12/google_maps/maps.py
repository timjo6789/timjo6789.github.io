#!/bin/python3.8

import webbrowser
import urllib

a = """Palancar Reef
San Miguel de Cozumel
Laguna Chankanaab
the National Marine Park
San Gervasio
Museum of the Island of Cozumel
Punta Sur Eco Beach Park
Discover Mexico Park Cozumel
Stingray Beach
Cozumel's Lighthouse""".split('\n')


for each in a:
    webbrowser.open("https://www.google.com/maps/search/" + urllib.parse.quote_plus(each))
