import React, { useState } from 'react';

function AddTransactionForm({ addTransaction }) {
    const [transaction, setTransaction] = useState({
        description: '',
        amount: '',
        category: '',
        id: '',
        date: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTransaction(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addTransaction(transaction);
        
        setTransaction({
          id: '',
          date: '',
          description: '',
          category: '',
          amount: ''
           
        });
    };

    return (
      
        <form onSubmit={handleSubmit}>
          <p>Enter New Transaction</p>
      
           <input 
                type="text"
                name="id"
                placeholder="Id"
                value={transaction.id}
                onChange={handleChange}
            />
            <input 
                type="date"
                name="date"
                value={transaction.date}
                onChange={handleChange}
            />
            <input 
                type="text"
                name="description"
                placeholder="Description"
                value={transaction.description}
                onChange={handleChange}
            />
            <input 
                type="text"
                name="category"
                placeholder="Category"
                value={transaction.category}
                onChange={handleChange}
            />
            
            <input 
                type="number"
                name="amount"
                placeholder="Amount"
                value={transaction.amount}
                onChange={handleChange}
            />
            
            
            <button type="submit" >Add Transaction</button>
        </form>
    );
}

export default AddTransactionForm;