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
  const [fav, setFav] = useState('Sachin')
  const [clicked, setClicked] = useState(()=> 10 * 0)
  
  function moveUp(name, pos) {
    console.log( `I clicked on ${name} `)
   
    let newRankings = rankings.map(i=>{
     if(i.name === name) {
       return {...i,position:pos-1}
     }
     return i 
    })
    setRankings(newRankings)
  }

  function moveDown(name,pos) {
    let newRankings = rankings.map(i=>{
      if(i.name === name) {
        return {...i,position:pos+1}
      }
      return i 
     })
     setRankings(newRankings)
  }

  function changeFavorite(name) {
    setClicked(clicked+1)
    setFav(name)
  }


const showRankings =rankings
.sort((a,b)=> a.position - b.position)
.map((i,idx,arr)=>{
return (<div style={{margin:"10px"}}>
 {i.name} {" "}
 <button onClick={()=>moveUp(i.name,arr[idx-1].position)}>Move Up </button>{" "}
 <button onClick={()=>moveDown(i.name,arr[idx+1].position)}> Move Down </button>{" "}
</div>)
})

const favs =rankings
.map(i=>{
return (<div style={{margin:"10px"}}>
 {i.name} {" "}
 <button disabled={clicked ===3} onClick={()=>changeFavorite(i.name)}>{`Click Here to make ${i.name} your Favorite`}</button>{" "}
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

