import { bdFirestore } from "./init";
import { getDocs, getDoc, collection, addDoc, Timestamp } from "firebase/firestore";

/**
 * Obtenir toutes les tâches d'un utilisateur
 * @param {string} idUtilisateur Identifiant firebase de l'utilisateur connecté
 * @returns {Promise<any[]>} Promesse avec le tableau des taches lorsque complété
 */
 export async function lireTout(idUtilisateur){
    return getDocs(collection(bdFirestore, 'memo', idUtilisateur, 'taches')).then(
        resultat => resultat.docs.map(doc => ({id: doc.id, ...doc.data()}))
    );
}

//Ajouter une tâche
export async function creer(idUtilisateur, tache){
    //Ajout d'une date à l'objet
    tache.date = Timestamp.now();
    let coll = collection(bdFirestore, 'memo', idUtilisateur, 'taches');
    let refDoc = await addDoc(coll, tache);
    return await getDoc(refDoc);
}