<template>
<v-layout column>
  <v-flex xs6 offset-xs3>
   <panel title='Register'>
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
        <v-btn flat dark class="cyan" v-on:click="register">Register</v-btn>
      </panel>
  </v-flex>
</v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/Panel'

export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
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
