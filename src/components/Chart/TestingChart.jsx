import React from 'react'
//import { fetchDailyData } from '../../api'
import { Doughnut } from 'react-chartjs-2'

import styles from './Chart.module.css'


const TestingChart = ({data:{ day, totalSamplesTested, totalIndividualsTested, totalPositiveCases }}) => {
    
    // const barChart = (
    //     totalSamplesTested
    //      ? (
    //         <Bar
    //             data={{
    //                 labels: ['Sample Tested', 'Individuals Tested', 'Postive Cases'],
    //                 datasets: [{
    //                     label: 'People',
    //                     backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
    //                     data: [totalSamplesTested,  totalIndividualsTested, totalPositiveCases]
    //                 }]
    //             }}
    //             options={{
    //                 legend: { display: false},
    //                 title: { display: true, text: `Covid-19 Test Stats as of ${day}`}
    //             }}
    //         />
    //      ): null
    // )

    

    const pieChart = (
        totalSamplesTested 
        ? (
            <Doughnut 
                data= {{
                    labels: ['Sample Tested', 'Individuals Tested', 'Postive Cases'],
                    datasets: [{
                        label: 'Tests',
                        backgroundColor: ['rgba(0, 0, 255, 0.6)', 'rgba(0, 255, 0, 0.6)','rgba(255, 0, 0, 0.6)'],
                        data: [ totalSamplesTested,  totalIndividualsTested, totalPositiveCases ],
                    }]
                }}
            
            />
        ): null
    )

    return(
        <div className={styles.container}>
            {pieChart}
        </div>
    )
}

export default TestingChart