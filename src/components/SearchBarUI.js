import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import VoiceButton from './VoiceButton';
import ButtonLocation from './ButtonLocation';
import { OverlayTrigger } from 'react-bootstrap';
import { renderTooltip } from './RenderTooltip';

const SearchBarUI = ({ handleChange, state, fetchDetails }) => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 d-flex">
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
            <VoiceButton/>
            <ButtonLocation/>
            <OverlayTrigger
    placement="bottom"
    delay={{ show: 250, hide: 400 }}
    overlay={renderTooltip({ message: "search" })}
  >
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
            </OverlayTrigger>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchBarUI;
