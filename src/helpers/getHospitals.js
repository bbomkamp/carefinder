import axios from 'axios'

const getHospitals = (callback) => {

    let apiKey = "c29a009813c525eecf7abf55cffc03af";

    axios.get('http://www.knautzfamilywi.com/CareFinder-1.0.0/api/hospitals',{
        headers: {
            'X-API-KEY': apiKey}
    }).then(res => {console.log(res)})
}
export default getHospitals();