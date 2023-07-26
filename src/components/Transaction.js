import React from "react";


function Transaction({ transaction }) {
    return (
        <tr>
            <td>{transaction.id}</td>
            <td>{transaction.date}</td>
            <td>{transaction.description}</td>
            <td>{transaction.category}</td>
            <td>{transaction.amount}</td>
            
        </tr>
    );
}

export default Transaction;