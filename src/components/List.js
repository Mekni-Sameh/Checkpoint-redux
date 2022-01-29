import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {deleteHandler,checkHandler} from '../redux/action'
function List() {
    const dispatch = useDispatch()
    const List = useSelector((state) => state.tasks)
    const remove=(ID_Tsamih_Kima_T7ib)=>{
        dispatch(deleteHandler(ID_Tsamih_Kima_T7ib))
    }
    const done=(ID)=>{
        List.map((elem,i)=>{
            if(elem.id === ID){
               elem.isDone = !elem.isDone 
            }
        })
        console.log(List)
        dispatch(checkHandler(List))
    }
    return (
        <div>
            {List.map((task,i) => <div key={`ListTask_${i}`}>
                {task.name}
                <button onClick={() => done(task.id)}>Done</button>
                <button onClick={()=> remove(task.id)}>Delete</button></div>)}
        </div>
    )
}

export default List
