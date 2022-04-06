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

  //gestion du formulaire
  function gererForm(e){
    e.preventDefault();
    const texte = e.target.elements[0].value; 
    tacheModele.creer(util.uid, {texte: texte, completee:false}).then(
      doc => setTaches([{id:doc.id, ...doc.data()}, ...taches])
    );
  }

  return (
    <section className="Taches">
      <form onSubmit={e => gererForm(e)}>
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
          taches.map(tache => <Tache key={tache.id} {...tache} />)
        }
      </div>
    </section>
  );
}