import './Button.css'

function Button ({imgButton, onClick}) {

    return (
        <div>
        <button id="imageButton" className="custom-button" onClick={onClick}>
        <img src={imgButton} alt="Bouton Image" className="button-image"/>
      </button>
        </div>
    );
}

export default Button