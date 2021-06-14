import './App.css';
import React from 'react';
import Button from './Button';
import Card from './Card';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      capital: '',
      flag: '',
      population: '',
      region: '',
    }
  }

  async componentDidMount() {
    try {
      // APPELER UNE API AVEC DEUX METHODES FETCH
      // OU METHODE AWAIT 
      const result = await fetch('https://restcountries.eu/rest/v2/name/france')
      const country = await result.json()
      this.setState({
        name: country[0].name,
        capital: country[0].capital,
        flag: country[0].flag,
        population: country[0].population,
        region: country[0].region,
      })
    }
    catch (error) {
      console.error(error)
    }
  }

  // le fetch fonctionne que avec ASYNC en fonction classique
  async getCountry(country) {
    try {
      // RAJOUTER country A L'URL SIMPLEMENT OU EN TEMPLATE LITERAL
      const result = await fetch('https://restcountries.eu/rest/v2/name/' + country)
      //  const result = await fetch("https://restcountries.eu/rest/v2/name/${country}")
      const countries = await result.json()
      this.setState({
        name: countries[0].name,
        capital: countries[0].capital,
        flag: countries[0].flag,
        population: countries[0].population,
        region: countries[0].region,
      })
    }
    catch (error) {
      console.error(error)
    }
  }

  //OU METHODE THEN 
  //fetch('https://restcountries.eu/rest/v2/name/france')
  //.then(response => response.json())
  //.then(country => console.log(country)
  //.catch(error => console.error(error))
  //}


  render() {
    return <div>

      <div className="text-center">
        <Button onClick={() => this.getCountry('france')} >France</Button>,
        <Button onClick={() => this.getCountry('brazil')}>Brazil</Button>,
        <Button onClick={() => this.getCountry('croatia')}>Croatia</Button>
        <Button onClick={() => this.getCountry('tanzania')}>Tanzania</Button>
      </div>
      <Card {...this.state}/>

    </div>
  }
}


export default App;
