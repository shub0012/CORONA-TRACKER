import axios from 'axios';

const url = 'https://covid19.mathdro.id/api'

const inLatestUrl = 'https://api.rootnet.in/covid19-in/stats/latest'
const inTestingUrl = 'https://api.rootnet.in/covid19-in/stats/testing/latest'
const inBedsUrl = 'https://api.rootnet.in/covid19-in/hospitals/beds'
const inContactUrl = 'https://api.rootnet.in/covid19-in/contacts'

export const fetchData = async (country) => {

    let changableUrl = url
    
    if(country){
        console.log(country)
        changableUrl = `${url}/countries/${country}`
        if(country==="global"){
            changableUrl =  url
        }
        //console.log(changableUrl)
        
    }

    try {
        const { data:{ confirmed, recovered, deaths, lastUpdate } } = await axios.get(changableUrl)

        return { confirmed, recovered, deaths, lastUpdate }

    } catch (error) {
        console.log(error)
    }
}


export const fetchDailyData =  async () => {
    try {
        const { data } = await axios.get(`${url}/daily`)
       // console.log(data)
        const modifiedData = data.map((dailydata) => ({
            confirmed: dailydata.confirmed.total,
            deaths:dailydata.deaths.total,
            date:dailydata.reportDate,
        }))
        return modifiedData
    } catch(error){
        
    }
}

export const fetchCountries = async () => {
    try {
        const {data : { countries }} = await axios.get(`${url}/countries`)
        
        return countries.map((country) => country.name)
    } catch (error) {
        console.log(error)
    }
}


export const infetchData = async () => {

    try {
        const { data:{data: { summary: { total, confirmedCasesIndian, confirmedCasesForeign, discharged, deaths } },lastRefreshed } } = await axios.get(inLatestUrl)

        return { total, confirmedCasesIndian, confirmedCasesForeign, discharged, deaths, lastRefreshed }

    } catch (error) {
        console.log(error)
    }

}

export const infetchHospitalData = async () => {

    try {
        const { data:{data: { summary: { totalBeds, totalHospitals } } ,lastRefreshed } } = await axios.get(inBedsUrl)

        return { totalBeds, totalHospitals, lastRefreshed }

    } catch (error) {
        console.log(error)
    }

}

export const stateFetchData = async () => {


    try {
        const { data:{data: { regional },lastRefreshed } } = await axios.get(inLatestUrl)
       return {regional,lastRefreshed}

        
    } catch (error) {
        console.log(error)
    }

}

export const stateFetchContactData = async () => {

    try {
        const { data:{data:{contacts: {regional}} ,lastRefreshed } } = await axios.get(inContactUrl)
       return {regional,lastRefreshed}

        
    } catch (error) {
        console.log(error)
    }

}


export const fetchStates = async () => {
    try {
        const {data: {data : { regional } }} = await axios.get(inLatestUrl)
        
        //console.log(regional)

        return regional.map((location) => location.loc)

    } catch (error) {
        console.log(error)
    }
}

export const fetchStateContact = async () => {
    try {
        const {data: {data :{contacts:{ regional } }} }= await axios.get(inContactUrl)
        
        //console.log(regional)
        return regional.map((location) => location.loc)

    } catch (error) {
        console.log(error)
    }
}

export const fetchTestStats = async () => {
    try {
        const {data : { data : { day, totalSamplesTested, totalIndividualsTested, totalPositiveCases, source} }} = await axios.get(inTestingUrl)
        
        return { day, totalSamplesTested, totalIndividualsTested, totalPositiveCases, source }

    } catch (error) {
        console.log(error)
    }
}

export const fetchStateHospital = async () => {
    try {
        const {data: {data : { regional } }} = await axios.get(inBedsUrl)
        
        console.log("regional in api")
        console.log(regional)

        return regional.map((location) => location.state)

    } catch (error) {
        console.log(error)
    }
}

export const stateFetcHospitalhData = async () => {


    try {
        const { data:{data: { regional },lastRefreshed } } = await axios.get(inBedsUrl)
        //{ loc,totalConfirmed, discharged, deaths }
        //let stateData = {}
        //console.log(locs)
        //console.log("loc from api")
        //console.log(regional)
       return {regional,lastRefreshed}

        
    } catch (error) {
        console.log(error)
    }
}


export const fetchPrimaryContact = async () => {
    try {
        const {data : { data : {contacts : { primary : { number, email}}},lastRefreshed }} = await axios.get(inContactUrl)
        
        return { number,email,lastRefreshed }

    } catch (error) {
        console.log(error)
    }
}



