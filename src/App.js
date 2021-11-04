import './App.css';
import Header from './components/header';
import Main from './components/main';
import Navigation from './components/navigation';

function App() {
  return (
    <div className="app">
      <Header />
      <Navigation />
      <Main />
    </div>
  );
}

export default App;
