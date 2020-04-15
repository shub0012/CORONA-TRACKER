import React from 'react'
//import { fetchDailyData } from '../../api'
import { Doughnut } from 'react-chartjs-2'

import styles from '../Chart/Chart.module.css'


const doughnutChart = ({data:{ state, ruralHospitals, ruralBeds,urbanHospitals,urbanBeds}  }) => {
    
    const pieChartBed = (
        urbanBeds 
        ? (
            <Doughnut 
                data= {{
                    labels: ['Beds in Rural Area', 'Beds in Urban Area'],
                    datasets: [{
                        label: 'Beds',
                        backgroundColor: ['rgba(0, 0, 255, 0.6)', 'rgba(0, 255, 0, 0.6)'],
                        data: [ ruralBeds,  urbanBeds ],
                    }]
                }}
            
            />
        ): null
    )

    const pieChartHospital = (
        urbanHospitals 
        ? (
            <Doughnut 
                data= {{
                    labels: ['Hospitals in Rural Area', 'Hospitals in Urban Area'],
                    datasets: [{
                        label: 'Hospitals',
                        backgroundColor: ['#FF6384', '#36A2EB'],
                        data: [ ruralHospitals,  urbanHospitals ],
                    }]
                }}
            
            />
        ): null
    )

    return(
        <div className={styles.container}>
            {pieChartHospital}
            {pieChartBed}
        </div>
    )
}

export default doughnutChart