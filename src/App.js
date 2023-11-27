import React from 'react';
import Gallery from './components/Gallery/Gallery';
import { articles } from './articles.js';
import { menuentries } from './menuentries.js';
import './App.css';
import Menu from './components/Menu/Menu.js';
import Panier from './components/Panier/Panier.js';
import BoutiqueContext from './contexts/BoutiqueContext.js';



const App = () => {
  const [state, setState] = React.useState(
    {
      'articles': articles,
      'achat':[]
    }
  )
  const [statePanier, setStatePanier] = React.useState(
    {
      'displayPanier': false
    }
  )
  const handleDisplayPanier=()=>{
    setStatePanier({'displayPanier': !statePanier.displayPanier})
  }
  const decrementQte = (id) => {

    //state.articles[id].qte--;
    //option1 :
    if (state.articles[id].qte > 0 ) {
      let articlesTmp = state.articles;
      articlesTmp[id].qte--;
      setState({
        'articles': articlesTmp,
        //spread operator option2 :
        'achat':[...state.achat,id]
      })
    }
    
  }
  return (
    <BoutiqueContext.Provider value={state}>
      <video autoPlay muted loop id="myVideo">
        <source src="./assets/video/disco_ball_shining (1080p).mp4" type="video/mp4"></source>
      </video>
      <header>
        <Menu 
        handleDisplayPanier={handleDisplayPanier}
        sendEntries={menuentries}
        ></Menu>
        <h1>Bienvenue chez CostumShop!!!</h1>
      </header>
      <main>
        {statePanier.displayPanier?<Panier 
        handleDisplayPanier={handleDisplayPanier}
        achat={state.achat}
        ></Panier>:<></>}
        <Gallery articles={state.articles} decrementQte={decrementQte}></Gallery>
      </main>
      <footer></footer>
    </BoutiqueContext.Provider>
  );
}

export default App;

