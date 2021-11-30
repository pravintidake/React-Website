import React, { useState } from 'react';
import TodoListItems from './TodoListItems';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
// import DeleteIcon from '@material-ui/icons/Delete';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const ToToList = () => {
    const [inputList, setInputList] = useState("");
    const [Items, setItems] = useState([]);

    const ItemEvent = (event) => {
        // console.log("Chenged");
        setInputList(event.target.value);
    }

    const listOfItems = () => {
        setItems((oldItems) => { return [...oldItems, inputList] });
        setInputList('');
    }

    const deleteItem = (id) => {
        setItems((oldItems) => {
            return oldItems.filter((arrElement, index) => {
                return index !== id;
            })
        })
        console.log('Deleted...');
    }

    return (
        <div className="main_div">
            <div className="center_div">
                <br />
                <h1>ToDo List</h1>
                <br />
                <div className="input_div">
                    <input type="text" placeholder="Add a Items" onChange={ItemEvent} value={inputList} />
                    <Tooltip title="Add a Items">
                        <Button className="add_btn" onClick={listOfItems}>
                            <AddIcon />
                        </Button>
                    </Tooltip>
                </div>

                <ol>
                    {/* <li>{inputList}</li> */}
                    {/* <li>Buy Apple</li> */}

                    {Items.map((itemval, index) => {
                        return (
                            <TodoListItems text={itemval} id={index} key={index} onSelect={deleteItem} />
                        )
                    })}
                </ol>
                {/* <button className="btn btn-success">Pravin Tidake</button> */}
            </div>

        </div>
    )
}

export default ToToList;