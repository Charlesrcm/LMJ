import CareScale from './CareScale';
import '../styles/PlantItem.css'


// on récupère les données du props
function PlantItem({ name, cover, water, light, price }) {
  function handleClick(plantName) {
	  alert(`Vous voulez acheter 1 ${plantName} ? Très bon choix 🌱✨`)
  }
  
  return ( 
    <li className='lmj-plant-item' onClick={() => handleClick(name)}>
      <span className='lmj-plant-item-price'>{price} €</span>
      <img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`}   />
      <h4>{name}</h4>
      <CareScale careType='water' scaleValue={water} />
      <CareScale careType='light' scaleValue={light}/>
    </li>      
  );
}



export default PlantItem;