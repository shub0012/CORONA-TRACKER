import React from 'react'
//import { fetchDailyData } from '../../api'
import {  Bar } from 'react-chartjs-2'

import styles from './Chart.module.css'

const InChart = ({ data: {loc,totalConfirmed, discharged, deaths} }) => {
    // const [dailyData, setDailyData ] = useState([])

    // useEffect(() => {
    //     const fetchAPI = async () => {
    //         const dailyData = await fetchDailyData()
    //         setDailyData(dailyData)
    //     }


    //     //console.log(dailyData)

    //     fetchAPI()
    // }, [])

    // const lineChart = (

    //     dailyData.length 
    //     ? (
    //         <Line 
    //         data={{
    //             labels: dailyData.map(( { date }) => date),
    //             datasets: [ {
    //                 data: dailyData.map(( { confirmed }) => confirmed ),
    //                 label: 'Infected',
    //                 borderColor: '#3323FE',
    //                 backgroundColor: 'rgba(0, 0, 250, 0.2)',
    //                 fill: true
    //             }, {
    //                 data: dailyData.map(( { deaths }) => deaths ),
    //                 label: 'Deaths',
    //                 borderColor: '#red',
    //                 backgroundColor: 'rgba(254, 0, 0, 0.45)',
    //                 fill: true
    //             } ]
    //         }}
        
    //     />) : null
        
    // )


    const barChart = (
        totalConfirmed
         ? (
            <Bar
                data={{
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets: [{
                        label: 'People',
                        backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                        data: [totalConfirmed,  discharged, deaths]
                    }]
                }}
                options={{
                    legend: { display: false},
                    title: { display: true, text: `Current state in ${loc}`}
                }}
            />
         ): null
    )


    return(
        <div className={styles.container}>
            { barChart}
        </div>
    )
}

export default InChart