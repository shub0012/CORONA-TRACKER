import React from 'react'
import { Card, CardContent, Typography, Grid } from '@material-ui/core'
import cx from 'classnames'

import styles from './Cards.module.css'

const StateContactCard = ({data:{ number }} ) => {
    if(!number){
        return null
    }
    console.log(number)
    return(
        
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={"auto"} className={cx(styles.card, styles.infected)} >
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Number</Typography>
                        <Typography variant="body1"> 
                            {number}
                        </Typography>
                        <Typography variant="body2">State Number to Contact</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default StateContactCard