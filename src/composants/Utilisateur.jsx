import './Utilisateur.scss';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { deconnexion } from '../code/util-modele';

export default function Utilisateur({util}) {
  return (
    <div className="Utilisateur">
      <span className="nom">{util.displayName}</span>
      <Avatar className="avatar"  src= {util.photoURL} alt={util.displayName} title={util.email} />
      
      <Button 
        variant="outlined"
        size="small"
        className="btn-deconnexion"
        onClick={deconnexion}
      >
        Déconnexion
      </Button>
    </div>
  );
}