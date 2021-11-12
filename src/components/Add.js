import React from "react";

function Add(){
    return (
        <div className="container">
            <div className="form-group">
                <input type="text" className="form-control" id="pwd" name="add" />
            </div>
            <button type="submit" className="btn btn-link float-left">Cancel</button>
            <button type="submit" className="btn btn-primary float-right">Add</button>
        </div>
    );
}

export default Add;