import React, {useState} from 'react';
import styles from './Transactions.module.css';
// For styling purposes .module.css is used

function Transactions({ transactions, newTransaction, onSubmit, onInputChange, searchTerm, onSearchChange, onDelete }) {
    const [sortCriteria, setSortCriteria] = useState("");
  
    const handleSort = (criteria) => {
      if (criteria === sortCriteria) {
        // If the same criteria is clicked twice, reverse the order of sorting
        setSortCriteria(criteria + ":reverse");
        transactions.reverse();
      } else {
        setSortCriteria(criteria);
        if (criteria === "category") {
          transactions.sort((a, b) => a.category.localeCompare(b.category));
        } else if (criteria === "description") {
          transactions.sort((a, b) => a.description.localeCompare(b.description));
        }
      }
    }
  
    const handleDelete = (id) => {
      onDelete(id);
    }
  
    return (
      <div>
        <form onSubmit={onSubmit}>
          <label>
            Date:
            <input type="text" name="date" value={newTransaction.date} onChange={onInputChange} />
          </label>
          <label>
            Description:
            <input type="text" name="description" value={newTransaction.description} onChange={onInputChange} />
          </label>
          <label>
            Category:
            <input type="text" name="category" value={newTransaction.category} onChange={onInputChange} />
          </label>
          <label>
            Amount:
            <input type="text" name="amount" value={newTransaction.amount} onChange={onInputChange} />
          </label>
          <button type="submit">Add Transaction</button>
        </form>
        <input type="text" placeholder="Search by description" value={searchTerm} onChange={onSearchChange} />
        <div className={styles.buttonContainer}>
          <button className={styles.sortButton} onClick={() => handleSort("category")}>Sort by Category</button>
          <button className={styles.sortButton} onClick={() => handleSort("description")}>Sort by Description</button>
        </div>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Category</th>
              <th>Amount</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {transactions.map(transaction => (
              <tr key={transaction.id}>
                <td>{transaction.date}</td>
                <td>{transaction.description}</td>
                <td>{transaction.category}</td>
                <td>{transaction.amount}</td>
                <td><button className={styles.deleteButton} onClick={() => handleDelete(transaction.id)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  export default Transactions;