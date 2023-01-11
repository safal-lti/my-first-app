import React, {useState} from 'react'
import PropTypes from 'prop-types'

let vowels=['a','A','e','E','i','I','o','O','u','U'];
export default function TextForm(props) {

  const handleUpClick = () =>{
      let newText=text;
      newText=newText.toUpperCase();
      setText(newText);
  }  

  const handleLowClick= ()=>{
    let textEnd=text.substring(1,text.length);
    textEnd=textEnd.toLowerCase();
    let textBegin=text.substring(0,1);
    textBegin=textBegin.toUpperCase();
    let newText=textBegin+textEnd;
    setText(newText);
  }

  const handleVowels= ()=>{
    let myTextArr=text.split(' ');
    let count=0;
    for(let i=0; i<myTextArr.length; i++){
      if(vowels.includes(myTextArr[i][0])===true){
        count=count+1;
      }
    }
   // console.log('count-->'+count);
    setVowelCount(count);
  }

  const handleOnChange = (event) =>{
    //console.log("Wah Yaar hogya");
    setText(event.target.value)
  }  


  const [text,setText]=useState("");
  const [vowelCount,setVowelCount]=useState("0");

  return (
    <>
    <div>
        <div className="mb-3">
        <h3>{props.heading}</h3>
        <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to uppercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleVowels}>Words Starting with vowel</button>
    </div>
    <div className="container my-3">
        <h3>Your Text Summary</h3>
        <p>The text has <b>{text.split(" ").filter(e => e).length}</b> words and <b>{text.length}</b> charachters</p>
        <p>It took <b>{0.0008 * text.split(" ").length}</b> minutes to read your text</p>
        <p>Number of words starting with Vowels : <b>{vowelCount}</b></p>
        <h4>Preview</h4>
        <p>{text}</p>
    </div>
    </>
  );
}

TextForm.propTypes={ heading : PropTypes.string};
