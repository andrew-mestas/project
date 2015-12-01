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

Nov 30
----
Decided to implement node, express, mongodb
Discussed functionality of the project
Until further notice the flow will be as follows:
* A user can have a conainer that contains many items that have many data elements which are contained within many cells which can have many users and have many containers with many items or many items without containers
  * *and we just keep on keeping on...*

   * User >-< cell >-< containers >-< items

####Models somewhat
* user - id I, name S, email S, password S, container I, ...
* cell - id I, location (center coord), currentUsers?(I)(?coord)
* container - id I, location (coord), items [...], userBelongsTo?(I) - note: containers w/o user are public
* item - id I, location(coord)? container(I) : randomItem, data [...]

```javascript

user 
{
  id        : 1,
  name      : FirstNameLastName,
  email     : email@email.com,
  password  : PASSWORDHASH,
  container : containerId
}

cell
{
  id           : 1
  location     : {lat: 0, lon: 0},
  currentUsers : [ {1: locationId }, {2: locationId }, ... ](optional)
}

container
{
  id:           : 1,
  location      : {lat: 0, lon: 0},
  items         : [itemId,itemId,...],
  userBelongsTo : userId(optional)
}

item
{
  id            : 1,
  container     : containerId(optional),
  data          : [{...},{...}]
}

```

*HTML 5 position data to test*
#*TOKENS!*

####Primary functionality to be created 
----
1. walk into cell send appropriate json data
2. check surrounding cells for objects or ifempty then render (like games / cache)
3. possible surrounding cells 9x9 or more depending on the former statement
4. render with awe.js (mobile (first), oculus?(future), glass?(future))
5. scavenger
6. auth
7. upgrades $
8. expand 

