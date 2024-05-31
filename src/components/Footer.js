import { useState } from 'react'
import '../styles/Footer.css'

function Footer() {
	const [inputValue, setInputValue] = useState('')

	// fonction pour ajouter la valeur renseigner par l'user dans l'input du mail
	function handleInput(e) {
		setInputValue(e.target.value)
	}

	// fonction pour déclencher une alerte lorsqu'on clic hors du champ
	function handleBlur() {
		if (!inputValue.includes("@")) {
			alert("Il n'y a pas de @ dans l'adresse mail")
		}
	}
	

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :
				<input placeholder='Entrez votre mail' value={inputValue} onBlur={handleBlur} onChange={handleInput} type="text" name="mailInput" id="mailInput" />
			</div>
		</footer>
	)
}

export default Footer