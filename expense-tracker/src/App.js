import { useState } from 'react';
import AddTransaction from './components/AddTransaction';
import ListItem from './components/ListItem';
import Span from './components/Span';
import './App.css'

function App() {

  let [income,setIncome] = useState(0)
  let [expenditure,setExpenditure] = useState(0)
  let [balance,setBalance] = useState(0)
  const [transactions, setTransaction] = useState([])
  

  function addTransaction (newTransaction) {
    setTransaction(prevValue => [...prevValue,newTransaction])
    const amt = newTransaction.amount
    
    if(amt>0) {
      setIncome (prevValue => (prevValue+ Number(amt)))
      setBalance (prevValue => prevValue + Number(amt))
    } else  {
      setExpenditure (prevValue => prevValue+ (-1*Number(amt)))
      setBalance (prevValue => prevValue + Number(amt))
    }
  }

  function removeItem(id) {
   setTransaction(prevValue => {
      const amt = prevValue[id].amount;

      if(amt > 0) {
        setIncome(x => (x - Number(amt)))
        setBalance(x => (x - Number(amt)))
      } else  {
        setExpenditure(x => (x + Number(amt)))
        setBalance(x => (x - Number(amt)))
      }

      return (prevValue.filter((item,index) => index !== id))
   })
  }

  return (
    <>
    <div className='container'>
      <h1 style={{marginTop: '3rem', textAlign: 'center'}}>Expense Tracker</h1>

      <div className='balance-div'>
        <h2>Your balance</h2>
        <h1>{'\u20b9'} {balance}</h1>
      </div>

      <div className='inc-exp-div'>
        <Span category='Income' amount={income} id={'income-span'}/>
        <Span category='Expense' amount={expenditure} id={'exp-span'}/>
      </div>

      <div className='history'>
        <h2>History</h2>
        <ul>
          {transactions.map((transaction,index) => (
            <ListItem item={transaction.text} amount={transaction.amount} key={index} onRemove={removeItem} id={index}/>
          ))}
        </ul>
      </div>

      <div className='new-transaction'>
        <h2>Add New Transaction</h2>
        <AddTransaction onAdd={addTransaction}/>
      </div>
    </div>
    </>
  );
}

export default App;