import Button from "./Button";
import "./InputTexteAndButton.css";
import "./InputTexteAndButton.css";

function InputTexteAndButton({ value, onChange, imgButton }) {
  return (
    <div className="input-div">
      <input
        type="texte"
        placeholder="Ajoute une tache..."
        id="username"
        value={value}
        onChange={onChange}
      ></input>
      <Button imgButton={imgButton} />
    </div>
  );
}

export default InputTexteAndButton;
