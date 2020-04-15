import React, { useState, useEffect } from 'react'
import { NativeSelect, FormControl } from '@material-ui/core'

import styles from './CountryPicker.module.css'

import { fetchStateHospital } from '../../api'

const StateHospitalPicker = ({ handleStateHospitalChange }) => {

    const [fetchedStateHospital, setFetchedStateHospital] = useState([])
    
    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedStateHospital(await fetchStateHospital());
        }
        fetchAPI()
    },[setFetchedStateHospital])

    //console.log(fetchedCountries)
    return(
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => handleStateHospitalChange(e.target.value)}>
                <option value="">Select any State</option>
                {fetchedStateHospital.map((state, i) => <option key={i} value={state}>{state}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default StateHospitalPicker