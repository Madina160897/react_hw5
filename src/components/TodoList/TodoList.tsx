import React, { useEffect, useState } from 'react'
import apiClient from '../../common/api'
import { ITodo} from '../../common/models'
import UserList from '../UserList/UserList'


const TodoList = () => {

    const [todos, setTodos] = useState<ITodo[]>([])
    const[isLoading, setIsLoading] = useState(true)

    const getTodos = async () => {
        try{
            const res = await apiClient.get<ITodo[]>('/todos')
            setTodos(res.data)
        } catch (e) {
            console.log({e});
            
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getTodos();
    }, [])


    return (
        <div className="dis">

            {
                todos.map((todo) =>
                    <UserList key={todo.id} {...todo}/>)
            }


        </div>
    )
}

export default TodoList;
