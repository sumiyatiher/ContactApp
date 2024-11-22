import React from "react";

class AddContact extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            errorMsg: undefined,
            successMsg: undefined

        }
    }

    HandleFormAddOnSubmit = (e)=> {
        e.preventDefault();
        const name = e.target.elements.contactName.value;
        const email = e.target.elements.contactEmail.value.trim();
        const phone = e.target.elements.contactPhone.value.trim();
        const id = e.target.elements.contactId.value;

        let response = undefined;
        if (this.props.isUpdating){
            response = this.props.updateContact({name:name,email:email,phone:phone,id:id});
        }else{
            response = this.props.handleAddContact({name:name,email:email,phone:phone});
        }
        
        if (response.status === "success"){
            this.setState({errorMsg: undefined, successMsg: response.msg});
            document.querySelector(".contact-form").reset();
        }else{
            this.setState({errorMsg: response.msg, successMsg: undefined});
        }
    }

    handleCancelOnClick = () => {
        this.props.CancelUpdateContact();
    }

    render(){
        return(
            <div className="border col-12 text-white p-2">
                <form onSubmit={this.HandleFormAddOnSubmit} className="contact-form">
                <input name="contactId" hidden
                    defaultValue={this.props.isUpdating? this.props.selectedContact.id : ""}>
                </input>

                <div className="row p-2">
                    <div className="col-12 text-white-50">{this.props.isUpdating? "Update Contact":"Add a New Contact"}</div>
                    <div className="col-12 col-md-4 p-1">
                        <input className="form-control form-control-sm" 
                            placeholder="Name..." 
                            name="contactName" 
                            defaultValue={this.props.isUpdating? this.props.selectedContact.name : ""}>
                        </input>
                    </div>
                    <div className="col-12 col-md-4 p-1">
                        <input className="form-control form-control-sm"
                            placeholder="Email..." 
                            name="contactEmail" 
                            defaultValue={this.props.isUpdating? this.props.selectedContact.email : ""}>
                        </input>
                    </div>
                    <div className="col-12 col-md-4 p-1">
                        <input className="form-control form-control-sm"
                             placeholder="Phone..." 
                             name="contactPhone" 
                             defaultValue={this.props.isUpdating? this.props.selectedContact.phone : ""}>
                        </input>
                    </div>
                    {this.state.errorMsg === undefined? (<div></div>):
                        (<div className="col-12 text-center text-danger">
                            {this.state.errorMsg}
                        </div>)
                    }
                    {this.state.successMsg === undefined? (<div></div>):
                        (<div className="col-12 text-center text-success">
                            {this.state.successMsg}
                        </div>)
                    }
                    <div className={`col-12 p-1 ${this.props.isUpdating? "col-md-4 offset-md-2":"col-md-6 offset-md-3"}`}>
                        <button className="btn btn-primary btn-sm form-control">{this.props.isUpdating?"Update" : "Create"}</button>
                    </div>
                    <div className="col-12 col-md-4 p-1">
                        {this.props.isUpdating && (
                            <button className="btn btn-danger form-control btn-sm" onClick={this.handleCancelOnClick}>
                                Cancel
                            </button>
                        )}
                    </div>
                </div>
                </form>
            </div>
        );
    }
    
};

export default AddContact;