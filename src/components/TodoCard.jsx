import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import UpdateTodoList from './UpdateTodoList';

function TodoCard(props) {
    const DeleteTodo = async(id) =>{
        const BASE_URL = "http://localhost:4000";
        const response = await axios.delete(`${BASE_URL}/api/todo/${id}`);
        if(response.status === 200){
            toast.success("Todo Delete success");
        }
        else{
            toast.error("Quiz Not Delete");
        }
    }

    const [openUpdateTodo, setOpenUpdateTodo] = useState(false);

    const UpdateTodo = () => setOpenUpdateTodo(true);
    return (
        <>

            <ToastContainer/>
            <UpdateTodoList isOpen={openUpdateTodo} setIsOpen={setOpenUpdateTodo} _id={props._id} />
            <li key={props._id} className="w-full md:w-3/4">
                <div className="flex hover:bg-purple-100 border-2 w-full md:w-full lg:w-full rounded-lg px-4 py-3 md:py-1 flex-col md:flex-row md:justify-between">
                    <div className="flex flex-col pb-4 md:pb-0 md:flex-row md:gap-4 md:items-center">
                        <h3 className="font-semibold border-2 px-2 bg-black text-white rounded-lg">{props.title}</h3>
                        <p className="text-sm text-gray-600 font-semibold">{props.description}</p>
                    </div>

                    <div className="flex gap-2 md:gap-4 lg:gap-6 md:justify-center md:items-center">
                        <button onClick={()=>UpdateTodo(props._id)} className="bg-green-500 px-4 rounded-md text-white font-semibold hover:bg-green-700 md:h-8">Edit</button>
                        <button onClick={()=>DeleteTodo(props._id)} className="bg-red-500 px-4 md:px-6 lg:px-8 rounded-md text-white font-semibold hover:bg-red-700 md:h-8">Delete</button>
                    </div>
                </div>
            </li>
        </>
    );
}

export default TodoCard;