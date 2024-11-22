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
            selectedContact:undefined,
            isUpdating:false,
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

    handleAddRandomContact = (newContact) => {
        const newFinalContact = {...newContact, id:this.state.contactList[this.state.contactList.length-1].id+1,
            isFavorite:false
        };

        this.setState((prevState) => {
            return{
                contactList: prevState.contactList.concat([newFinalContact]),
            };
        });

    }

    handleRemoveAllContact = () => {
        this.setState (() => {
            return{
                contactList:[{}],
            }
        });
    }

    handleUpdateClick = (contact) =>{
        console.log(contact);
        this.setState((prevState) =>{
            return{
                selectedContact: contact,
                isUpdating: true,
            }
        })
    }

    handleCancelUpdateClick = (contact) =>{
        console.log(contact);
        this.setState((prevState) =>{
            return{
                selectedContact: undefined,
                isUpdating: false,
            }
        })
    }

    handleUpdatingContact = (updatedcontact) => {
        console.log(updatedcontact);
        if(updatedcontact.name === ""){
            return{status:"failed", msg:"Please Enter a Valid Name"};
        }else if(updatedcontact.phone === ""){
            return{status:"failed", msg:"Please Enter a Valid Phone Number"};
        }

        
        this.setState((prevState) => {
            return{
                // eslint-disable-next-line eqeqeq
                contactList: prevState.contactList.map((obj) => {
                    if(obj.id === Number(updatedcontact.id)){
                        return{
                            ...obj,
                            name: updatedcontact.name,
                            email: updatedcontact.email,
                            phone: updatedcontact.phone
                        }
                    }
                    return obj;
                }),
                isUpdating: false,
                selectedContact: undefined
            };
        });
        return {status:"success", msg:"Contact was updated successfully!"};
        
    }

    render(){
        return(
            <div>
                <Header></Header>
                <div className="container" style={{minHeight:"85vh"}}>
                    <div className="row py-3">
                        <div className="col-4 offset-2 row">
                            <AddRandomContact 
                                addRandomContact={this.handleAddRandomContact}
                            ></AddRandomContact>
                        </div>
                        <div className="col-4 row">
                            <RemoveAllContact removeAll={this.handleRemoveAllContact}></RemoveAllContact>
                        </div>
                        <div className="row py-2">
                            <div className="col-8 offset-2 row">
                                <AddContact 
                                    handleAddContact={this.handleAddingContact}
                                    isUpdating={this.state.isUpdating} 
                                    selectedContact={this.state.selectedContact}
                                    CancelUpdateContact={this.handleCancelUpdateClick}
                                    updateContact={this.handleUpdatingContact}
                                ></AddContact>
                            </div>
                        </div>
                        <div className="row py-2">
                            <div className="col-8 offset-2 row">
                                <FavoriteContacts contacts={this.state.contactList.filter((x) => x.isFavorite===true)}
                                    favoriteClick={this.handleToggleFav} deleteContact={this.handleDeleteBtn}
                                    editClick={this.handleUpdateClick}></FavoriteContacts>
                            </div>
                        </div>
                        <div className="row py-2">
                            <div className="col-8 offset-2 row">
                                <GeneralContacts contacts={this.state.contactList.filter((x) => x.isFavorite===false)}
                                    favoriteClick={this.handleToggleFav} deleteContact={this.handleDeleteBtn}
                                    editClick={this.handleUpdateClick}></GeneralContacts>
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