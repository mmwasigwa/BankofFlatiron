import React, { useState } from 'react';
import Transactions from './Transactions';
import styles from './App.module.css';
// For styling purposes .module.css is used
import data from './db.json';

function App() {
  const [transactions, setTransactions] = useState(data.transactions);
  const [newTransaction, setNewTransaction] = useState({
    "id": "",
    "date": "",
    "description": "",
    "category": "",
    "amount": ""
  });
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewTransaction(prevTransaction => ({
      ...prevTransaction,
      [name]: value
    }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextId = transactions.length + 1;
    const newTransactionWithId = { ...newTransaction, id: nextId };
    setTransactions(prevTransactions => [...prevTransactions, newTransactionWithId]);
    setNewTransaction({
      "id": "",
      "date": "",
      "description": "",
      "category": "",
      "amount": ""
    });
  }

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  }

  const handleDelete = (id) => {
    setTransactions(prevTransactions => prevTransactions.filter(transaction => transaction.id !== id));
  }

  const filteredTransactions = transactions.filter(transaction => transaction.description.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className={styles.container}>
      <h1>Amiri's Expenses</h1>
      <Transactions
        transactions={filteredTransactions}
        newTransaction={newTransaction}
        onSubmit={handleSubmit}
        onInputChange={handleChange}
        searchTerm={searchTerm}
        onSearchChange={handleSearch}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;