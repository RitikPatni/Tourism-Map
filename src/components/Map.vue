<template>
  <div class="google-map" :id="mapName">
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "google-map",
  props: ["name"],

  data: function() {
    return {
      mapName: this.name + "-map",
      markerCoordinates: [],
      map: null,
      bounds: null,
      markers: [],
      show: true,
      currentMarker: null,
      markerInfo: "",
      userQuery: ""
    };
  },
  mounted: function() {
    const foursquareUrl = "https://api.foursquare.com/v2/venues/search?ll=";
    const foursquareSecretKey =
      "&client_secret=RE40UE33TGTIIVZEIWIRW3KNHDG3E3UPRLZLE40O1PDDXOIP&v=20180312";
    const foursquareClientId =
      "&limit=1&client_id=JVYYDZMWQWFNXS5EAYNSCTUKMA2DWO2ZNJRMFAIQXXT5WX5S";
    const foursquarePhotoUrl = "https://api.foursquare.com/v2/venues/";
    const foursquarePhotoClientId =
      "&client_id=JVYYDZMWQWFNXS5EAYNSCTUKMA2DWO2ZNJRMFAIQXXT5WX5S";
    const foursquarePhotoSecretKey =
      "&client_secret=RE40UE33TGTIIVZEIWIRW3KNHDG3E3UPRLZLE40O1PDDXOIP&group=venue&v=20180312";
    axios
      .get(
        "https://gist.githubusercontent.com/RitikPatni/366a1fff43e0d92f81688ee7a83dbf47/raw/aa5fa81c5c6685b2364104acf74a2ea59be463eb/tourist-places.json"
      )
      .then(retrievedData => {
        this.markerCoordinates = retrievedData.data;
        this.$emit("allMarkerData", this.markerCoordinates);
        this.bounds = new google.maps.LatLngBounds();
        const element = document.getElementById(this.mapName);
        const mapCentre = this.markerCoordinates[0];
        let mapZoomStatus = false;
        const options = {
          center: new google.maps.LatLng(21.146633, 79.08886),
          styles: [
            {
              elementType: "geometry",
              stylers: [
                {
                  color: "#1d2c4d"
                }
              ]
            },
            {
              elementType: "labels.text.fill",
              stylers: [
                {
                  color: "#8ec3b9"
                }
              ]
            },
            {
              elementType: "labels.text.stroke",
              stylers: [
                {
                  color: "#1a3646"
                }
              ]
            },
            {
              featureType: "administrative.country",
              elementType: "geometry.stroke",
              stylers: [
                {
                  color: "#4b6878"
                }
              ]
            },
            {
              featureType: "administrative.land_parcel",
              elementType: "labels.text.fill",
              stylers: [
                {
                  color: "#64779e"
                }
              ]
            },
            {
              featureType: "administrative.neighborhood",
              stylers: [
                {
                  visibility: "off"
                }
              ]
            },
            {
              featureType: "administrative.province",
              elementType: "geometry.stroke",
              stylers: [
                {
                  color: "#4b6878"
                }
              ]
            },
            {
              featureType: "landscape.man_made",
              elementType: "geometry.stroke",
              stylers: [
                {
                  color: "#334e87"
                }
              ]
            },
            {
              featureType: "landscape.natural",
              elementType: "geometry",
              stylers: [
                {
                  color: "#023e58"
                }
              ]
            },
            {
              featureType: "poi",
              elementType: "geometry",
              stylers: [
                {
                  color: "#283d6a"
                }
              ]
            },
            {
              featureType: "poi",
              elementType: "labels.text",
              stylers: [
                {
                  visibility: "off"
                }
              ]
            },
            {
              featureType: "poi",
              elementType: "labels.text.fill",
              stylers: [
                {
                  color: "#6f9ba5"
                }
              ]
            },
            {
              featureType: "poi",
              elementType: "labels.text.stroke",
              stylers: [
                {
                  color: "#1d2c4d"
                }
              ]
            },
            {
              featureType: "poi.business",
              stylers: [
                {
                  visibility: "off"
                }
              ]
            },
            {
              featureType: "poi.park",
              elementType: "geometry.fill",
              stylers: [
                {
                  color: "#023e58"
                }
              ]
            },
            {
              featureType: "poi.park",
              elementType: "labels.text.fill",
              stylers: [
                {
                  color: "#3C7680"
                }
              ]
            },
            {
              featureType: "road",
              elementType: "geometry",
              stylers: [
                {
                  color: "#304a7d"
                }
              ]
            },
            {
              featureType: "road",
              elementType: "labels",
              stylers: [
                {
                  visibility: "off"
                }
              ]
            },
            {
              featureType: "road",
              elementType: "labels.icon",
              stylers: [
                {
                  visibility: "off"
                }
              ]
            },
            {
              featureType: "road",
              elementType: "labels.text.fill",
              stylers: [
                {
                  color: "#98a5be"
                }
              ]
            },
            {
              featureType: "road",
              elementType: "labels.text.stroke",
              stylers: [
                {
                  color: "#1d2c4d"
                }
              ]
            },
            {
              featureType: "road.arterial",
              stylers: [
                {
                  visibility: "off"
                }
              ]
            },
            {
              featureType: "road.highway",
              elementType: "geometry",
              stylers: [
                {
                  color: "#2c6675"
                }
              ]
            },
            {
              featureType: "road.highway",
              elementType: "geometry.stroke",
              stylers: [
                {
                  color: "#255763"
                }
              ]
            },
            {
              featureType: "road.highway",
              elementType: "labels",
              stylers: [
                {
                  visibility: "off"
                }
              ]
            },
            {
              featureType: "road.highway",
              elementType: "labels.text.fill",
              stylers: [
                {
                  color: "#b0d5ce"
                }
              ]
            },
            {
              featureType: "road.highway",
              elementType: "labels.text.stroke",
              stylers: [
                {
                  color: "#023e58"
                }
              ]
            },
            {
              featureType: "road.local",
              stylers: [
                {
                  visibility: "off"
                }
              ]
            },
            {
              featureType: "transit",
              stylers: [
                {
                  visibility: "off"
                }
              ]
            },
            {
              featureType: "transit",
              elementType: "labels.text.fill",
              stylers: [
                {
                  color: "#98a5be"
                }
              ]
            },
            {
              featureType: "transit",
              elementType: "labels.text.stroke",
              stylers: [
                {
                  color: "#1d2c4d"
                }
              ]
            },
            {
              featureType: "transit.line",
              elementType: "geometry.fill",
              stylers: [
                {
                  color: "#283d6a"
                }
              ]
            },
            {
              featureType: "transit.station",
              elementType: "geometry",
              stylers: [
                {
                  color: "#3a4762"
                }
              ]
            },
            {
              featureType: "water",
              elementType: "geometry",
              stylers: [
                {
                  color: "#0e1626"
                }
              ]
            },
            {
              featureType: "water",
              elementType: "labels.text",
              stylers: [
                {
                  visibility: "off"
                }
              ]
            },
            {
              featureType: "water",
              elementType: "labels.text.fill",
              stylers: [
                {
                  color: "#4e6d70"
                }
              ]
            }
          ]
        };
        this.infoWindow = new google.maps.InfoWindow({
          content: self.contentString
        });
        this.map = new google.maps.Map(element, options);
        this.markerCoordinates.map(coord => {
          const position = new google.maps.LatLng(
            coord.latitude,
            coord.longitude
          );
          const marker = new google.maps.Marker({
            position,
            map: this.map
          });
          this.markers.push(marker);
          self = this;
          let markerPrevLoc = {
            lat: null,
            lng: null
          };
          this.map.fitBounds(this.bounds.extend(position));
          {
            marker.addListener("click", function() {
              let markerInfo = {
                lat: this.getPosition().lat(),
                lng: this.getPosition().lng()
              };
              if (markerInfo.lat == markerPrevLoc.lat) {
                if (!mapZoomStatus) {
                  this.map.setZoom(7);
                  this.map.setCenter(marker.getPosition());
                  mapZoomStatus = true;
                  self.$emit("openSideBar");
                } else {
                  this.map.setZoom(4);
                  this.map.setCenter(marker.getPosition());
                  mapZoomStatus = false;
                  self.$emit("closeSideBar");
                }
              } else {
                self.$emit("openSideBar");
                self.$emit("locdata", markerInfo);
                this.map.setZoom(7);
                this.map.setCenter(marker.getPosition());
              }
              markerPrevLoc.lat = marker.getPosition().lat();
              markerPrevLoc.lng = marker.getPosition().lng();
            });
            marker.addListener("mouseover", function() {
              let photoUrl = null;
              let markerInfo = {
                lat: this.getPosition().lat(),
                lng: this.getPosition().lng()
              };
              let endPoint = `${foursquareUrl}${markerInfo.lat},${
                markerInfo.lng
              }${foursquareClientId}${foursquareSecretKey}`;
              console.log(endPoint);
              axios
                .get(endPoint)
                .then(response => {
                  let info = response.data.response.venues;
                  let photoEndPoint = `${foursquarePhotoUrl}${
                    info[0].id
                  }/photos?${foursquarePhotoClientId}${foursquarePhotoSecretKey}`;
                  console.log(info);
                  axios
                    .get(photoEndPoint)
                    .then(photoResponse => {
                      if (photoResponse.data.response.photos.count != 0) {
                        photoUrl = `${
                          photoResponse.data.response.photos.items[0].prefix
                        }50x50${
                          photoResponse.data.response.photos.items[0].suffix
                        }`;
                      } else {
                        this.photoInfo = null;
                      }
                      self.contentString = `<div class="info-box-wrap">
                                              <img src=${photoUrl} />
                                              <div class="info-box-text-wrap">
                                                <h6 class="address">${
                                                  info[0].name
                                                }, ${info[0].location.city}, ${
                        info[0].postalCode
                      }, ${info[0].state}</h6>
                                                <p class="price">Checkins: ${
                                                  info[0].stats.checkinsCount
                                                }</p>
                                              </div>
                                              <div class="action-btns"></div>
                                            </div>`;
                    })
                    .catch(error => console.log(error));
                })
                .catch(error => console.log(error));

              self.infoWindow.setContent(self.contentString);
              self.infoWindow.open(this.map, this);
            });
            marker.addListener("mouseout", function() {
              self.infoWindow.close(this.map, this);
            });
          }
        });
      })
      .catch(error => console.log(error));
  }
};
</script>
<style scoped>
.google-map {
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  background: gray;
  position: relative;
}
</style>
