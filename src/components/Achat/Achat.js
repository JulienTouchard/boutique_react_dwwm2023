import React from "react";
import './Achat.css'
import BoutiqueContext from "../../contexts/BoutiqueContext";

const Achat = (props) => {
    let id = props.id;
    const boutiqueContext = React.useContext(BoutiqueContext);
    let article = boutiqueContext.articles[id];
    return (
        <div className="achat">
            <div className="achatImg">
                <img src={"./assets/img/costumes/" + article.img} alt={article.name}></img>
            </div>
            <span className="achatName">{article.name}</span>
            <span>
                <span className="achatBtn">-</span>
                <span>{article.qte}</span>
                <span className="achatBtn">+</span>
            </span>
            <span className="achatPrice">{article.price} $</span>
        </div>
    )
}
export default Achat;