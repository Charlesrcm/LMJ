import { plantList } from '../datas/plantList.js'
import '../styles/ShoppingList.css'
import PlantItem from './PlantItem.js';
import Categories from './Categories';
import { useState } from 'react';



function ShoppingList({ cart, updateCart}) {

  const [catego, setCatego] = useState('')

  const categories = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category), []
  )

  function addToCart(name, price) {
    //test pour savoir si la plante est dans le panier ou non
    const currentPlantSaved = cart.find((plant) => plant.name === name)
    // si oui
    if (currentPlantSaved) {
     // retourne un tableau de valeur sur les plantes qui ne sont pas celles que nous venons d'ajouté
      const cartFilteredCurrentPlant = cart.filter(
        (plant) => plant.name !== name
      )
      // le fait de mettre les autres plantes du panier va nous faire sélectionner la plante que nous venons d'ajouter et +1 à la quantité
      updateCart([...cartFilteredCurrentPlant, {name, price, amount: currentPlantSaved.amount + 1}])
    } else {
      updateCart([...cart, {name, price, amount: 1}])
    }
  }
  
  return ( 
    <div className='lmj-shopping-list'>
      <Categories categories={ categories } catego={catego} setCatego={setCatego} />
      <ul className='lmj-plant-list'>
        {/* on boucle sur les objets plantes et on assigne les attributs à PlantItem pour les gérer */}
        {plantList.map(({ id, cover, name, water, light, price, category }) => !catego || catego === category ? (
          <div key={id}>
          <PlantItem cover={cover} name={name} water={water} light={light} price={price} />
            <button onClick={() => addToCart(name, price)}>Ajouter</button>
          </div>
          
        ) : null )}
      </ul>
    </div>
   );
}

export default ShoppingList;