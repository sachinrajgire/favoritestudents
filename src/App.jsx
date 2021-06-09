import './App.css';
import React,  { useState, Fragment } from 'react' ;
const initialState =[
  {name : 'Shaivy' , position :2 },
  {name : 'Sachin' , position :78 },
  {name : 'Kevin' , position :99 },
  {name : 'Arushi' , position :40 },
  {name : 'Rajvi' , position :30 },
  {name : 'Avinash' , position :9 },
  {name : 'Ingrid' , position :5 },
  {name : 'Tanisha' , position :89 },
  {name : 'Tianna' , position :100},
  {name : 'Swasti' , position :78 },
  {name : 'Prashant' , position :45 },
  

]

function App() {

  const [rankings, setRankings] = useState(initialState)
  const [fav, SetFav] = useState('Sachin')

  function moveUp() {
    // do some thing here 
  }

  function moveDown() {
    // do some thing here 
  }

  function changeFavorite() {
    // do some thing here 
  }


const showRankings =rankings
.sort((a,b)=> a.position - b.position)
.map(i=>{
return (<div style={{margin:"10px"}}>
 {i.name} {" "}
 <button onClick={()=>moveUp()}>Move Up </button>{" "}
 <button onClick={()=>moveUp()}> Move Down </button>{" "}
</div>)
})

const favs =rankings
.map(i=>{
return (<div style={{margin:"10px"}}>
 {i.name} {" "}
 <button onClick={()=>changeFavorite()}>{`Click Here to make ${i.name} your Favorite`}</button>{" "}
</div>)
})

return (
<div style={{margin:"10vw", padding:"20px"}}>
<h2>Who in the class speaks the most other , Top speakers go on top</h2> 
{showRankings}

<h2> Vote  on your most favorite person in class - Only one -- You guys better vote for me</h2>  
<h3> I have set myself as default ..HAHA  </h3> 
<h4>Only rule , you can change your mind 3 times , after which all buttons are disabled </h4> 
<p>{`Currently your favorite person is ${fav}`}</p> 
{favs}



</div>
  );
}

export default App;

