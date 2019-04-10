import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Cards from './components/Cards';
import Pictures from './pictures.json'

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">
          <Cards
            key={Pictures[0].id}
            alt={Pictures[0].name}
            image={Pictures[0].image}
            clicked={Pictures[0].clicked}
          />
          <Cards
            key={Pictures[1].id}
            alt={Pictures[1].name}
            image={Pictures[1].image}
            clicked={Pictures[1].clicked}
          />
          <Cards
            key={Pictures[2].id}
            alt={Pictures[2].name}
            image={Pictures[2].image}
            clicked={Pictures[2].clicked}
          />

          <Cards
            key={Pictures[3].id}
            alt={Pictures[3].name}
            image={Pictures[3].image}
            clicked={Pictures[3].clicked}
          />
        </div>
        <div className="row">
          <Cards
            key={Pictures[4].id}
            alt={Pictures[4].name}
            image={Pictures[4].image}
            clicked={Pictures[4].clicked}
          />
          <Cards
            key={Pictures[5].id}
            alt={Pictures[5].name}
            image={Pictures[5].image}
            clicked={Pictures[5].clicked}
          />

          <Cards
            key={Pictures[6].id}
            alt={Pictures[6].name}
            image={Pictures[6].image}
            clicked={Pictures[6].clicked}
          />
          <Cards
            key={Pictures[7].id}
            alt={Pictures[7].name}
            image={Pictures[7].image}
            clicked={Pictures[7].clicked}
          />
        </div>
        <div className="row">
          <Cards
            key={Pictures[8].id}
            alt={Pictures[8].name}
            image={Pictures[8].image}
            clicked={Pictures[8].clicked}
          />

          <Cards
            key={Pictures[9].id}
            alt={Pictures[9].name}
            image={Pictures[9].image}
            clicked={Pictures[9].clicked}
          />
          <Cards
            key={Pictures[10].id}
            alt={Pictures[10].name}
            image={Pictures[10].image}
            clicked={Pictures[10].clicked}
          />
          <Cards
            key={Pictures[11].id}
            alt={Pictures[11].name}
            image={Pictures[11].image}
            clicked={Pictures[11].clicked}
          /></div>
        <div className="row">
          <Cards
            key={Pictures[12].id}
            alt={Pictures[12].name}
            image={Pictures[12].image}
            clicked={Pictures[12].clicked}
          />
          <Cards
            key={Pictures[13].id}
            alt={Pictures[13].name}
            image={Pictures[13].image}
            clicked={Pictures[13].clicked}
          />
          <Cards
            key={Pictures[14].id}
            alt={Pictures[14].name}
            image={Pictures[14].image}
            clicked={Pictures[14].clicked}
          />

          <Cards
            key={Pictures[15].id}
            alt={Pictures[15].name}
            image={Pictures[15].image}
            clicked={Pictures[15].clicked}
          />
          </div>

      </div>

    );
  }
}

export default App;
