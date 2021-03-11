const fetch = require('node-fetch');
const ApiKey = "fa57d3578d2985d941d08ba808142401" // your api key

const reqIP = "xxx.xxx.xxx.xxx" // ipv4

async function getIpInfo(ip) {
    const response = await fetch('http://api.ipstack.com/' + ip + "?access_key=" + ApiKey);
    const data = await response.json();

    return data
}

let returnedData = getIpInfo(reqIP)

returnedData.then(function(result) {
   console.log("Data resolved:")
   console.log("=====================")
   console.log(`
   IPv4: ${result.ip}
   Country: ${result.country_name}
   Region: ${result.region_name}
   City: ${result.city}
   ZIP Code: ${result.zip}
   Coordinates: LAT: ${result.latitude} LON: ${result.longitude}

   Location Information:

   Country Capital: ${result.location.capital}
   Country Phone Code: ${result.location.calling_code}
   Country Flag Emoji: ${result.location.country_flag_emoji}
   Country is in Europe: ${result.location.is_eu}

=====================
   `)
})