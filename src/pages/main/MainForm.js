import React from 'react'
import Contact from '../contact/ContactMini'
export default class MainForm extends React.Component {
    closeModal(){
        document.getElementById('mainForm').style.display = "none";
    }
    showModal(){
        document.getElementById('mainForm').style.display = "block";   
    }

    render() {
        return (
            <div id="mainForm" className="modal">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <button type="button" onClick={this.closeModal.bind(this)} className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <div className="row align-items-center">
                            <Contact page={"14"} type={1} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
