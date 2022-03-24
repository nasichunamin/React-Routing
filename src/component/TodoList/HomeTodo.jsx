import React, { useState } from 'react';
import AddTodo from './AddTodo';
import ListTodo from './ListTodo';

const HomeTodo = () =>
{
    const [ data, setData ] = useState( [
        {
            id: 1,
            title: "Mengerjakan Exercise",
            completed: true
        },
        {
            id: 2,
            title: "Mengerjakan Assignment",
            completed: false
        },
    ] )
    const [ addVal, setaddTodoValue ] = useState( '' )

    const handleDelete = ( todo ) =>
    {
        const todos = data.filter( e =>
        {
            return e.id !== todo
        } )
        setData( todos )
    }
    const handleComplete = ( todo ) =>
    {
        const todos = [ ...data ]
        todos.map( ( e ) =>
        {
            if ( e.id === todo.id )
            {
                e.completed = !e.completed
            }
            return e
        } )
        setData( [ ...todos ] )
    }


    const addNewTodo = ( title ) =>
    {
        if ( title )
        {
            setData( [ ...data, { id: Math.random(), title, completed: false } ] )
        } else
        {
            alert( 'Isi Inputan terlebih dahulu sebelum mensubmit!' )
        }
    }

    return (
        <div>
            <table className="table">
                <tbody>
                    <tr>
                        <td colSpan="4" className="text-center">
                            <AddTodo AddTodo={ addNewTodo } TodoValue={ addVal } />
                        </td>
                    </tr>
                    { data.map( ( todo, index ) => (
                        <tr key={ todo.id }>
                            <ListTodo key={ todo.id } todo={ todo } todoDelete={ handleDelete } todoComplete={ handleComplete } />
                        </tr>
                    ) ) }

                </tbody>
            </table>
        </div>
    );
}

export default HomeTodo;