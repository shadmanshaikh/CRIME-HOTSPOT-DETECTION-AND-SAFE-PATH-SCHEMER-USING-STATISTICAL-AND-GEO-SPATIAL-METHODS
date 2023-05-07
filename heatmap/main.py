import streamlit as st
import folium as f
from folium import plugins
from folium.plugins import HeatMap
# import leafmap
import leafmap.foliumap as leafmap
import pandas as pd
import numpy as np
# %matplotlib inline
from autoviz.AutoViz_Class import AutoViz_Class

st.write('## :rocket:Crime Hotspot Detection Using Geospatial Methods')

lats_long = ["long" , "lat"]
crimedf = pd.read_csv("crime.csv")

st.write(crimedf.head())

lats_longs_weight = list(map(list, zip(crimedf["lat"],
                          crimedf["long"]
                         )
               )
           )
# lats_longs_weight[:5]
# landsat = 'landsat.tif'
# landsat_url = 'https://github.com/opengeos/leafmap/raw/master/examples/data/cog.tif'
# leafmap.download_file(landsat_url, landsat, unzip=False)

# st.write(lats_longs_weight[:5])
m = leafmap.Map(zoom_start = 5, tiles='openstreetmap')
m.add_heatmap(
        crimedf,
        latitude="lat",
        longitude="long",
        value="totalcrime",
        # name="Heat map",
        radius=20,
    )
f.TileLayer('stamentoner').add_to(m)
# f.TileLayer('Mapbox Control Room').add_to(m)
url = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
f.TileLayer(
        tiles=url,
        name='world Imagery',
        attr='attribution',
        subdomains='mytilesubdomain'
    ).add_to(m)
m.to_streamlit(width=1000, height=1000)

# AV = AutoViz_Class()
# st.write(AV.AutoViz("crime.csv"))

# # AV.to_streamlit()