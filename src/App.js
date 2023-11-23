import React from 'react';
import Gallery from './components/Gallery/Gallery';
import { articles } from './articles.js';
import './App.css';



const App = () => {
  const [state, setState] = React.useState(
    {
      'articles': articles
    }
  )
  const [display, setD] = React.useState(
    {
      'articles': articles
    }
  )
  const decrementQte = (id) => {
    //state.articles[id].qte--;
    //option1 :
    if (state.articles[id].qte > 0 ) {
      let articlesTmp = state.articles;
      articlesTmp[id].qte--;
      setState({
        'articles': articlesTmp
      })
    }
    //option2 : .... lundi
  }
  return (
    <>
      <video autoPlay muted loop id="myVideo">
        <source src="./assets/video/disco_ball_shining (1080p).mp4" type="video/mp4"></source>
      </video>
      <header>
        <h1>Bienvenue chez CostumShop!!!</h1>
      </header>
      <main>
        <Gallery articles={state.articles} decrementQte={decrementQte}></Gallery>
      </main>
      <footer></footer>
    </>
  );
}

export default App;

