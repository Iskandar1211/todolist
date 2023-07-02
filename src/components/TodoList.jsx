import { Button, Input } from '@material-tailwind/react'
import React, { useState } from 'react'
import { Todo } from './Todo'

export const TodoList = () => {
    const [todo, setTodo] = useState({ id: crypto.randomUUID(), title: '', status: false })
    const [todos, setTodos] = useState([]);
    const [edit, setEdit] = useState(false);

    const [editTodo, setEditTodo] = useState('');
    const onAddTask = () => {
        if (todo.title !== '') {
            setTodos([...todos, todo])
            setTodo({ id: crypto.randomUUID(), title: '', status: false })
        }
    }
    const [id, setId] = useState('');
    const onGetIdForEdit = (id) => setId(id);
    const onEdit = () => {
        const updateTodo = todos.map(todo => todo.id === id ? { ...todo, title: editTodo } : todo)
        setTodos(updateTodo)
        setEditTodo('')
        setEdit(false)
        console.log(updateTodo)
    }
    return (
        <div className='px-10 h-[100vh] bg-[#242424]'>
            <div className='text-2xl text-white py-2'>Todo-list React</div>
            <div className='flex gap-2 items-center '>
                <Input color='white' onChange={(e) => { !edit ? setTodo({ ...todo, title: e.target.value }) : setEditTodo(e.target.value) }} value={!edit ? todo.title : editTodo} className=' focus:border-green-500' type='text' label='Задача' />
                {!edit ? <Button className='flex justify-center' onClick={onAddTask} color='green'>Добавить</Button> :
                    (<div className='flex gap-2'>
                        <Button onClick={onEdit} color='orange'>Схранить</Button>
                        <Button onClick={() => setEdit(false)} color='blue-gray'>Отменить</Button>
                    </div>)}
            </div>
            <div>
                <p className='text-white text-2xl py-4'>{todos.length === 0 ? 'Список задач пуст' : ''}</p>
                {todos.map((todo, index) => <Todo onGetIdForEdit={onGetIdForEdit} setEdit={setEdit} todos={todos} setTodos={setTodos} index={index} key={todo.id} todo={todo} />)}
            </div>
        </div>
    )
}
