// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faDroplet, faSun } from '@fortawesome/free-solid-svg-icons';
import Sun from '../assets/sun.svg'
import Droplet from '../assets/water.svg'

const scale = {
  1: "peu",
  2: "modérément",
  3: "beaucoup"
}


function CareScale({ scaleValue, careType }) {
  function handleCare(careType, scaleValue) {
    const careValue = careType === 'light' ? 'de soleil' : "d'eau"
    alert("Cette plante requiere " + scale[scaleValue] + " " + careValue);
  }

  const range = [1, 2, 3]
  
  const scaleType = careType === 'light' ? <img src={Sun} alt="sun-icon" /> : <img src={Droplet} alt="droplet-icon" />

  return (
    <div onClick={() => handleCare(careType, scaleValue)}>
      {range.map((rangeElem) => 
        scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{ scaleType }</span> : null )}
    </div>
  );
}

export default CareScale;