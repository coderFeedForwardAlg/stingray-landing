import logo from "../stingray_img-removebg.png"
import '../App.css';
import { useState } from "react";


function UseCluter() {
    const [file, setFile] = useState()

  function handleChange(event) {
    setFile(event.target.files[0])
  }
  
  async function handleSubmit(event) {
    event.preventDefault();
    const url = 'http://127.0.0.1:8000';
    const formData = new FormData();
    formData.append('file', file);
    // formData.append('fileName', file.name);
    
    let response = await fetch('http://127.0.0.1:8000', {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: formData,
      }).then((response) => {
        console.log(response)
      });

  }

  return (
    <div className="hstack">
       <form onSubmit={handleSubmit}>
          <h1>React File Upload</h1>
          <input type="file" onChange={handleChange}/>
          <button type="submit">Upload</button>
        </form>
    </div>
  );
}

export default UseCluter;
