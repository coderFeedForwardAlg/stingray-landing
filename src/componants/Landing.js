import logo from "../stingray_img-removebg.png"
import '../App.css';
import { Outlet, Link } from "react-router-dom";


function Landing() {
  
  const callAPI = async (data) => {
    try {
      // will need to change localhost 
      const response = await fetch('http://127.0.0.1:8000', {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain',
        },
        body: data,
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  let python = `print("bye")
print("sup")`;


  return (
    <div className="hstack">
      <div className='vstack'>
        
        <h1 className="heading">
          Stingray, the Most <span style={{backgroundImage: "linear-gradient(to right, rgb(5, 236, 55) , rgb(22, 120, 43))", color: "transparent",backgroundClip: "text"}}> 
             Affordable </span> 
          AWS Alternative for <br/> the <span style={{backgroundImage: "linear-gradient(to right, rgb(5, 236, 55) , rgb(22, 120, 43))", color: "transparent",backgroundClip: "text"}}>
          AI/ML Era
          </span> 
        </h1>
        <h2 className="subheading">Get large GPU clusters, storage, and hosting at the lowest price on the market while enjoying the ease of cloud, all without the fear of vendor lock in!</h2>
        <button className="button">
          <h1> <Link to="/ray_code">Get Started</Link> </h1>
          </button>
          
        
      </div>
	{/* ******************* needs media quarys to get rid of sting rays when width is < 1200 px!!!!!!!!!!!  */}
      <div className="stingrays">
      
        {/* <img src={logo} style={{gridRowStart: 1, gridColumnStart: 1, width:"50%", height:"50%", rotate:"0deg"}}/> */}
        <img src={logo} style={{gridRowStart: 1, gridColumnStart: 2,width:"100%", height:"100%", rotate:"50deg"}}/>
        {/* <img src={logo} style={{gridRowStart: 1, gridColumnStart: 3,width:"50%", height:"50%", rotate:"90deg"}}/> */}
        <img src={logo} style={{gridRowStart: 2, gridColumnStart: 1,width:"100%", height:"100%", rotate:"-40deg"}}/>
        <img src={logo} style={{gridRowStart: 2, gridColumnStart: 3,width:"100%", height:"100%", rotate:"135deg"}}/>
        {/* <img src={logo} style={{gridRowStart: 3, gridColumnStart: 1,width:"100%", height:"100%", rotate:"-90deg"}}/> */}
        <img src={logo} style={{gridRowStart: 3, gridColumnStart: 2,width:"100%", height:"100%", rotate:"-90deg"}}/>
        {/* <img src={logo} style={{gridRowStart: 3, gridColumnStart: 3,width:"100%", height:"100%", rotate:"0deg"}}/> */}
      </div>     
      <Outlet />
    </div>
  );
}

export default Landing;
