<template>
  <v-toolbar fixed class="cyan" dark>
    <v-toolbar-title class="mr-4">
      <span class="home" :to="{name: 'home'}">
        Earth Imagery
        </span>
      </v-toolbar-title>
      <v-toolbar-items>
        <v-btn flat dark :to="{name: 'earth'}">Browse Earth
        </v-btn>
        </v-toolbar-items>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn v-if="!$store.state.isUserLoggedIn" flat dark :to="{name: 'login'}">Login
            </v-btn>
            <v-btn flat dark  v-if="!$store.state.isUserLoggedIn" :to="{name: 'register'}">Sign Up
            </v-btn>
            <v-btn flat dark  v-if="$store.state.isUserLoggedIn">Log Out
            </v-btn>
        </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'root'
      })
    }
  }
}
</script>

<style scoped>
.home {
  cursor: pointer;
}
.home:hover {
  color: darkorange;
}
</style>
