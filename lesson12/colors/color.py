#!/bin/python3.8

from bs4 import BeautifulSoup
from operator import getitem
from PIL import ImageColor

import requests
import webbrowser
import wcag_contrast_ratio as contrast

hex_to_rgb = lambda x: [y/256 for y in ImageColor.getrgb(x)]
rating = lambda x, y: contrast.rgb(hex_to_rgb(x), hex_to_rgb(y))


def load_compare(file_path='color.txt', open_link=False):
    """
    opens a color.txt and makes comparision per hex color line then print and return colors object (with duplicant).

    file_path is provided to add flexibility of passing in from different location.
    If open_link then launch the contrast-ration.com per two color comparision (duplicant is removed)
    """
    colors = {}

    file = open(file_path).readlines()
    for each in file:
        each = each.strip('\n')
        for other in file:
            other = other.strip('\n')
            # sample link "https://contrast-ratio.com/#%23eeeeff-on-%23ffffeee"
            link = f"https://contrast-ratio.com/#%23{each[1:]}-on-%23{other[1:]}"

            colors.setdefault(link, {})
            colors[link]['pair'] = (each, other)
            colors[link]['rating'] = float(rating(each, other))

    next = -1
    for each in sorted(colors.items(),key=lambda x:getitem(x[1],'rating'), reverse=True):
        if next != each[1]['rating']:
            next = each[1]['rating']
            print(each[1]['rating'], each[1]['pair'], each[0])
            if open_link:
                webbrowser.open(each[0])
    return colors

if __name__ == "__main__":
  import sys
  if len(sys.argv) == 3:
    if sys.argv[2] == '1':
      load_compare(sys.argv[1], True)
    elif sys.argv[2] == '0':
      load_compare(sys.argv[1], False)
  elif len(sys.argv) == 2:
    load_compare(sys.argv[1])
  else:
    print('usage:')
    print(sys.argv[0], '<file_path>', '<open_link (1|0), boolean>')
