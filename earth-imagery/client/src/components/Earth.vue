<template>
<v-layout>
  <v-flex xl12 offset-xs3>
    <globe/>
    <panel title='Location Images and Data'/>
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
