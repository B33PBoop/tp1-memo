import { useEffect, useState } from 'react';
import Tache from './Tache';
import './Taches.scss';
import * as tacheModele from '../code/tache-modele';

export default function Taches({util, taches, setTaches}) {
  const [texte, setTexte] = useState('');

  //lire les tâches de l'utilisateur connecté dans Firestore
  useEffect(
    () =>  tacheModele.lireTout(util.uid).then(
      lesTaches => setTaches(lesTaches)
    )
    ,[util, setTaches]
  );

  //reset le contenu du formulaire après l'ajout d'une tâche
  function resetForm(){
    setTexte('');
  }

  //Ajouter une tâche dans FireStore
  function ajoutTache(texte){
    tacheModele.creer(util.uid, {texte: texte}).then(
      doc => setTaches([doc, ...taches])
    );
  }

  return (
    <section className="Taches">
      <form onSubmit={ajoutTache}>
        <input 
          type="text"   
          placeholder="Ajoutez une tâche ..." 
          name="texteTache"
          autoComplete="off"
          onChange={evt => setTexte(evt.target.value)}
        />
      </form>
      <div className="liste-taches">
        { 
          taches.map(tache => <Tache key={tache} {...tache} />)
        }
      </div>
    </section>
  );
}