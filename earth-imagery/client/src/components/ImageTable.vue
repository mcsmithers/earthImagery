<template>
     <!-- TODO change to the NASA data when it's ready -->
  <v-data-table
    :headers="headers"
    :items="earthImages"
  >
    <template v-slot:items="props">
      <td class="text-xs-left">{{ props.item.date }}</td>
      <td class="text-xs-left">{{ props.item.latitude }}</td>
      <td class="text-xs-left">{{ props.item.longitude }}</td>
      <td class="text-xs-left">{{ props.item.cloud_score }}</td>
      <!-- TODO: render the image in this one -->
      <td class="text-xs-left">{{ props.item.image_url }}</td>
    </template>
  </v-data-table>
</template>

<script>
// TODO: change to interactive when NASA data is set up
export default {
  data () {
    return {
      headers: [
        { text: 'Date', value: 'date', sortable: false },
        { text: 'Latitude', value: 'latitude', sortable: false },
        { text: 'Longitude', value: 'longitude', sortable: false },
        { text: 'Cloud Score', value: 'cloud_score', sortable: false },
        { text: 'Image URL', value: 'image_url', sortable: false }
      ],
      earthImages: [
        {
          date: '2019-04-04',
          latitude: 1.25,
          longitude: 100.75,
          cloud_score: 4.0,
          image_url: 'https://earthengine.googleapis.com/api/thumb?thumbid=9081d44f6984d0e4791922804beb54a4&token=ffc46da9fbe067bf62fb0af83ed5ce92'
        },
        {
          date: '2019-04-03',
          latitude: 1.5,
          longitude: 100.5,
          cloud_score: 4.0,
          image_url: 'https://earthengine.googleapis.com/api/thumb?thumbid=9081d44f6984d0e4791922804beb54a4&token=ffc46da9fbe067bf62fb0af83ed5ce92'
        },
        {
          date: '2019-04-02',
          latitude: 1.75,
          longitude: 100.25,
          cloud_score: 4.0,
          image_url: 'https://earthengine.googleapis.com/api/thumb?thumbid=9081d44f6984d0e4791922804beb54a4&token=ffc46da9fbe067bf62fb0af83ed5ce92'
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>
