import { useState } from "react";

function MakeDocDb() {

    const [responseData, setResponseData] = useState('');
    const [name, setName] = useState('');
    const [pass, setPass] = useState('');
  
  async function handleSubmit(event) {
    event.preventDefault();


    const url = `https://makedocdb.team-stingray.com/add/${name}/${pass}`;   //'http://127.0.0.1:8000';

    
    let response = await fetch(url)

      const result = await response.text();
      if (result) {
        setResponseData(result);
      }

  }

  let changeName = (e) =>{
    setName(e.target.value);

  }

  let changePass = (e) =>{
    setPass(e.target.value);

  }

  


  return (
    <div className="hstack">
        <form  onSubmit={handleSubmit}>
            <h2 style={{color: "white"}}>User Name</h2>
          <input type="text" value={name} onChange={changeName}/>
          <h2 style={{color: "white"}}>Database Password</h2>
          <input type="text" value={pass} onChange={changePass}/>
          <button className="button" type="submit">
            <h1>Make data base</h1>
          </button>
        </form>
        {responseData && <h2 style={{color: "white"}}>{responseData}</h2>}
    </div>
  );
}

export default MakeDocDb;

