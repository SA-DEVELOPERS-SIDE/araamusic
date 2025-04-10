import React, { useState } from 'react';
import './App.css';

function App() {
  const [songs, setSongs] = useState([]);
  const [file, setFile] = useState(null);

  // Handle file selection
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // Handle song upload
  const handleUpload = () => {
    if (!file) {
      alert("Please select a song to upload!");
      return;
    }
    
    // For simplicity, we are storing the song locally in the state
    const newSong = {
      name: file.name,
      url: URL.createObjectURL(file), // Create a temporary URL for the file
    };

    setSongs([...songs, newSong]);
    setFile(null); // Reset file input
  };

  return (
    <div className="App">
      <h1>Tamil Music Player</h1>
      
      <div>
        <input
          type="file"
          accept="audio/mp3"
          onChange={handleFileChange}
        />
        <button onClick={handleUpload}>Upload Song</button>
      </div>
      
      <div>
        <h2>Song List</h2>
        <div className="song-list">
          {songs.map((song, index) => (
            <div key={index} className="song-item">
              <p>{song.name}</p>
              <audio controls>
                <source src={song.url} type="audio/mp3" />
                Your browser does not support the audio element.
              </audio>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
