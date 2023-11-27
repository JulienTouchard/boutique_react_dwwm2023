import Achat from "../Achat/Achat";
import "./Panier.css";
const Panier = (props) => {
    return (
        <div className="backgroundPanier">
            <div className="panier">
                <div onClick={props.handleDisplayPanier} className="close">X</div>
                <h2>mon panier</h2>
                {
                    props.achat.map(
                        (value,index)=><Achat item={value} key={index}></Achat>
                    )
                }
            </div>
        </div>
    )
}
export default Panier
