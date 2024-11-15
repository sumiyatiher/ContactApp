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
        this.props.HandleAddingContact();
    }
    render(){
        return(
            <div className="border col-12 text-white p-2">
                <form onSubmit={this.HandleFormAddOnSubmit}></form>
                <div className="row p-2">
                    <div className="col-12 text-white-50">Add a New Contact</div>
                    <div className="col-12 col-md-4 p-1">
                        <input className="form-control form-control-sm" placeholder="Name..."></input>
                    </div>
                    <div className="col-12 col-md-4 p-1">
                        <input className="form-control form-control-sm" placeholder="Email..."></input>
                    </div>
                    <div className="col-12 col-md-4 p-1">
                        <input className="form-control form-control-sm" placeholder="Phone..."></input>
                    </div>
                    <div className="col-12 col-md-6 offset-md-3 p-1">
                        <button className="btn btn-primary btn-sm form-control">Create</button>
                    </div>
                </div>
            </div>
        );
    }
    
};

export default AddContact;