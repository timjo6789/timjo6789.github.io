#!/bin/python3.8

import webbrowser
import urllib

a = open("font.txt").readlines()

# catchphrase = "Quick fox jumped over the lazy dog. QUICK FOX JUMPED OVER THE LAZY DOG. q"
catchphrase = "Quick fox jumped over the lazy dog."

heads = "<style>h2 {color: green;} p{color: red;} h1 { color:blue; background-color: white;}</style>\n"
body = ""
for each in a:
    each = each[:-1]
    for other in a:
        other = other[:-1]
        heads += f'<link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family={urllib.parse.quote_plus(each)}">\n'  
        body += f'<h1>{each}, {other}</h1>'
        body += f"""<h1 style="font-family: '{each}', serif; color: black;">{catchphrase} {each}</h1>"""
        body += f"""<h2 style="font-family: '{each}', serif;">{catchphrase} {each}</h2>"""
        body += f"""<h3 style="font-family: '{each}', serif;">{catchphrase} {each}</h3>"""
        body += f"""<p style="font-family: '{other}', serif;">{catchphrase} {other}</p>"""
def trash():
    for each in a:
        each = each[:-1]
        for other in a[1:]:
            other = other[:-1]
            heads += f'<link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family={urllib.parse.quote_plus(each)}">\n'  
            body += f'<h1>{each}, {other}</h1>'
            body += f"""<h1 style="font-family: '{other}', serif; color: black;">{catchphrase} {other}</h1>"""
            body += f"""<h2 style="font-family: '{other}', serif;">{catchphrase} {other}</h2>"""
            body += f"""<h3 style="font-family: '{other}', serif;">{catchphrase} {other}</h3>"""
            body += f"""<p style="font-family: '{each}', serif;">{catchphrase} {each}</p>"""

layout = f"<head>\n{heads}</head>"
layout += f"<body>\n{body}</body>"


open('result.html', 'w').write(layout)
