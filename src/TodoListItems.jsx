import React, { useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

const TodoListItems = (props) => {
    const [line, setLine] = useState(false);
    const cutIt = () => {
        setLine(true);
    }

    return (
        <>
            <div className="TodoList_style">
                {/* <i className="fas fa-times" area-hidden="true" 
                onClick={() => {
                    props.onSelect(props.id);
                    }}
                /> */}
                <span onClick={cutIt}> <DeleteIcon className="deleteIcon" /> </span>
                <li style={{ textDecoration: line ? "line-through" : "none" }}>{props.text}</li>
            </div>
        </>
    )
}

export default TodoListItems;