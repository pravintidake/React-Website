import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

const IncDecNumber = () => {
    const [count, setCount] = useState(0);

    const IncNum = () => {
        setCount(count + 1);
    }

    const DecNum = () => {
        if (count <= 0) {
            alert('0 is the Last Limit to Decrease...');
        } else { setCount(count - 1); }
    }

    return (
        <>
            <div className="main_div">
                <div className="center_Div">
                    <h1>{count}</h1>
                    <div className="button_div">
                        <Tooltip title="Decrease">
                            <Button variant="outlined" className="btnDec btn_green" onClick={DecNum}><RemoveIcon /></Button>
                        </Tooltip>
                        <Tooltip title="Incease">
                            <Button variant="outlined" className="btnInc btn_red" onClick={IncNum}><AddIcon /></Button>
                        </Tooltip>
                    </div>
                </div>
            </div>
        </>
    )
}

export default IncDecNumber;