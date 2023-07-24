import React, { useState } from 'react';

const TransactionForm = ({ onAddTransaction }) => {
  const [formData, setFormData] = useState({
    date: '',
    description: '',
    category: '',
    amount: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      ...formData,
      id: Date.now(),
    };
    onAddTransaction(newTransaction);
    setFormData({
      date: '',
      description: '',
      category: '',
      amount: '',
    });
  };

  return (
    <form className="mt-4" onSubmit={handleSubmit}>
      <h2 className="text-lg font-semibold mb-2">Add New Transaction</h2>
      <div className="mb-2">
        <label htmlFor="date" className="block text-sm font-medium">
          Date
        </label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="border rounded-md px-2 py-1 w-full"
          required
        />
      </div>
      <div className="mb-2">
        <label htmlFor="description" className="block text-sm font-medium">
          Description
        </label>
        <input
          type="text"
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="border rounded-md px-2 py-1 w-full"
          required
        />
      </div>
      <div className="mb-2">
        <label htmlFor="category" className="block text-sm font-medium">
          Category
        </label>
        <input
          type="text"
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="border rounded-md px-2 py-1 w-full"
          required
        />
      </div>
      <div className="mb-2">
        <label htmlFor="amount" className="block text-sm font-medium">
          Amount
        </label>
        <input
          type="number"
          id="amount"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          className="border rounded-md px-2 py-1 w-full"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Add Transaction
      </button>
    </form>
  );
};

export default TransactionForm;
