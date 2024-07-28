import React from 'react'
import FoodItem from './FoodItem'

function Menu() {
  return (
    <div>
      <div>
        <h2>Chaats</h2>
        <hr/>
        <div className='row'>
          <FoodItem/>
        </div>
      </div>
    </div>
  )
}

export default Menu
