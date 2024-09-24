import React, { useState } from "react";
import axios from 'axios';

function App() {
  const [file, setFile] = useState(null);
  const [fileUrl, setFileUrl] = useState("");

  const upload = () => {
    const formData = new FormData();
    formData.append('file', file);

    axios.post('http://localhost:3001/upload', formData)
      .then(res => {
        setFileUrl(res.data.filePath);  
      })
      .catch(err => console.log(err));
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>File Upload</h1>
      <input 
        type="file" 
        onChange={(e) => setFile(e.target.files[0])} 
        style={styles.input}
      />
      <button type="button" onClick={upload} style={styles.button}>
        Upload
      </button>

      
    
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '50px',
  },
  heading: {
    color: '#4CAF50',
    marginBottom: '20px',
  },
  input: {
    marginBottom: '20px',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  previewContainer: {
    marginTop: '20px',
    textAlign: 'center',
  },
  image: {
    marginTop: '10px',
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '8px',
  },
};

export default App;
