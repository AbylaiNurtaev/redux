import { useCallback, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addList, fetchToDos, updateToDo } from "../../store/ToDoSlice"

 
import s from './ToDo.module.sass'

function ToDo() {
    const dispatch = useDispatch()
    const { todoList, status, error } = useSelector((state) => state.ToDo)

    const [nameToDo, setNameToDo] = useState('')

    const handleChangeCompleting = useCallback((id) => {
        dispatch(updateToDo(id));
    }, [dispatch]);

    const handleChangeName = useCallback((e) => {
        setNameToDo(e.target.value);
    }, []);

    const createNewToDo = () => {
        dispatch(addList({
            id: todoList.length+1,
            completed: false,
            title: nameToDo
        }))
    }

    

    useEffect(() => {
        dispatch(fetchToDos())
    }, [dispatch])

    return (
        <div className={s.container}>

            <div className={s.createBlock}>
                <input type="text" placeholder="ToDo.." onChange={(e) => handleChangeName(e)}/>
                <button onClick={createNewToDo}>Create ToDo</button>
            </div>
            {
                status === 'loading' ? <p>Loading...</p> : todoList.map((elem, index) => {
                    return (
                        <div key={index} className={elem.completed == true ? s.completedBlock : s.block} onClick={() => handleChangeCompleting(elem.id-1)}>
                            <p className={s.toDoId}>{elem.id}</p>
                            <input className={s.toDoInput} type="checkbox" checked={elem.completed} onClick={(e) => e.stopPropagation()} onChange={(e) => {handleChangeCompleting(elem.id-1);}}/>
                            <p className={s.toDoText}>{elem.title}</p>
                        </div>
                    )
                })
            }
            {
                error ? <p>error</p> : null
            }
        </div>
    )
}

export default ToDo

