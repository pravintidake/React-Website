const SlotM = (props) => {
    // let x = '😄';
    // let y = '😄';
    // let z = '😄';

    let x = props.x;
    let y = props.y;
    let z = props.z;

    if(x===y && y===z) {
        return (
            <>
                <div className="slot_inner">
                    <h1> {x} {y} {z}</h1>
                    <h1>Wow Its a match</h1>
                    <hr />
                </div>
            </>
            )
    } else {
        return (
            <>
                <div className="slot_inner">
                    <h1> {x} {y} {z}</h1>
                    <h1>Not Match</h1>
                </div>
            </>
            )
    }
}

export default SlotM;