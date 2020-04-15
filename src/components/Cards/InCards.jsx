import React from 'react'
import { Card, CardContent, Typography, Grid } from '@material-ui/core'
import CountUp from 'react-countup'
import cx from 'classnames'

import styles from './Cards.module.css'

const InCards = ({data:{ total, confirmedCasesIndian, confirmedCasesForeign, discharged, deaths ,lastRefreshed }} ) => {
    if(!total){
        return 'loading indian data.....'
    }
    console.log(total, confirmedCasesIndian, confirmedCasesForeign, discharged, deaths ,lastRefreshed)
    return(
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)} >
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5"> 
                            <CountUp  start={0} end={total} duration={2} separator="," />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastRefreshed).toDateString() }</Typography>
                        <Typography variant="body2">Number of cases of COVID-19 in India</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">
                            <CountUp  start={0} end={discharged} duration={2} separator="," />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastRefreshed).toDateString() }</Typography>
                        <Typography variant="body2">Number of Recovered cases of COVID-19  in India</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5">
                            <CountUp  start={0} end={deaths} duration={2} separator="," />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastRefreshed).toDateString() }</Typography>
                        <Typography variant="body2">Number of Deaths caused of COVID-19 in India</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default InCards