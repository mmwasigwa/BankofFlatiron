import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TransactionTable from './components/TransactionTable';
import TransactionForm from './components/TransactionForm';
import SearchBar from './components/SearchBar';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    try {
      const response = await axios.get('http://localhost:8001/transactions');
      setTransactions(response.data.transactions);
    } catch (error) {
      console.error('Error fetching transactions:', error);
    }
  };

  const handleAddTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Recent Bank Transactions</h1>
      <SearchBar onSearch={handleSearch} />
      <TransactionTable transactions={filteredTransactions} />
      <TransactionForm onAddTransaction={handleAddTransaction} />
    </div>
  );
}

export default App;
