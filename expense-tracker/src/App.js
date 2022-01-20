import AddTransaction from './components/AddTransaction';
import './App.css'
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpense from './components/IncomeExpense';
import TransactionHistory from './components/TransactionHistory';

import { GLobalProvider } from './context/GlobalState';

function App() {

  // let [income,setIncome] = useState(0)
  // let [expenditure,setExpenditure] = useState(0)
  // let [balance,setBalance] = useState(0)
  // const [transactions, setTransaction] = useState([])
  

  // function addTransaction (newTransaction) {
  //   setTransaction(prevValue => [...prevValue,newTransaction])
  //   const amt = newTransaction.amount
    
  //   if(amt>0) {
  //     setIncome (prevValue => (prevValue+ Number(amt)))
  //     setBalance (prevValue => prevValue + Number(amt))
  //   } else  {
  //     setExpenditure (prevValue => prevValue+ (-1*Number(amt)))
  //     setBalance (prevValue => prevValue + Number(amt))
  //   }
  // }

  // function removeItem(id) {
  //  setTransaction(prevValue => {
  //     const amt = prevValue[id].amount;

  //     if(amt > 0) {
  //       setIncome(x => (x - Number(amt)))
  //       setBalance(x => (x - Number(amt)))
  //     } else  {
  //       setExpenditure(x => (x + Number(amt)))
  //       setBalance(x => (x - Number(amt)))
  //     }

  //     return (prevValue.filter((item,index) => index !== id))
  //  })
  // }

  return (
    <GLobalProvider>
      <div className='container'>
        <Header />
        <Balance />
        <IncomeExpense />
        <TransactionHistory />
        <AddTransaction />
      </div>
    </GLobalProvider>
  );
}

export default App;