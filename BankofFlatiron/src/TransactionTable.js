import React from 'react';

const TransactionTable = ({ transactions }) => {
  return (
    <table className="table-auto w-full">
      <thead>
        <tr>
          <th className="px-4 py-2">Date</th>
          <th className="px-4 py-2">Description</th>
          <th className="px-4 py-2">Category</th>
          <th className="px-4 py-2">Amount</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <tr key={transaction.id}>
            <td className="border px-4 py-2">{transaction.date}</td>
            <td className="border px-4 py-2">{transaction.description}</td>
            <td className="border px-4 py-2">{transaction.category}</td>
            <td className="border px-4 py-2">${transaction.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionTable;
