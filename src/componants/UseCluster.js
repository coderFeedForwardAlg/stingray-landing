import logo from "../stingray_img-removebg.png"
import '../App.css';
import { useState } from "react";


function UseCluter() {
    const [responseData, setResponseData] = useState('');
    const [file, setFile] = useState()

  function handleChange(event) {
    setFile(event.target.files[0])
  }
  
  async function handleSubmit(event) {
    event.preventDefault();
    alert("this may take a little bit to run")

    const url = 'http://38.70.48.137:8000/run_ray';   //'http://127.0.0.1:8000';
    const formData = new FormData();
    formData.append('file', file);
    // formData.append('fileName', file.name);
    
    let response = await fetch(url, {
        method: 'POST',
        headers: {

          'Content-Type': 'multipart/form-data',
        },
        body: formData,
      })

      const result = await response.text();
      if (result) {
        setResponseData(result);
      }

  }

  


  return (
    <div className="hstack">
        
       <form  onSubmit={handleSubmit}>
          <h1 style={{color: "white"}}>File Upload</h1>
          <input className="button"  type="file" onChange={handleChange}/>
          <button className="button" type="submit">
            <h1>Upload</h1>
          </button>
        </form>
        
        {responseData && <h2 style={{color: "white"}}>{responseData}</h2>}
    </div>
  );
}

export default UseCluter;
