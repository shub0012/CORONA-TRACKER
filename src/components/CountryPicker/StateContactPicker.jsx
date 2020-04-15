import React, { useState, useEffect } from 'react'
import { NativeSelect, FormControl } from '@material-ui/core'

import styles from './CountryPicker.module.css'

import { fetchStateContact } from '../../api'

const StatePicker = ({ handleStateContactChange }) => {

    const [fetchedStates, setFetchedStates] = useState([])
    
    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedStates(await fetchStateContact());
        }
        fetchAPI()
    },[])

    //console.log(fetchedCountries)
    return(
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => handleStateContactChange(e.target.value)}>
                <option value="">Select any State</option>
                {fetchedStates.map((loc, i) => <option key={i} value={loc}>{loc}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default StatePicker