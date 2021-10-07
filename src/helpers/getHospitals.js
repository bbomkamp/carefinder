import axios from "axios";

const getHospitals = (input, category, callback) => {

    const urlSlug = "http://mango.cs.uwp.edu:3000/api/v1/hospitals/"

    // Initial load of hospitals
    if (category === "") {

        // GET call
        axios.get(urlSlug, {}).then(res => {
            const hospitals = res.data
            let returnHospitals = []

            // Grab information needed to display in Grid from each hospital and return it.
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

    // Search by name.
    } else if (category === "name") {

        // GET call
        axios.get(urlSlug,
            {params: {name: input.toUpperCase()}})
            .then(res => {
                const hospitals = res.data
                let returnHospitals = []

                // Grab information needed to display in Grid from each hospital and return it.
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

    // Search by city.
    } else if (category === "city") {

        // GET call
        axios.get(urlSlug,
            {params: {city: input.toUpperCase()}})
            .then(res => {
                const hospitals = res.data
                let returnHospitals = []

                // Grab information needed to display in Grid from each hospital and return it.
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

    // Search by Provider ID
    } else if (category === "providerId") {

        // GET call
        axios.get(urlSlug,
            {params: {providerId: input.toUpperCase()}})
            .then(res => {
                const hospitals = res.data
                let returnHospitals = []

                // Grab information needed to display in Grid from each hospital and return it.
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

    // Search by state
    } else if (category === "state") {

        // GET call
        axios.get(urlSlug,
            {params: {state: input.toUpperCase()}})
            .then(res => {
                const hospitals = res.data
                let returnHospitals = []

                // Grab information needed to display in Grid from each hospital and return it.
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

    // Search by county
    } else if (category === "county") {

        // GET call
        axios.get(urlSlug,
            {params: {county: input.toUpperCase()}})
            .then(res => {
                const hospitals = res.data
                let returnHospitals = []
                hospitals.data.forEach((hospital) => {

                    // Grab information needed to display in Grid from each hospital and return it.
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

    // Search by ZipCode
    else if (category === "zipCode") {

        // GET call
        axios.get(urlSlug,
            {params: {zipCode: input.toUpperCase()}})
            .then(res => {
                const hospitals = res.data
                let returnHospitals = []

                // Grab information needed to display in Grid from each hospital and return it.
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

    // Search by city and state
    } else if (category === "cityAndState") {

        // Split user input, removing whitespace, and save to an array while casting to uppercase.
        let stringArray = input.split(/\s+/);
        stringArray = stringArray.map(function (x) {
            return x.toUpperCase();
        })

        // GET call
        axios.get(urlSlug,
            {params: {city: stringArray[0], state: stringArray[1]}})
            .then(res => {
                console.log(stringArray[0])
                console.log(stringArray[1])
                const hospitals = res.data
                let returnHospitals = []

                // Grab information needed to display in Grid from each hospital and return it.
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
}

export default getHospitals;
