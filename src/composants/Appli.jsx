import './Appli.scss';
import logo from '../images/memo-logo.png';
import Controle from './Controle';
import Taches from './Taches';
import Accueil from './Accueil';
import Utilisateur from './Utilisateur';
import { useEffect, useState } from 'react';
import { observerEtatConnexion } from '../code/util-modele';

export default function Appli() {
  //état utilisateur
  const [util, setUtil] = useState(null);
  
  //état des tâches de l'utilisateur connecté
  const [taches, setTaches] = useState([]);

  console.log(util);

  //surveiller l'état de la connexion Firebase Auth
  useEffect(() => observerEtatConnexion(setUtil), []);

  return (
    //1)  Si un utilisateur est connecté :
    util ?
      <div className="Appli">
        <header className="appli-entete">
          <img src={logo} className="appli-logo" alt="Memo" />
          <Utilisateur util={util} />
        </header>
        <Taches util={util} taches={taches} setTaches={setTaches} />
        <Controle />
      </div>
    //2) Par contre si aucun utilisateur n'est connecté, on affiche plutôt le composant suivant : 
    :
      <Accueil />
  );
}
