   window.addEventListener('load', function() {
    // initialize awe after page loads
    window.awe.init({
      // automatically detect the device type
      device_type: awe.AUTO_DETECT_DEVICE_TYPE,
      // populate some default settings
      settings: {
      	container_id: 'container',
        fps: 30,
        default_camera_position: { x:0, y:0, z:0 },
        default_lights:[
          {
            id: 'point_light',
            type: 'point',
            color: 0xFFFFFF
          },
        ],
      },
      ready: function() {
        // load js files based on capability detection then setup the scene if successful
        awe.util.require([
          {
            capabilities: ['gum','gyro','webgl'],
            files: [ 
              [ '/awejs/awe-standard-dependencies.js', '/awejs/awe-standard.js' ], // core dependencies for this app 
              '/awejs/awe-standard-window_resized.js', // window resize handling plugin
              '/awejs/awe-standard-object_clicked.js', // object click/tap handling plugin
              '/awejs/awe.geo_ar.js', // geo ar plugin
            ],
            success: function() { 
              // limit demo to supported devices
              // NOTE: only Chrome and Firefox has implemented the DeviceOrientation API in a workable way
              //       so for now we are excluding all others to make sure your first experience is a happy one
              var device_type = awe.device_type();
              var browser_unsupported = false;
              if (device_type != 'android') {
                browser_unsupported = true;
              } else if (!navigator.userAgent.match(/chrome|firefox/i)) {
                browser_unsupported = true;
              }
              if (browser_unsupported) {
                document.body.innerHTML = '<p>This demo currently requires a standards compliant Android browser (e.g. Chrome M33).</p>';
                return;
              }

              // setup and paint the scene
			  window.awe.setup_scene();
			
              // setup some code to handle when an object is clicked/tapped
              window.addEventListener('object_clicked', function(e) { 
              	setInterval(function(){
                var p = awe.projections.view(e.detail.projection_id);
                awe.projections.update({ // rotate clicked object by 180 degrees around x and y axes over 10 seconds
                  data:{
                    animation: {
                      duration: 4,
                    },
                    position:{ z: p.position.z+4 }
                  },
                  where:{ id:e.detail.projection_id }
                });
                },4000);
              }, false);
              		var poisData = { id:'north', position: { x:0, y:0, z:4 } };
              		var projectionData = [{ 
			          id:'n', 
			          geometry:{ shape:'cube', x:1, y:1, z:1 }, 
                rotation:{ x:30, y:30, z:0 },
			          material:{ 
			            type: 'phong',
			            color:0xFF0000, 
			          },
			        }, { poi_id: 'north' }];
			        // add some points of interest (poi) for each of the compass points
			        awe.pois.add(poisData);
			        // awe.pois.add({ id:'north_east', position: { x:100, y:0, z:200 } });
			        // awe.pois.add({ id:'east', position: { x:200, y:0, z:0 } });
			        // awe.pois.add({ id:'south_east', position: { x:200, y:0, z:-200 } });
			        // awe.pois.add({ id:'south', position: { x:0, y:0, z:-200 } });
			        // awe.pois.add({ id:'south_west', position: { x:-200, y:0, z:-200 } });
			        // awe.pois.add({ id:'west', position: { x:-200, y:0, z:0 } });
			        // awe.pois.add({ id:'north_west', position: { x:-200, y:0, z:200 } });
			
			        // add projections to each of the pois
			        awe.projections.add(projectionData[0], projectionData[1]);

			        awe.projections.add({ 
			          id:'ne', 
			          geometry:{ shape:'sphere', radius:10 }, 
			          material:{ 
			            type: 'phong',
			            color:0xCCCCCC, 
			          },
			        }, { poi_id: 'north_east' });

			        awe.projections.add({ 
			          id:'e', 
			          geometry:{ shape:'cube', x:50, y:50, z:50 }, 
                rotation:{ x:30, y:30, z:0 },
			          material:{ 
			            type: 'phong',
			            color:0x00FF00, 
			          },
			        }, { poi_id: 'east' });

			        awe.projections.add({ 
			          id:'se', 
			          geometry:{ shape:'sphere', radius:10 }, 
			          material:{ 
			            type: 'phong',
			            color:0xCCCCCC, 
			          },
			        }, { poi_id: 'south_east' });

			        awe.projections.add({ 
			          id:'s', 
			          geometry:{ shape:'cube', x:50, y:50, z:50 }, 
                rotation:{ x:30, y:30, z:0 },
			          material:{ 
			            type: 'phong',
			            color:0xFFFFFF, 
			          },
			        }, { poi_id: 'south' });

			        awe.projections.add({ 
			          id:'sw', 
			          geometry:{ shape:'sphere', radius:10 }, 
			          material:{ 
			            type: 'phong',
			            color:0xCCCCCC, 
			          },
			        }, { poi_id: 'south_west' });

			        awe.projections.add({ 
			          id:'w', 
			          geometry:{ shape:'cube', x:50, y:50, z:50 }, 
                rotation:{ x:30, y:30, z:0 },
			          material:{ 
			            type: 'phong',
			            color:0x0000FF, 
			          },
			        }, { poi_id: 'west' });

			        awe.projections.add({ 
			          id:'nw', 
			          geometry:{ shape:'sphere', radius:10 }, 
			          material:{ 
			            type: 'phong',
			            color:0xCCCCCC, 
			          },
			        }, { poi_id: 'north_west' });
			
            },
          },
          { // else create a fallback
            capabilities: [],
            files: [],
            success: function() { 
              document.body.innerHTML = '<p>This demo currently requires a standards compliant mobile browser (e.g. Firefox on Android). NOTE: iOS does not currently support WebGL or WebRTC and has not implemented the DeviceOrientation API correctly. Please see <a href="http://lists.w3.org/Archives/Public/public-geolocation/2014Jan/0000.html">this post to the W3C GeoLocation Working Group</a> for more detailed information.</p>';
              return;
            },
          },
        ]);
      }
    });
  });