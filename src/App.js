import './App.css';
import { Main } from './components/Main';

function App() {
  return (
    <div className="App">
      <header><h1>Giphy Chat</h1></header>
      <Main/>
      <footer>
          <p> &#169; Giphy chat 2022</p>
          <a href="https://developers.giphy.com/" target="_blank" >Giphy developers API</a>
          <p>Made with love and React JS</p>
          <a href="https://www.linkedin.com/in/debopriya-das-5b978b202/" target="_blank" >Developer contact</a>
      </footer>
    </div>
  );
}

export default App;
