import axios from "axios";

const getHospitals = (input, category, callback) => {

    const urlSlug = "http://mango.cs.uwp.edu:3000/api/v1/hospitals/"


    if (category === "all"){

        axios.get(urlSlug, {}).then(res => {
            const hospitals = res.data
            let returnHospitals = []

            hospitals.data.forEach((hospital) => {
                let cleanedHospital = {}
                console.log(hospital)
                cleanedHospital.hospitalName = hospital.name
                cleanedHospital.id = hospital.providerId
                cleanedHospital.address = hospital.address
                cleanedHospital.city = hospital.city
                cleanedHospital.state = hospital.state
                cleanedHospital.phoneNumber = hospital.phoneNumber
                cleanedHospital.zipCode = hospital.zipCode
                cleanedHospital.county = hospital.county
                returnHospitals.push(cleanedHospital);
            })
            console.log(returnHospitals)
            console.log(category)
            console.log(input)
            callback(returnHospitals)
        })

    } else if (category === "name"){
        console.log(category)
        axios.get(urlSlug,
            { params: { name: input }})
            .then(res => {
            const hospitals = res.data
            let returnHospitals = []

            //console.log(hospitals.data)

            hospitals.data.forEach((hospital) => {
                let cleanedHospital = {}
                console.log(hospital)
                cleanedHospital.hospitalName = hospital.name
                cleanedHospital.id = hospital.providerId
                cleanedHospital.address = hospital.address
                cleanedHospital.city = hospital.city
                cleanedHospital.state = hospital.state
                cleanedHospital.phoneNumber = hospital.phoneNumber
                cleanedHospital.zipCode = hospital.zipCode
                cleanedHospital.county = hospital.county
                returnHospitals.push(cleanedHospital);
            })
                console.log(returnHospitals)
                console.log(category)
                console.log(input)
            callback(returnHospitals)

        })
    }
}

export default getHospitals;
