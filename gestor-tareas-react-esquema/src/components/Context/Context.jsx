import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; 

export const taskContext= createContext()

const tks=[
  {id: uuidv4(), title: 'Tarea ejemplo 1', descripcion: 'Descripcion Pendiente', status: false},
  {id: uuidv4(), title: 'Tarea ejemplo 2', descripcion: 'Descripcion En Proceso', status: true},
  {id: uuidv4(), title: 'Tarea ejemplo 3', descripcion: 'Descripcion Completada', status: true},
  {id: uuidv4(), title: 'Tarea ejemplo 4', descripcion: 'Descripcion Pendiente', status: false},
  {id: uuidv4(), title: 'Tarea ejemplo 5', descripcion: 'Descripcion En Proceso', status: true}
]


export const  TasksProvider=({children})=>{

  const[tasks, setTasks]= useState(tks)
  const [filteredTasks, setFilteredTasks]= useState(tks)
  const [pedingTasks, setPedingTasks]= useState(0)
  const [doneTasks, setDoneTasks]= useState(0)

  //Funcion para actualizar el estado de una tarea
  const updateTaskStatus = (taskId, newStatus) => {
    setTasks(preTasks => preTasks.map(task => task.id === taskId ? {...task, status: newStatus} : task));
  }

  return(
    <taskContext.Provider value={{
    tasks,
    setTasks,
    filteredTasks,
    setFilteredTasks,
    updateTaskStatus,
    pedingTasks,
    setPedingTasks,
    doneTasks,
    setDoneTasks
    
    }}>
      {children}   
    </taskContext.Provider>
  )
}








