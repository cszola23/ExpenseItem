import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    {
      title: "Car Insurance",
      amount: 123.45,
      date: new Date(2021, 2, 11),
    },
    { title: "Chicken breast",
      amount: 100,
      date: new Date(2022, 1, 10)
    },
    { title: "RTX 3060",
      amount: 705,
      date: new Date(2022, 1, 11)
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
