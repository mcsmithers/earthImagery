<template>
<v-layout column>
  <v-flex xs6 offset-xs3>
      <panel title='Login'>
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
        <br>
        <div v-html="error" class="error" />
        <br>
        <v-btn flat dark class="cyan" v-on:click="login">Login</v-btn>
      </panel>
  </v-flex>
</v-layout>
</template>

<script>
import Panel from '@/components/Panel'
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
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  },
  components: {
    Panel
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error{
  color: red;
}

</style>
