import { useState } from "react";

function Square() {
    const [msg, setMsg] = useState("");
    const [num, setNum] = useState("");
    const hNum = (event) => {setNum(event.target.value);}

    const find = (event) => {
        event.preventDefault();
        let n = parseFloat(num);
        let r = n**2;
        setMsg("Square = " + r.toFixed(2));
    }

    return(
        <>
            <center>
                <h1>Square Finder App</h1>
                <form onSubmit={ find }>
                    <input type="number" id="num" placeholder="Enter a number" onChange={hNum} />
                    <br />
                    <br />
                    <input type="submit" value="Find the Square" />
                </form>
                <h2> {msg} </h2>
            </center>
        </>
    );
}
export default Square;