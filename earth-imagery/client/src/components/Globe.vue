<template>
<v-layout>
  <v-flex xl12>
    <div class="globe">
      <!-- <h2>I will be an interactive globe, until there here is a cute puppy</h2> -->
      <!-- <img class="placeholder" src="http://www.placepuppy.net/500/500"> -->
      <h2>Search and place a pin to see some land satellite pictures</h2>
      <label>
        <gmap-autocomplete
          @place_changed="setPlace">
        </gmap-autocomplete>
        <button @click="addMarker">Add</button>
      </label>
      <gmap-map
        :center="center"
        :zoom="12"
        style="width:100%;  height: 400px;"
      >
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="center=m.position"
      ></gmap-marker>
    </gmap-map>
    </div>
  </v-flex>
</v-layout>
</template>

<script>
export default {
  name: 'Globe',
  data () {
    return {
      center: { lat: 40.574, lng: -111.888 },
      markers: [],
      places: [],
      currentPlace: null
    }
  },

  mounted () {
    this.geolocate()
  },

  methods: {
    // receives a place object via the autocomplete component
    setPlace (place) {
      this.currentPlace = place
    },
    addMarker () {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        }
        this.markers.push({ position: marker })
        this.places.push(this.currentPlace)
        this.center = marker
        this.currentPlace = null
      }
    },
    geolocate: function () {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
      })
    }
  }
}
</script>

<style scoped>
.map {
  width: 100%;
  height: 100%;
}
</style>
