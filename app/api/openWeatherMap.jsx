const axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=b0ee0c9623458fd091f55f90fa41e89b&units=imperial';

//api-key c4e735ea8bd7e7b6dc8368c752517b2d

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function (res) {
      if (res.data.cod && res.data.message) {
        throw new Error('City not found');
      } else {
        return res.data;
      }
    }, function (res) {
      throw new Error('City not found');
    })
  }
}
