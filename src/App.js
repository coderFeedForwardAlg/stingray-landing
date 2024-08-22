import logo from "./stingray_img-removebg.png"
import './App.css';

function App() {
  return (
    <div className="hstack">
      <div className='vstack'>
        
        <h1 className="heading">
          Stingray, the Most <span style={{backgroundImage: "linear-gradient(to right, rgb(5, 236, 55) , rgb(22, 120, 43))", color: "transparent",backgroundClip: "text"}}> 
             Affordable </span> 
          Firebase Alternative for <br/> the <span style={{backgroundImage: "linear-gradient(to right, rgb(5, 236, 55) , rgb(22, 120, 43))", color: "transparent",backgroundClip: "text"}}>
          AI/ML Era
          </span> 
        </h1>
        <h2 className="subheading">Get large GPU clusters, storage, and hosting at the lowest price on the market while enjoying the ease of cloud, all without the fear of vendor lock in!</h2>
        <button className="button">
          <h1> Get Started </h1>
          </button>
        
      </div>

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
      
    </div>
  );
}

export default App;
