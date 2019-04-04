<template>
  <v-flex xs12>
    <div class="white elevation-2">
      <v-toolbar flat dense class="cyan" dark>
        <v-toolbar-title>{{title}}</v-toolbar-title>
        </v-toolbar>
      <div class="pl-12 pr-12 pt-6 pb-6">
        <div slot="image-info">
            <ImageTable/>
        </div>
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
