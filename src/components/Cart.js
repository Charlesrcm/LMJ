import { useEffect, useState } from 'react' // useState est local au composant
import '../styles/Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'


function Cart({cart, updateCart}) {
  // les [] sont une décomposition, il s'agit d'un tableau
  // useState nous renvoi 2 éléments, nous les récupérons grâce aux variables "cart" et "updateCart"
  // La première est la valeur actuel, le deuxième une fonction qui permet de la modifier
  // il faut paramétrer l'état initial du state, ici un int 0.
  // const [cart, updateCart] = useState(0)

  

  const [isOpen, setIsOpen] = useState(false)
  const total = cart.reduce(
    (acc, plantType) => acc + plantType.amount * plantType.price, 
    0
  )
  
  useEffect(() => {
    document.title = `lmj : ${total}€ d'achat`
  }, [total])

  function addToCart(name, price) {
    // récupéré le nom de la plante et le comparer avec celui du panier
    const checkName = cart.find((plant) => plant.name === name)
    if (checkName) {
      const checkFilteredName = cart.filter((plant) => plant.name !== name)
      updateCart([...checkFilteredName, {name, price, amount: checkName.amount + 1}])
    }
  }

  function removeToCart(name, price) {
    // récupéré le nom de la plante et le comparer avec celui du panier
    const checkName = cart.find((plant) => plant.name === name)
    if (checkName) {
      const checkFilteredName = cart.filter((plant) => plant.name !== name)
      // si à zéro alors on supprime l'élément du panier
      if (checkName.amount - 1 === 0) {        
        updateCart([...checkFilteredName])
      } else if (checkName && checkName.amount !== 0) { // si ce n'est pas à zéro on enlève 1 à la quantité du panier
        updateCart([...checkFilteredName, {name, price, amount: checkName.amount - 1}])
      }
    } 
  }
  
  return isOpen ? (
    <div className="lmj-cart">
      <button className='lmj-cart-toggle-button' onClick={() => setIsOpen(false)}>Fermer</button>

      {cart.length > 0 ? (
        <div>
          <h2>Panier</h2>

          <ul>
            {cart.map(({ name, price, amount }, index) => (
              <li key={`${name}-${index}`}>
                {name} {price}€
                <FontAwesomeIcon id='plus' icon={faPlus} onClick={() => addToCart(name, price)} />
                {amount}
                <FontAwesomeIcon id='moins' icon={faMinus} onClick={() => removeToCart(name, price)} />
              </li>
            ))}
          </ul>

          <div>Total : {total}</div>
          <button onClick={() => updateCart([])}>Vider le panier</button>
        </div>
      ) : (
        <div>Votre panier est vide</div>
      )}
    </div>
      
  ) : (
      <div className='lmj-cart-closed'>
        <button className='lmj-cart-toggle-button' onClick={() => setIsOpen(true)}>Ouvrir le panier</button>
      </div>
  )
}

export default Cart