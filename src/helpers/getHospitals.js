import axios from "axios";

const getHospitals = (input, category, callback) => {

    const urlSlug = "http://mango.cs.uwp.edu:3000/api/v1/hospitals/"

    if (category === ""){

        axios.get(urlSlug, {}).then(res => {
            const hospitals = res.data
            let returnHospitals = []
            console.log("axios call for all")

            hospitals.data.forEach((hospital) => {
                let cleanedHospital = {}
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
            callback(returnHospitals)
        }).catch(err => {
            console.log("Error getting hospitals " + err)
        })

    } else if (category === "name") {
        console.log(category)
        axios.get(urlSlug,
            { params: {name: input.toUpperCase() }})
            .then(res => {
            const hospitals = res.data
            let returnHospitals = []
                console.log("axios call for name")

            hospitals.data.forEach((hospital) => {
                let cleanedHospital = {}
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
            callback(returnHospitals)
        }).catch(err => {
            console.log("Error getting hospitals " + err)
        })
    }else if (category === "city") {
        axios.get(urlSlug,
            { params: {city: input.toUpperCase()}})
            .then(res => {
                const hospitals = res.data
                let returnHospitals = []
                console.log("axios call for city")

                hospitals.data.forEach((hospital) => {
                    let cleanedHospital = {}
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
                callback(returnHospitals)
            }).catch(err => {
            console.log("Error getting hospitals " + err)
        })
    }
    else if (category === "providerId") {

        axios.get(urlSlug,
            { params: {providerId: input.toUpperCase()}})
            .then(res => {
                const hospitals = res.data
                let returnHospitals = []
                console.log("axios call for providerId")

                hospitals.data.forEach((hospital) => {
                    let cleanedHospital = {}
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
                callback(returnHospitals)
            }).catch(err => {
            console.log("Error getting hospitals " + err)
        })
    }
    else if (category === "state") {

        axios.get(urlSlug,
            { params: {state: input.toUpperCase()}})
            .then(res => {
                const hospitals = res.data
                let returnHospitals = []
                console.log("axios call for state")
                hospitals.data.forEach((hospital) => {
                    let cleanedHospital = {}
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
                callback(returnHospitals)
            }).catch(err => {
            console.log("Error getting hospitals " + err)
        })
    } else if (category === "county") {

        axios.get(urlSlug,
            { params: {county: input.toUpperCase()}})
            .then(res => {
                const hospitals = res.data
                let returnHospitals = []
                console.log("axios call for county")
                hospitals.data.forEach((hospital) => {
                    let cleanedHospital = {}
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
                callback(returnHospitals)
            }).catch(err => {
            console.log("Error getting hospitals " + err)
        })
    }
    console.log("Get Hospitals has been called.")
}

export default getHospitals;
