import Api from '@/services/Api'

export default {
  getImagery () {
    return Api().get('https://api.nasa.gov/planetary/earth/imagery/?lon=-111.8&lat=40.5&cloud_score=True&api_key=DEMO_KEY')
  }
}
