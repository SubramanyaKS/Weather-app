import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const SearchBarUI = ({ handleChange, state, fetchDetails }) => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form className="input-group" onSubmit={fetchDetails}>
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
              value={state.city}
              onChange={(e) => {
                handleChange(e.target.value);
              }}
            />
            <button
              type="submit"
              value="submit"
              className="btn btn-light"
              onClick={() => {
                fetchDetails(); // Trigger the search
              }}
            >
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchBarUI;
