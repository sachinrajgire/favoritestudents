

import axios from 'axios' ;
import React ,{useEffect, useState} from 'react';
// import importedData from '../student_records.json'
import MainTable from './MainTable';
import '../App.css'
import CreateNewForm from './CreateNewForm/CreateNewForm';
import EditForm from './EditForm';
import Navbar from '../Components/Navbar/Navbar';
// side effect

const Scores = () => {

    const [data, setData] = useState([]) // 
    const [selectedRow, setSelectedRow] = useState({}) 
    
    useEffect(()=>{
   axios.get('http://localhost:4000/')
   .then((d)=>console.log(d))
   .catch(e=>console.log(e))


    },[])
 
    function handleEdit (name) {
        let cData = [...data]
        let filterData = cData.find(i=>i.Name === name)
        console.log(filterData,'filterData');
        setSelectedRow(filterData)}



    return (
        <div>
            <Navbar>
            <MainTable 
            data={data}
           setData={setData}
           handleEdit={handleEdit}
            /> 
           {/* <CreateNewForm 
           setData={setData}
           data ={data}
           />
            <EditForm 
           data ={data}
           setData={setData}
           selectedRow={selectedRow}
           setSelectedRow={setSelectedRow}
           />  */}
      </Navbar>

        </div>
    );
};



export default Scores