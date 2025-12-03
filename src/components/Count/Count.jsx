<<<<<<< HEAD
import { useState } from "react";
import "./Count.css";
export const Count = ({btnText, onConfirm}) => {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount ((prev) => prev + 1);
    };

    const decrement = () => {
        setCount ((prev) => (prev > 0 ? prev -1 : 0));
    };

    const confirm = () => {
       if (count > 0){
        onConfirm(count);
       }
    };

    return (
    <div className="count-container">
        <div className="count-buttons">
            <button className="btn" onClick={decrement} disabled={count === 0}>-</button>
            <span>{count}</span>
            <button className="btn" onClick={increment}>+</button>
        </div>

        <button className="btn btn-add" onClick={confirm} disabled={count === 0}>
            {btnText}
            </button>
    </div>
);
=======
import { useState } from "react";
import "./Count.css";
export const Count = ({btnText, onConfirm}) => {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount ((prev) => prev + 1);
    };

    const decrement = () => {
        setCount ((prev) => (prev > 0 ? prev -1 : 0));
    };

    const confirm = () => {
       if (count > 0){
        onConfirm(count);
       }
    };

    return (
    <div className="count-container">
        <div className="count-buttons">
            <button className="btn" onClick={decrement} disabled={count === 0}>-</button>
            <span>{count}</span>
            <button className="btn" onClick={increment}>+</button>
        </div>

        <button className="btn btn-add" onClick={confirm} disabled={count === 0}>
            {btnText}
            </button>
    </div>
);
>>>>>>> 1ef59b9eba2b4b9157a8e89d236c4980ff0ccd6e
};