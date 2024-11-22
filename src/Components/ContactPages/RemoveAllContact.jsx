const RemoveAllContact = (props) => {
    return(
        <div>
            <button className="btn btn-danger form-control" onClick={props.removeAll}>Remove All</button>
        </div>
    );
};

export default RemoveAllContact;