import { Button, Tooltip } from '@material-tailwind/react'
import React from 'react'
import { TiInputChecked, TiEdit, TiDeleteOutline } from 'react-icons/ti'

export const Todo = ({ todo, index, todos, setTodos, setEdit, onGetIdForEdit }) => {
    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }
    const complated = (id) => {
        const updateTodo = todos.map(todo => todo.id === id ? { ...todo, status: true } : todo)
        setTodos(updateTodo)
    }

    return (
        <div className='flex justify-between px-4 py-2 my-2 bg-[#434243] rounded'>
            <div className={`flex gap-2 ${todo.status ? 'text-gray-500 line-through' : 'text-white'} items-center`}>
                <p className='border w-7 rounded-full'>{index + 1}</p>
                <p className='w-fit text-start'>{todo.title}</p>
            </div>
            <div className='flex gap-2 text-2xl items-center'>
                <Tooltip content={`${todo.status ? 'Выполнено' : 'Выполнить'}`}>
                    <Button className='bg-transparent p-0'>
                        <TiInputChecked onClick={() => complated(todo.id)} className='text-green-600 hover:text-yellow-500 text-3xl cursor-pointer' />
                    </Button>
                </Tooltip>
                <Tooltip content="Изменить">
                    <Button className='bg-transparent p-0'>
                        {!todo.status && <TiEdit onClick={() => { setEdit(true); onGetIdForEdit(todo.id) }} className='text-green-600 hover:text-orange-600 cursor-pointer text-2xl' />}
                    </Button>
                </Tooltip>
                <Tooltip content="Удалить">
                    <Button className='bg-transparent p-0'>
                        <TiDeleteOutline onClick={() => deleteTodo(todo.id)} className='text-green-600 hover:text-red-500 cursor-pointer text-2xl' />
                    </Button>
                </Tooltip>

            </div>
        </div>
    )
}
