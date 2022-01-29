import React,{useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {addHandler} from '../redux/action'

function AddTask() { 
    const dispatch = useDispatch()
    const List = useSelector((state) => state.tasks)
    const [text,setText] = useState("")

    const addInput = () =>{
        List.push({name:text,isDone:false,id:List.length + 1})
        dispatch(addHandler(List))
    }

    return (
        <div>
            <input type="text" onInput={(e) => setText(e.target.value)}/>
            <button onClick={addInput}>+</button>
        </div>
    )


}

export default AddTask
