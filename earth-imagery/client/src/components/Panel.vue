<template>
<v-layout column>
  <v-flex xs6 offset-xs3>
    <div class="white elevation-2">
      <v-toolbar flat dense class="cyan" dark>
        <v-toolbar-title>{{title}}</v-toolbar-title>
        </v-toolbar>
      <div class="pl-4 pr-4 pt-2 pb-2">
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
      </div>
    </div>
  </v-flex>
</v-layout>
</template>

<script>
export default {

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
