import React, { Component } from "react";
import M from "materialize-css";

class CreateModal extends Component {
  componentDidMount() {
    const options = {
      inDuration: 250,
      outDuration: 250,
      opacity: 0.4,
      dismissible: false,
      startingTop: "4%",
      endingTop: "10%",
    };
    M.Modal.init(this.Modal, options);
  }

  render() {
    return (
      <div style={{ marginRight : "20px" }}>
        <a className="btn modal-trigger"
          data-target="createModal">
          <i className="material-icons left">create</i>
          Write
        </a>

        <div
          ref={Modal => {
            this.Modal = Modal;
          }}
          id="createModal"
          className="modal"
        >
          <div className="modal-content">
            <textarea id="createPost" className="materialize-textarea" placeholder="Write your words.."></textarea>
          </div>
          <div className="modal-footer">
              <button className="modal-close btn-flat">Close</button>
              <button className="modal-close btn">Post</button>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateModal;
