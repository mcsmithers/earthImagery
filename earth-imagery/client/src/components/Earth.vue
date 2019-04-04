<template>
<v-layout>
  <v-flex xl12 offset-xs3>
    <globe/>
    <details title='Location Images and Data'/>
  </v-flex>
</v-layout>
</template>

<script>
import Globe from '@/components/Globe'
import Details from '@/components/Details'
export default {
  components: {
    Details,
    Globe
  }
}
</script>

<style scoped>
</style>
