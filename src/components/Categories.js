import '../styles/Categories.css'

function Categories({categories, catego, setCatego}) {

  return (
    <div className='lmj-categories'>
      <select multiple id='categories' name='categories' className='lmj-categories-select'
        onChange={(e) => console.log([e.target.value])} >
        
        <option value="">Catégorie de plante</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
      <button onClick={() => setCatego('')}>Toutes les plantes</button>
    </div>
  )
}

export default Categories