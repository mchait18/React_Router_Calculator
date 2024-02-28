import React from "react";
import { useParams } from "react-router-dom";

const Operate = () => {
    const { operation, num1, num2 } = useParams()
    let solution;
    if (operation === 'add') solution = Number(num1) + Number(num2)
    else if (operation === 'subtract') solution = num1 - num2
    else if (operation === 'multiply') solution = num1 * num2
    else if (operation === 'divide') solution = num1 / num2
    return (
        <div>The solution is: {solution}</div>
    )
}
export default Operate