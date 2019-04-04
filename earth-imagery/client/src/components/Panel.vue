<template>
<v-layout column>
  <v-flex>
    <div class="white elevation-2">
      <v-toolbar flat dense class="cyan" dark>
        <v-toolbar-title>{{title}}</v-toolbar-title>
        </v-toolbar>
      <div class="pl-12 pr-12 pt-6 pb-6">
        <div slot="image"></div>
        <div slot="image-info">
            <ImageTable/>
        </div>
      </div>
    </div>
  </v-flex>
</v-layout>
</template>

<script>
import ImageTable from '@/components/ImageTable'
export default {
  data () {
    return {
      title: 'Image Info'
    }
  },
  components: {
    ImageTable
  }
}
</script>

<style scoped>
</style>
