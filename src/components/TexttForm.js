import React ,{useState} from 'react'


export default function TexttForm(props) {
    const handleUpClick =()=>{
        let newText = text.toUpperCase();
        setText(newText);
        
    }
    const handleLowClick=()=>
    {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
      };
    
   const handleClear=()=>{
    let newText = "";
    setText(newText);
   }
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
    const[text , setText] = useState('');
  return (
    <>
<div className="container" style={{color:props.mode ==='dark'?'white':'#042743'}}>

  <label htmlForfor="myBox" className="form-label" ><h1>{props.heading}</h1></label>
  <div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode==='dark'?'#042743': 'white' , color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8" placeholder='Enter text to analyze'></textarea>
  </div>
  <button className="btn btn-primary mx-1 " onClick={handleUpClick}>UpperCase</button>

  <button className="btn btn-primary mx-1" onClick={handleLowClick}>LowerCase</button>

  <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>


  <button className="btn btn-primary mx-1" onClick={handleClear}>Clear</button>

</div>
    <div className="container my-3" style={{color:props.mode ==='dark'?'white':'#042743'}} >
        <h1>Your text summary</h1>
        <p>{text.split(" ").length-1} words and {text.length} characters</p>
        <p>{0.005* text.slice(" ").length} Minutes to read</p>
    </div>
   


    </>
  )
}
//hooks are a way to use state and other React features without writing a class component.