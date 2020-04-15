import React from 'react'
import { Card, CardContent, Typography, Grid } from '@material-ui/core'
import CountUp from 'react-countup'
import cx from 'classnames'

import styles from './Cards.module.css'

const ContactCard = ({data:{ number,email }} ) => {
    if(!number){
        return 'loading indian data.....'
    }
    console.log(number)
    const tollfree = Number(1075)
    return(
        
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)} >
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Number</Typography>
                        <Typography variant="body1"> 
                            {number}
                        </Typography>
                        <Typography variant="body2">Primary Number to Contact</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={4} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Email</Typography>
                        <Typography variant="body1">
                            {email}
                        </Typography>
                        <Typography variant="body2">_</Typography>
                        <Typography variant="body1">Primary Email Address</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Toll-Free Number</Typography>
                        <Typography variant="h5">
                            <CountUp  start={0} end= {tollfree} duration={2} separator="," />
                        </Typography>
                        <Typography variant="body1">Toll Free Number</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default ContactCard