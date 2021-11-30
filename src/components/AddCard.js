import React from "react";

function AddCard(){
    return (
        <div>
            <button type="button" className="btn btn-light btn-block">
                Add Card
            </button>
        </div>
    );
}

<div className="AddCard">
<div>
  <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
  <button onClick={addItem}>Add</button>
</div>
</div>

export default AddCard;