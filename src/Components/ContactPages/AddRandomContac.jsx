import { getRandomUserContact } from "../../Utility/api";

const getRandomUser = async (props) => {
    const getRandomUserFromAPI = await getRandomUserContact();
    console.log(getRandomUserFromAPI);

    return props.addRandomContact({
        name: getRandomUserFromAPI.data.first_name + " " + getRandomUserFromAPI.data.last_name,
        email: getRandomUserFromAPI.data.email,
        phone: getRandomUserFromAPI.data.phone_number

    })
}

const AddRandomContact = (props) => {
    return(
        <div>
            <button className="btn btn-success form-control" onClick={()=>{getRandomUser(props)}}>Add Random Contact</button>
        </div>
    );
};

export default AddRandomContact;