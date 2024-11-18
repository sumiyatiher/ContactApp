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

        const response = this.props.handleAddContact({name:name,email:email,phone:phone});

        if (response.status === "success"){
            this.setState({errorMsg: undefined, successMsg: response.msg});
            document.querySelector(".contact-form").reset();
        }else{
            this.setState({errorMsg: response.msg, successMsg: undefined});
        }
    }
    render(){
        return(
            <div className="border col-12 text-white p-2">
                <form onSubmit={this.HandleFormAddOnSubmit} className="contact-form">
                <div className="row p-2">
                    <div className="col-12 text-white-50">Add a New Contact</div>
                    <div className="col-12 col-md-4 p-1">
                        <input className="form-control form-control-sm" placeholder="Name..." name="contactName"></input>
                    </div>
                    <div className="col-12 col-md-4 p-1">
                        <input className="form-control form-control-sm" placeholder="Email..." name="contactEmail"></input>
                    </div>
                    <div className="col-12 col-md-4 p-1">
                        <input className="form-control form-control-sm" placeholder="Phone..." name="contactPhone"></input>
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
                    <div className="col-12 col-md-6 offset-md-3 p-1">
                        <button className="btn btn-primary btn-sm form-control">Create</button>
                    </div>
                </div>
                </form>
            </div>
        );
    }
    
};

export default AddContact;