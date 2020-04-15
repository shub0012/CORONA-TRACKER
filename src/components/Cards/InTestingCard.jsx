import React from 'react'
import { Card, CardContent, Typography, Grid, Link } from '@material-ui/core'
import CountUp from 'react-countup'
import cx from 'classnames'

import styles from './Cards.module.css'

const Cards = ({data:{ day, totalSamplesTested, totalIndividualsTested, totalPositiveCases, source }} ) => {
    if(!totalSamplesTested){
        return 'loading indian data.....'
    }
    console.log( day, totalSamplesTested, totalIndividualsTested, totalPositiveCases, source )
    return(
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)} >
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Sample Tested</Typography>
                        <Typography variant="h5"> 
                            <CountUp  start={0} end={totalSamplesTested} duration={2} separator="," />
                        </Typography>
                        <Typography color="textSecondary">{ day }</Typography>
                        <Typography variant="body2">Number of Sample Tested in India</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Individual's Tested</Typography>
                        <Typography variant="h5">
                            <CountUp  start={0} end={totalIndividualsTested} duration={2} separator="," />
                        </Typography>
                        <Typography color="textSecondary">{ day }</Typography>
                        <Typography variant="body2">Number of Individual's tested in India</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Postive Cases</Typography>
                        <Typography variant="h5">
                            <CountUp  start={0} end={totalPositiveCases} duration={2} separator="," />
                        </Typography>
                        <Typography color="textSecondary">{ day }</Typography>
                        <Typography variant="body2">Number of Postive cases of COVID-19 in India</Typography>
                    </CardContent>
                </Grid>
                <Typography className={styles.container}>
                    <Link href="https://icmr.nic.in/content/covid-19"  target="_blank">
                        More detail on Covid-19 Testing
                    </Link>
                </Typography>
            </Grid>
        </div>
    )
}

export default Cards