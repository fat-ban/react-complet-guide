
import Expense from "./components/Expense"

function App() {
  const expense =[
    {
      id:'e1',
      title:'Toilet Paper',
      amount:94.12,
      date:new Date(2021,7,14),
    },
    {
      id:'e2',
      title:'Car Insurance',
      amount:94.12,
      date:new Date(2021,7,24),
    },
    {
      id:'e3',
      title:'Toilet Paper',
      amount:94.12,
      date:new Date(2021,7,10),
    },
    {
      id:'e4',
      title:'Toilet Paper',
      amount:94.12,
      date:new Date(2021,7,14),
    },
  ]
  return (
    <div>
      <Expense items={expense}/>
    </div>
    
  );
}

export default App;
