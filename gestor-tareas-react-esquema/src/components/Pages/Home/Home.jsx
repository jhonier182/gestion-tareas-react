// Start of Selection
import { Header } from "../../Layouts/Header/Header";
import { Main } from "../../Layouts/Main/Main";
import { ContainerTasks } from "../../Layouts/ContainerTasks/ContainerTasks";
import { ItemTask } from "../../ItemTask/ItemTask";
import { useContext } from "react";
import { taskContext } from "../../Context/Context";
import { NewTask } from "../../NewTask/NewTask";
import { InfoTasks } from "../../Layouts/InfoTasks/InfoTasks";
import { FilterTasks } from "../../FilterTasks/FilterTasks";

export const Home = () => {

  const context = useContext(taskContext)

  return (
    <>
     <Header>
       <h1>GESTOR DE TAREAS</h1>
      
     
       
     </Header>
     
     <Main >
     <InfoTasks/>
       <NewTask/>
        <FilterTasks/>
       <ContainerTasks >
       {context.filteredTasks.map(task => (
            <ItemTask 
              key={task.id} 
              idTask={task.id} 
              content={task.description} 
              titleTask={task.title} 
            />
          ))}
       </ContainerTasks>
     </Main>
    </>
  )
}
