import CarFinanceCalc from "./components/CarFinanceCalc";
import { useState, useEffect } from 'react';

function App() {
  const defaultFinanceParams = {
    'msrp': 0,
    'interest_pct': 5.0,
    'term': 60,
    'downpayment': 0 
  }
  const [financeParams, setFinanceParams] = useState(defaultFinanceParams);

  useEffect(()=> {
    setFinanceParams({msrp: 30000});
  }, [])

  return (
    <div className="App container">
      <div className="content">
          <h1>Vehicle Finance Calculator</h1>
          <CarFinanceCalc 
          cost={financeParams.msrp}
          interest_pct={financeParams.interest_pct}
          term={financeParams.term}
          downpayment={financeParams.downpayment}
           />
      </div>
    </div>
  );
}

export default App;
