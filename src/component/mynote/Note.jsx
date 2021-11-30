import React from 'react';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import './mynote.css';
const Note = (props) => {

    const deleteNote = () => {
        props.deleteItem(props.id);
    }
    return (
        <>
            <div className="note">
                <h3>{props.title}</h3>
                <p>{props.content}</p>
                <button className="btn" >
                    <DeleteOutlineOutlinedIcon onClick={deleteNote} className="deleteIcon" />
                </button>
            </div>
        </>
    )
}
export default Note;