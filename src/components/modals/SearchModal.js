import React, { Component } from "react";
import styled from 'styled-components';
import styles from '../../css/modals.module.css'
import M from "materialize-css";

const Search = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;
class SearchModal extends Component {
  componentDidMount() {
    const options = {
      inDuration: 250,
      outDuration: 250,
      opacity: 0.4,
      dismissible: true,
      startingTop: "4%",
      endingTop: "10%",
    };
    M.Modal.init(this.Modal, options);
  }

  render() {
    return (
      <div style={{ marginRight : "20px" }}>
        <a className="btn modal-trigger"
          data-target="searchModal">
          <i className="material-icons left">search</i>
          SEARCH
        </a>

        <div
          ref={Modal => {
            this.Modal = Modal;
          }}
          id="searchModal"
          className="modal"
        >
          <div className="modal-content">
            <Search>
              <input id="searchInput"></input>
              <button className="btn-flat">
                <i className="material-icons">search</i>
              </button>
            </Search>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchModal;
