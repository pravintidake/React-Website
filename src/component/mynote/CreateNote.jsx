import React, { useState } from 'react';
import './mynote.css';
// import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import OutsideClickHandler from 'react-outside-click-handler';

const CreateNote = (props) => {
  const [expand, setExpand] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;
    setNote((prevData) => {
      return {
        ...prevData, [name]: value,
      }
    })
  }

  const addEvent = (event) => {
    event.preventDefault();
    props.passNote(note);
    setNote({
      title: "",
      content: "",
    });
  };

  const expandIt = () => {
    setExpand(true);
  }

  return (
    <>
      <OutsideClickHandler onOutsideClick={() => { setExpand(false) }}>
        <div className="main_note">
          <form>
            {expand ? <input type="text" placeholder="Title" value={note.title} name="title" onChange={InputEvent} autoComplete="off" /> : null}
            <textarea placeholder="Take a note..." value={note.content} name="content" onChange={InputEvent} onClick={expandIt} autoComplete="off" />
            {expand ? <div className="btndiv">
              <button color="secondary" className="btnAdd" onClick={addEvent}>
                <AddIcon className="AddIcon" />
              </button>
            </div> : null}
          </form>
        </div>
        </OutsideClickHandler>
      </>
      )
}
      export default CreateNote;