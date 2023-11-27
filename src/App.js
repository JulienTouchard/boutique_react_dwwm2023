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
      'achat': []
    }
  )
  const [statePanier, setStatePanier] = React.useState(
    {
      'displayPanier': false
    }
  )
  const decrementQte = (id) => {
    console.log()
    // je déclare un tableau vide pour enregistrer mes achats
    let achatTmp = [];
    // je declare une boolean pour arreter ma boucle si le id === vaue.idachat
    // si  il existe dans mon tableau achat un article avec le meme id (dejà acheté)
    let stop = false;
    // une condition pour déterminer si mon tableau achat est vide
    if (state.achat.length > 0) {
      // je lance une boucle map qui pourra retourner une copie de state.achat
      // dans achatTmp
      achatTmp = state.achat.map((value) => {
        // si le resultat est positif
        if (value.idachat === id) {
          // j'incremente la qte de article acheté
          value.qteachat++;
          // j'empeche l'ajout d'un nouvel article à mon achatTmp
          stop = true
        }
        return value
      })
    }
    // si stop est resté à false (ma boucle n'a pas trouvé de resultat positif)
    if (!stop) {
      //j'ajoute un nouvel article à mon tableau achatTmp
      achatTmp = [...achatTmp, { 'idachat': id, 'qteachat': 1 }];
    }


    //state.articles[id].qte--;
    //option1 :
    if (state.articles[id].qte > 0) {
      let articlesTmp = state.articles;
      articlesTmp[id].qte--;
      setState({
        'articles': articlesTmp,
        //spread operator option2 :
        'achat': achatTmp
      })
    }
  }
  const qteIncrement = (id) => {
    const tmpPanier = state.achat;
    const tmpArticles = state.articles;
    tmpPanier.map((value, index) => {
      if (id === value.idachat) {
        tmpPanier[index].qteachat--;
        if (tmpPanier[index].qteachat === 0) {
          //  supprimer l'entrée correspondante dans tmpPanier avec splice et index
          tmpPanier.splice(index, 1);
        }
        // incrémenter l'article correspondant à l'id dans articlesApp
        tmpArticles[id].qte++;
        // setstate pour reajuster le panier et la qte (articlesApp)
        setState({
          ...state,
          // mise à jour de ma qte pour i(id de l'article)
          articles: tmpArticles,
          // mise à jour de mon panier avec l'ajout de i
          achat: tmpPanier
        })
      }
    })

  }
  const handleDisplayPanier = () => {
    setStatePanier({ 'displayPanier': !statePanier.displayPanier })
  }


  return (
    <BoutiqueContext.Provider value={{
      ...state,
      'decrementQte': decrementQte,
      'qteIncrement': qteIncrement

    }}>
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
        {statePanier.displayPanier ? <Panier
          handleDisplayPanier={handleDisplayPanier}
          achat={state.achat}
        ></Panier> : <></>}
        <Gallery articles={state.articles} decrementQte={decrementQte}></Gallery>
      </main>
      <footer></footer>
    </BoutiqueContext.Provider>
  );
}

export default App;

