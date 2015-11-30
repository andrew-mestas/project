# project
Using the awe.js library 

:Notes

+ 1x1x1 cube rendered as 1ft^3
+ z-index = 1 foot distance 
+ scene rendered out as 3d space can be manipulated based on position

Brian was mentioning using MongoDB to integrate location-based queries and its scalability also for this project

​[2:53] 
Using the open API can bind data to objects rendered on 3d scene

​[2:54] 
Possibly using coordinates to re render objects on seen space for example when user starts log starting coordinates monitor for changes in coordinates subtract from original find out the difference from that difference gives us a number to either scale or transform each object in the space

navigator.geolocation.watchPosition(showPosition);

https://github.com/altermarkive/Learning-Sensor-Access-in-JS

----
Nov 30
Decided to implement node, express, mongodb
Discussed functionality of the project
Until further notice the flow will be as follows:
A user can have many conainers that contain many items that have many data elements which are contained within many cells which can have many users

User >-< cell >-< containers >-< items
user - id I, name S, email S, password S, container I, ...
cell - id I, location (center coord), currentUsers?(I)(?coord)
container - id I, location (coord), items [...], userBelongsTo?(I) - note: containers w/o user are public
items - id I, location(coord)? container(I) : randomItem, data [...]

HTML 5 position data to test

Primary functionality to be created 
+ walk into cell send appropriate json data
+ check surrounding cells for objects or ifempty then render (like games / cache)
+ possible surrounding cells 9x9 or more depending on the former statement
+ render with awe.js (mobile (first), oculus?(future), glass?(future))
+ scavenger
+ auth
+ upgrades $
+ expand 
