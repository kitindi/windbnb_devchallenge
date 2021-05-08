import Home from './pages/Home.js'



function App() {
  return (
    <div className="App">
    <Home/>
    {console.log(new Date().getTime().toLocaleString())}
    </div>
  );
}

export default App;
