import React from 'react'
import { Card, CardContent, Typography, Grid } from '@material-ui/core'
import CountUp from 'react-countup'
import cx from 'classnames'

import styles from './Cards.module.css'

const HospitalCard = ({data:{ totalBeds, totalHospitals, lastRefreshed }} ) => {
    if(!totalBeds){
        return 'loading indian data.....'
    }
    console.log(totalBeds, totalHospitals, lastRefreshed)
    return(
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={5} className={cx(styles.card, styles.infected)} >
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Total Beds</Typography>
                        <Typography variant="h5"> 
                            <CountUp  start={0} end={totalBeds} duration={2} separator="," />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastRefreshed).toDateString() }</Typography>
                        <Typography variant="body2">Number of Beds avaialble in Hospitals</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={5} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Total Hospitals</Typography>
                        <Typography variant="h5">
                            <CountUp  start={0} end={totalHospitals} duration={2} separator="," />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastRefreshed).toDateString() }</Typography>
                        <Typography variant="body2">Number of Hospitals</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default HospitalCard