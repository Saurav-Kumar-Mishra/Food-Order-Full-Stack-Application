import React from 'react'
import {FaSearch} from 'react-icons/fa' 
function Search() {
  return (
    <form>
      <div className='input-group'>
      <input type='text'
       id='search_field'
       placeholder='Search Your Favourite Restaurant'
       className='form-control' />
      <div className='input-group-append'>
        <button id='search_btn' className='btn'>
        <FaSearch className='fa fa-search'/>
        </button>
      </div>
      </div>
    </form>
  )
}

export default Search
