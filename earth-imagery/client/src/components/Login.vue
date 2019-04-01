<template>
<v-layout column>
  <v-flex xs6 offset-xs3>
    <div class="white elevation-2">
      <v-toolbar flat dense class="cyan" dark>
        <v-toolbar-title>Login</v-toolbar-title>
      </v-toolbar>
      <div class="pl-4 pr-4 pb-2 Login">
        <form name="earth-imagery-form" autocomplete="off">
        <v-flex xs12 sm6 md3>
          <v-text-field
            placeholder="Email"
            v-model="email"
          ></v-text-field>
        </v-flex>
        <br/>
        <v-flex xs12 sm6 md3>
          <v-text-field
            v-model="password"
            placeholder="Password"
            type="password"
            autocomplete="new-password"
          ></v-text-field>
        </v-flex>
        </form>
        <br>
        <div v-html="error" class="error" />
        <br>
        <v-btn flat dark class="cyan" v-on:click="login">Login</v-btn>
      </div>
    </div>
  </v-flex>
</v-layout>
</template>

<script>
import AuthenticationService from '../services/AuthenticationService'

export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error{
  color: red;
}

</style>
