import './App.css';
import Navbar from './components/Navbar';
import Todos from './components/Todos';
import { Provider } from 'react-redux';
import { store } from './app/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        My App
        <Navbar />
        <Todos />
      </div>
    </Provider>
  );
}

export default App;
