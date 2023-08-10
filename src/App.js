import logo from './logo.svg';
import './App.css';
import Calculator from './components/calculator/calculator';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (

   <>
      <h2> Calc - 1 </h2>
     <div className="calculator">
      <Calculator id="calc-1" options=""></Calculator>
    </div>
    <h2> Calc - 2 </h2>
    <div className="calculator">
        <Calculator id="calc-1" options=""></Calculator>
    </div>
    </>
  );
}

export default App;
