import './Tache.scss';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

export default function Tache({texte, date}) {

  //formatage de la date
  function gererDate(date){
    const dateTache = new Date(date*1000);
    const jour = dateTache.getDate();
    const listeMois = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
    const mois = listeMois[dateTache.getMonth()];
    const annee = dateTache.getFullYear();
    const heure = dateTache.getHours();
    const minutes = dateTache.getMinutes();
    const secondes = dateTache.getSeconds();
    const dateFormatee = `(${jour} ${mois} ${annee} à ${heure}:${minutes}:${secondes})`;
    return dateFormatee;
  }

  return (
    <div className="Tache">
      <CheckCircleIcon color='success' />
      <span className="texte">{texte}</span>
      <span className="date">{gererDate(date.seconds)}</span>
      <RemoveCircleIcon color='error'/>
    </div>
  );
}