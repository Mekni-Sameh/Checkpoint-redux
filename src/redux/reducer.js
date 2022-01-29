import {ADD,DELETE,CHECK} from "./action-type"

const iniState = {
    tasks:[
        {name:'task1',isDone:true,id:1},
        {name:'task2',isDone:false,id:2},
        {name:'task3',isDone:false,id:3},
    ]
}

export const taskReducer = (state = iniState, action) => {
    switch (action.type) {
        case ADD: return {tasks : action.payload.map(task => task)}
        case DELETE: return {
            ...state,
            tasks:state.tasks.filter(task => task.id !== action.payload )
        }
        case CHECK: return {
            ...state,
            tasks:action.payload.map(task => task)
        }
        default: return state
    }
}