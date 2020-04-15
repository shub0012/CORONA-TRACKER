import React, { useState, useEffect } from 'react'
import { NativeSelect, FormControl } from '@material-ui/core'

import styles from './CountryPicker.module.css'

import { fetchStates } from '../../api'

const StatePicker = ({ handleStateChange }) => {

    const [fetchedStates, setFetchedStates] = useState([])
    
    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedStates(await fetchStates());
        }
        fetchAPI()
    },[setFetchedStates])

    //console.log(fetchedCountries)
    return(
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => handleStateChange(e.target.value)}>
                <option value="">Select any State</option>
                {fetchedStates.map((loc, i) => <option key={i} value={loc}>{loc}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default StatePicker