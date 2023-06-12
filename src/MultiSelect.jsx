import React, { useState } from 'react'
import Multiselect from 'multiselect-react-dropdown'

function MultiSelect() {
    const [option] = useState(['option 1','option 2','option 3','option 4','option 5','option 6','option 7','option 8'])
    const [select ] = useState(['option 1','option 2'])
    const [readOnly,setReadOnly]=useState(true)
  
  return (
    <>
    <center><h2 style={{color:"seagreen",fontFamily:"cursive"}}> MULTIPLE SELECTION</h2>
    <br/><br/>
    <div style={{width:'600px'}}>
    <Multiselect
      isObject={false}
      options={option}
      showCheckbox
      placeholder='Select'
      selectedValues={select}
      disable={readOnly}
      
       />
       <button className='btn btn-primary p-1 m-2' onClick={()=>setReadOnly(false)}>Enable</button>
       <button className='btn btn-secondary p-1 m-2' onClick={()=>setReadOnly(true)}>Disable</button>


    </div>
    </center>

    </>
  )
}

export default MultiSelect