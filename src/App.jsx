import Button from "./Button";
import croix from "../src/assets/croix.png";
import fleche from "../src/assets/fleche.png";
import pencil from "../src/assets/pencil.png";
import InputTexteAndButton from "./InputTexteAndButton";
import plus from "../src/assets/plus.png";
import "./App.css";
import { useState } from "react";

function App() {
  // tableau elements
  const [taches, setTaches] = useState([

  ]);

  const [nouvelleTache, setNouvelleTache] = useState("");
  const [tacheImportante, setTacheImportante] = useState([]);
//function ajouter
  const handleSubmit = (event) => {
    event.preventDefault();
    const tachesCopy = [...taches];
    const id = new Date().getTime();
    const nom = nouvelleTache;
    tachesCopy.push({ id, nom });
    setTaches(tachesCopy);

    setNouvelleTache(" ");
  };
//function supprimer
  const handleDelete = (id, tableau,setTableau) => {
    const tachesCopy = [...tableau];
    const tachesCopieUpdate = tachesCopy.filter((tache) => tache.id !== id);
    setTableau(tachesCopieUpdate);
  };

 

//fonction transferer dans tâches importantes
const handleToTransfer = (id) => {
  const tache = taches.find((tache) => tache.id === id);

  if (tache) {
    const copyTachesImportante = [...tacheImportante]
    copyTachesImportante.push(tache);
    setTacheImportante(copyTachesImportante)

    // Filtrage des tâches pour supprimer la tâche transférée
    const tachesCopy = taches.filter((tache) => tache.id !== id);
    setTaches(tachesCopy);
  }
};


  const handleChange = (event) => {
    setNouvelleTache(event.target.value);
  };

  return (
    <div>
      <div className="titre-cadre">
      <div className="div-h1">
        <h1 className="border-radius">TO DO LISTE</h1>
        </div>
        </div>
        <div>
        <div className="cadre-gestion-taches">
          <div className="taches">
            <form
              className="first-tache"
              action="submit"
              onSubmit={handleSubmit}
            >
              <InputTexteAndButton
                value={nouvelleTache}
                onChange={handleChange}
                imgButton={plus}
              />
            </form>

            <div className="separation-form">
              <ul>

                {taches.map((tache) => (
                  <li key={tache.id}>
                    <InputTexteAndButton imgButton={pencil} />
                    {tache.nom}
                    
                    <Button
                      imgButton={croix}
                      onClick={() => handleDelete(tache.id,taches,setTaches)}
                    />
                    <Button imgButton={fleche}onClick={() => handleToTransfer(tache.id)} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="cadre-importante">
          <h3 className="border-radius">Important</h3> 
            <div className="taches-important">
              <ul>
              {tacheImportante.map((tache) => (
                  <li key={tache.id}>
                    <InputTexteAndButton imgButton={pencil} />
                    {tache.nom}
                    
                    <Button
                      imgButton={croix}
                      onClick={() => handleDelete(tache.id,tacheImportante,setTacheImportante)}
                    />
                    {/* <Button imgButton={fleche}onClick={() => handleToTransfer(tache.id)} /> */}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
