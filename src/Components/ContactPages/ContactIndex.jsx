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

    handleAddingContact = (newContact) => {
        if(newContact.name === ""){
            return{status:"failed", msg:"Please Enter a Valid Name"};
        }else if(newContact.phone === ""){
            return{status:"failed", msg:"Please Enter a Valid Phone Number"};
        }

        const duplicateContact = this.state.contactList.filter((x) => {
            if(x.name === newContact.name && x.phone === newContact.phone){
                return true;
            }
            return false;
        })

        if (duplicateContact.length > 0){
            return {status: "failed", msg:"Duplicate Record!"};
        }else{
            const newFinalContact = {...newContact, id:this.state.contactList[this.state.contactList.length-1].id+1,
                isFavorite:false
            };

            this.setState((prevState) => {
                return{
                    contactList: prevState.contactList.concat([newFinalContact]),
                };
            });
            return {status:"success", msg:"Contact was added successfully!"};
        }
    }

    handleToggleFav = (contact) => {
        this.setState ((prevState) => {
            return{
                contactList: prevState.contactList.map((obj) => {
                    if (obj.id === contact.id){
                        return {...obj,isFavorite: !obj.isFavorite};
                    }
                    return obj;
                }),
            };
        });
    }

    handleDeleteBtn = (contactId) => {
        this.setState ((prevState) => {
            return{
                contactList: prevState.contactList.filter((obj) => {
                    return obj.id !== contactId;
                }),
            };
        });
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
                                <AddContact handleAddContact={this.handleAddingContact}></AddContact>
                            </div>
                        </div>
                        <div className="row py-2">
                            <div className="col-8 offset-2 row">
                                <FavoriteContacts contacts={this.state.contactList.filter((x) => x.isFavorite===true)}
                                    favoriteClick={this.handleToggleFav} deleteContact={this.handleDeleteBtn}></FavoriteContacts>
                            </div>
                        </div>
                        <div className="row py-2">
                            <div className="col-8 offset-2 row">
                                <GeneralContacts contacts={this.state.contactList.filter((x) => x.isFavorite===false)}
                                    favoriteClick={this.handleToggleFav} deleteContact={this.handleDeleteBtn}></GeneralContacts>
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