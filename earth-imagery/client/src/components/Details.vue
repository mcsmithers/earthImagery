<template>
  <v-flex xs12>
    <div class="white elevation-2">
      <v-toolbar flat dense class="cyan" dark>
        <v-toolbar-title>{{title}}</v-toolbar-title>
        </v-toolbar>
        <div slot="image-info">
            <ImageTable/>
        </div>
    </div>
  </v-flex>
</template>

<script>
import ImageTable from '@/components/ImageTable'
export default {
  components: {
    ImageTable
  },
  props: [
    'title'
  ]
}
</script>

<style scoped>
</style>
