import './Tache.scss';

export default function Tache({texte, date}) {
  return (
    <div className="Tache">
      Basculer
      <span className="texte">{texte}</span>
      <span className="date">{date.seconds}</span>
      Supprimer
    </div>
  );
}