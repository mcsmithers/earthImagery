<template>
<v-layout column>
  <v-flex xs6 offset-xs3>
    <globe/>
    <panel/>
  </v-flex>
</v-layout>
</template>

<script>
import Globe from '@/components/Globe'
import Panel from '@/components/Panel'
export default {
  components: {
    Panel,
    Globe
  }
}
</script>

<style scoped>
</style>
