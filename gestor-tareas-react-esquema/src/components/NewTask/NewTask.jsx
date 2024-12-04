import { v4 as uuidv4 } from 'uuid';
import './NewTask.css'
import { useContext,useRef,useState } from 'react';
import { taskContext } from '../Context/Context';


export const NewTask = () => {
    
   const context = useContext(taskContext)

   const[titleTask, setTitleTask]= useState('');
   const[descriptionTask, setDescriptionTask]= useState('');

   const txtTitle =useRef('');
   const txtDescription = useRef('')

   //capturar el valor de los inputs
   const handleTitleTask =(event)=>setTitleTask(event.target.value)
   const handleDescriptionTask =(event)=>setDescriptionTask(event.target.value)


   const handleCreateTask =(event)=>{
     event.preventDefault()
     const newTask ={
       id: uuidv4(), 
       title: titleTask,
       description: descriptionTask, 
       status: false
     }
     
     
     context.setTasks([...context.tasks, newTask])
     context.setFilteredTasks([...context.tasks, newTask])

     // Limpiar los estados y campos

     txtTitle.current.value = ''
     txtDescription.current.value = ''
   }

  return (
    <form className='frm-task'>
      <fieldset >
        <label>Título de la tarea:</label>
        <input ref={txtTitle} onChange={handleTitleTask} id='txt-title' placeholder='Ej: Aseo ambiente' type='text'/>
      </fieldset>
    
      <fieldset>
        <label>Descripción:</label>
        <input ref={txtDescription} onChange={handleDescriptionTask} id='txt-description' placeholder='Ej: Realizar aseo ambiente' type='text' maxLength={100}/>
      </fieldset>
      <button onClick={handleCreateTask} className='btn-new-task'>Crea nueva Tarea</button>
    </form>
  )
}
