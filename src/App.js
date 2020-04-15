import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"


import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav,Form,FormControl,Button} from 'react-bootstrap'


import { Cards,Chart,CountryPicker,InCards,StatePicker,InChart, InTestingCard,TestingChart,HospitalCard,StateHospitalPicker,PieHospital,ContactCard,StateContactPicker,StateContactCard } from "./components";
import styles from './App.module.css'
import { fetchData,infetchData,stateFetchData,fetchTestStats,infetchHospitalData,stateFetcHospitalhData,fetchPrimaryContact,stateFetchContactData } from './api'
import mainImage from './images/image.png'



class App extends React.Component{

    state = {
        data : {},
        country: '',
        indata: {},
        loc: '',
        stateData: {},
        testResult: {},
        states:'',
        stateDataHospital: {},
        primaryContact: {},
        stateContact: {},
    }
    async componentDidMount(){
        //for global data
        const fetchedData = await fetchData()

        //for india data
        const inFetchedData = await infetchData()
        console.log(inFetchedData)
        // console.log(data)

        //for india test data
        const inFetchedTestResults = await fetchTestStats()
       // console.log(inFetchedData)

       //for hospital data
       const infetchedHospitalData = await infetchHospitalData()

       //for contact details
       const fetchedPrimaryContact = await fetchPrimaryContact()
       console.log(fetchedPrimaryContact)

       
    
    

       
        this.setState({ data: fetchedData, indata: inFetchedData, testResult: inFetchedTestResults, stateDataHospital: infetchedHospitalData, primaryContact: fetchedPrimaryContact })
    }

    handleCountryChange = async (country) => {
        //console.log(country)

        //fetch the data
        const fetchedData = await fetchData(country)

        console.log(fetchedData)
        
        //set the state
        this.setState({data: fetchedData, country: country})
    }

    handleStateChange = async (locs) => {
        let data = {}
        const stateFetchedData = await stateFetchData(locs)

        for(let i=0; i < stateFetchedData.regional.length; i++)
        {
            if(stateFetchedData.regional[i].loc === locs){

                data = stateFetchedData.regional[i]  
            }
           
        }
        this.setState({stateData: data, loc: locs})
            
    }

    handleStateContactChange = async (locs) => {
        let data = {}
        const stateFetchedData = await stateFetchContactData(locs)
        console.log(stateFetchedData)
        for(let i=0; i < stateFetchedData.regional.length; i++)
        {
            if(stateFetchedData.regional[i].loc === locs){

                data = stateFetchedData.regional[i]  
            }
           
        }
        this.setState({stateContact: data, loc: locs})
            
    }

    handleStateHospitalChange = async (stateName) => {
        let data = {}
        console.log(stateName)
        const stateFetchedHospital = await stateFetcHospitalhData(stateName)
        console.log("in app")
        console.log(stateFetchedHospital)
        for(let i=0; i < stateFetchedHospital.regional.length; i++)
        {
            if(stateFetchedHospital.regional[i].state === stateName){

                data = stateFetchedHospital.regional[i]  
                
            }
            
           this.setState({stateDataHospital: data, states: stateName})
        }
        data=data+stateFetchedHospital.lastRefreshed
        //console.log(data)
        
        console.log(this.state.stateDataHospital)
    }
    

   
    render(){
        const { data, country, indata,stateData,loc,testResult,stateDataHospital,primaryContact,stateContact } = this.state
        return(

            <Router>
                <div>
                        <link
                            rel="stylesheet"
                            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
                            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
                            crossorigin="anonymous"
                        />
                        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                            <Navbar.Brand href="/">Covid-19 Tracker</Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                    <Nav className="mr-auto">
                                    <Nav.Link href="/">Global</Nav.Link>
                                    <Nav.Link href="/india">India</Nav.Link>
                                    <Nav.Link href="/indiatesting">Test Report</Nav.Link>
                                    <Nav.Link href="/hospitalstats">Hospital Stats</Nav.Link>
                                    <Nav.Link href="/contact">contact Details</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                            </Navbar>

            
                
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                    <Switch>
                        <Route path="/india">
                            <div className={styles.container}>
                                    <img className={styles.image} src={mainImage} alt="corono image" />
                                    <InCards data={indata} />
                                    <StatePicker handleStateChange={this.handleStateChange} />
                                    <InChart data={stateData} loc={loc} />
                            </div>
                        </Route>
                        <Route path="/indiatesting">
                            <div className={styles.container}>
                                <img className={styles.image} src={mainImage} alt="corono image" />
                                <InTestingCard data={testResult}/>
                                <TestingChart data={testResult} />
                            </div>
                        </Route>
                        <Route path="/hospitalstats">
                            <div className={styles.container}>
                                    <img className={styles.image} src={mainImage} alt="corono image" />
                                    <HospitalCard data={stateDataHospital} />
                                    <StateHospitalPicker handleStateHospitalChange={this.handleStateHospitalChange} />
                                    <PieHospital  data={stateDataHospital}/>      
                            </div>
                        </Route>
                        <Route path="/contact">
                            <div className={styles.container}>
                                    <img className={styles.image} src={mainImage} alt="corono image" /> 
                                    <ContactCard data={primaryContact} />
                                    <StateContactPicker handleStateContactChange={this.handleStateContactChange} />
                                    <StateContactCard data={stateContact} />
                            </div>
                        </Route>
                        <Route path="/">
                            <div className={styles.container}>
                                <img className={styles.image} src={mainImage} alt="corono image" />
                                <Cards data={data}/>
                                <CountryPicker handleCountryChange={this.handleCountryChange} />
                                <Chart data={data} country={country}/>
                            </div>
                        </Route>
                    </Switch>
                </div>
            </Router>
            
        )
    }
}

export default App 