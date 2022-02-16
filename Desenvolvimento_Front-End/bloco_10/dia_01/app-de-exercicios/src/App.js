import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  )
}


function App() {
  let list = ['lavar a roupa', 'cozinhar o almoço', 'lavar o carro'];
  list = list.map(index => Task(index));

  return list;
}

export default App;
