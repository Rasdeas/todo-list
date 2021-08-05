import { useState } from 'react'
import styles from '../styles/todo.module.css'
import { FaTrashAlt } from 'react-icons/fa'
import { SiAddthis } from 'react-icons/si'

function Button() {
    const [list, setTodoList] = useState([{}]);

    function addBox() {
        const valueTodo = document.getElementById('taskname').value;
        setTodoList([ ...list, { value: valueTodo, state: true} ])
    }

    function delBox(selected) {
        const filterArray = list.filter((task, index) => {
            if( selected == index ) {
                return false
            } else {
                return true
            }
        })
        
        setTodoList(filterArray)
   }

    return (
        <>           
            <div className={styles.input_container}>
                <input 
                    type='text'
                    id="taskname" 
                    placeholder="Digite a tarefa" 
                    className={styles.box}>
                </input>
                <div className={styles.button_space}>
                    <SiAddthis onClick={addBox} className={styles.button}/>
                </div>
            </div>
            <div className={styles.task_container}>           
                {
                    list.map( (task, index) => {
                        return (
                            <>
                                {
                                    task.state == true && 
                                    <div className={styles.task}>
                                        <span className={styles.task_value} id={index}>{task.value}</span>
                                        <div className={styles.task_situation}>
                                            <input type="checkbox" />
                                            <FaTrashAlt  className={styles.trash} onClick={() => { delBox(index) }}/>
                                        </div> 
                                    </div>
                                }   
                            </>
                       )
                            
                    })
                }
            </div>
        </>
    )
}

function Home() {
    return (
        <div className={styles.container}>
            <h1 className={styles.titulo}>To-do List</h1>
            <main>
                <Button />
            </main>
        </div> 
    )
}

export default Home