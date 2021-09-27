import axios from 'axios'

const getHospitals = (callback) => {

    let apiKey = "c29a009813c525eecf7abf55cffc03af";

    axios.get('http://mango.cs.uwp.edu:3000/api/v1/hospitals/',{

    }).then(res => {console.log(res)})
}
export default getHospitals();