import React, { useState, useEffect } from 'react';
import TransactionList from './TransactionTable';
import AddTransactionForm from './TransactionForm';
import SearchBar from './SearchBar';

function App() {

    const [transactions, setTransactions] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetchTransactions();
    }, []);
// fetch data from the url
    const fetchTransactions = async () => {
        const response = await fetch('http://localhost:8001/transactions');
        const data = await response.json();
        setTransactions(data);
    };

    const addTransaction = (transaction) => {
        setTransactions([...transactions, transaction]);
    };

    const filterTransactions = () => {
        return transactions.filter(transaction => 
            transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
    };

    return (
        <div className="app">
            <SearchBar setSearchTerm={setSearchTerm} />
            <AddTransactionForm addTransaction={addTransaction} />
            <TransactionList transactions={filterTransactions()} />
        </div>
    );
}

export default App;