import React from "react";
import Header from "../Layout/Header";
import AddRandomContact from "./AddRandomContac";
import RemoveAllContact from "./RemoveAllContact";
import AddContact from "./AddContact";
import FavoriteContacts from "./FavoriteContacts";
import GeneralContacts from "./GeneralContacts";
import Footer from "../Layout/Footer";

class ContactIndex extends React.Component{

    constructor(props){
        super(props);
        this.state={
            contactList:[
                {
                    id:1,
                    name: "Mark Lee",
                    phone: "0812737838347",
                    email: "mark@gmail.com",
                    isFavorite: true,
                },
                {
                    id:2,
                    name: "Jeno Lee",
                    phone: "08127378383232",
                    email: "jenoo@gmail.com",
                    isFavorite: false,
                },
                {
                    id:3,
                    name: "Na Jaemin",
                    phone: "0812737811147",
                    email: "jaiminnaa@gmail.com",
                    isFavorite: false,
                },

            ],
        };
    }

    HandleAddingContact = () => {
        alert("Hi");
    }

    render(){
        return(
            <div>
                <Header></Header>
                <div className="container" style={{minHeight:"85vh"}}>
                    <div className="row py-3">
                        <div className="col-4 offset-2">
                            <AddRandomContact></AddRandomContact>
                        </div>
                        <div className="col-4">
                            <RemoveAllContact></RemoveAllContact>
                        </div>
                        <div className="row py-2">
                            <div className="col-8 offset-2 row">
                                <AddContact handleAddContact={this.HandleAddingContact}></AddContact>
                            </div>
                        </div>
                        <div className="row py-2">
                            <div className="col-8 offset-2 row">
                                <FavoriteContacts contacts={this.state.contactList.filter((x) => x.isFavorite===true)}></FavoriteContacts>
                            </div>
                        </div>
                        <div className="row py-2">
                            <div className="col-8 offset-2 row">
                                <GeneralContacts contacts={this.state.contactList.filter((x) => x.isFavorite===false)}></GeneralContacts>
                            </div> 
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        )
    }
}

export default ContactIndex;