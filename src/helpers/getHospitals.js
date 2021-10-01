import axios from "axios";

const getHospitals = (callback) => {


    axios.get('http://mango.cs.uwp.edu:3000/api/v1/hospitals/',{

    }).then(res => {
        const hospitals = res.data
        let returnHospitals = []

        console.log(hospitals.data)

        hospitals.data.forEach((hospital) => {
            let cleanedHospital = {}
            console.log(hospital)

            cleanedHospital.hospitalName = hospital.name
            cleanedHospital.id = hospital._id

            returnHospitals.push(cleanedHospital);
        })

        console.log(returnHospitals)

        callback(returnHospitals)

    })

}

/*
{
        id: 9, hospitalName: "All Saints",
        address: "1234 Spring St.",
        city: "Racine", state: "WI",
        zipCode: "53402", countyName: "Racine",
        phone: "2621234567", type: "Type",
        ownership:"ownership"
    },
 */

export default getHospitals;
