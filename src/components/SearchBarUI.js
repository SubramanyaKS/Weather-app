import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

const SearchBarUI = ({handleChange,state,fetchDetails}) => {
  return (
    <div className="search">
          <form onSubmit={fetchDetails}>
            <div className="input-search">
            <input
            type="text"
              placeholder="Enter the City"
              icon={faSearch}
              className="searchBar"
              onChange={(e) => {
                handleChange(e.target.value);
              }}
              id="outlined-basic"
              variant="outlined"
              label="Search"
            />
            <FontAwesomeIcon icon={faSearch} className="icon-switch"  style={state.dark?{ color:"#00ffff"}:{color:"#000"}} />
            </div>
          </form>
        </div>
  )
}

export default SearchBarUI