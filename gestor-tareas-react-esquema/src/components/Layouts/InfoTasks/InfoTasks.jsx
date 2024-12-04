import { useContext,useEffect} from 'react'
import './infoTasks.css'
import { taskContext } from '../../Context/Context'

export const InfoTasks = () => {

  const context = useContext(taskContext)

  // Verificar si context.task está definido
  useEffect(() => {
      let pending = context.tasks.filter(tasks => tasks.status === false)
      let resolve = context.tasks.filter(tasks => tasks.status === true)

      context.setPedingTasks(pending.length)
      context.setDoneTasks(resolve.length)
    
  }, [context.tasks]) //<= esto es un arreglo de dependencias

  return(
    <>    
    <h2 className='info-tasks '>Usted tiene  <span className='task-pending'>{context.pedingTasks}</span> Pendientes y <span className='task-done'>{context.doneTasks}</span> Terminadas</h2>
    <hr />
    </>
  )
} 
