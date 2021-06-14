

import React ,{useState} from 'react';
import importedData from '../student_records.json'
import MainTable from './MainTable';
import '../App.css'
import InputForm from './InputForm';
import EditForm from './EditForm';


const Scores = () => {

    const [data, setData] = useState(importedData) 
    const [editData, setEditData] = useState({}) 

    function handleEdit (name) {
        let cData = [...data]
        let filterData = cData.find(i=>i.Name !== name)
        setEditData(filterData)
         }


    return (
        <div>

            Main Component 
            <MainTable 
            data={data}
           setData={setData}
           handleEdit={handleEdit}
            />
           <InputForm 
           setData={setData}
           data ={data}
           />
            <EditForm 
           data ={data}
           setData={setData}
           editData={editData}


           />
            
        </div>
    );
};



export default Scores
 
