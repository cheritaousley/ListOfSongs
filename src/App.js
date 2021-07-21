import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';

function App() {
  // const [items] = useState([]);
  const [items] = [];
    async function createNewSong(e) {
      // logic to create new song
      items.push(e.target.song)
      // this.setState({
      //   song: e.target.song,
      //   items: [e.target.song]
      // })
    }
  return (
    <div className="App">
      <header>
        <h1>What's your favorite song?</h1>
      <form onSubmit={createNewSong}>
        <input onChange={(e) =>e.target.value}></input>
      </form>
      </header>
      <ul>
        {items.map(song => {
          return( 
          <li>
            {song}
          </li>
          )
        })}
      </ul>
    </div>
  );
 } 

export default App;
