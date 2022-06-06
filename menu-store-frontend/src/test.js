const axios = require('axios')

axios.get('http://178.23.0.1:8080').then(res => console.log(res.data))