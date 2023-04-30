import { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import CreateTodoList from "./CreateTodList";
import TodoCard from "./TodoCard";
import axios from 'axios';

export function ShowTodoList() {
    const [todo, setTodo] = useState();
    const BASE_URL = "http://localhost:4000";
    useEffect(() => {
        const fun = async() =>{
            const response = await axios.get(`${BASE_URL}/api/todo`);
            setTodo(response.data.todo);
        };
        fun();
    }, []);

    const [openTodoForm, setOpenTodoForm] = useState(false);
    const CreateTodo = () => setOpenTodoForm(true);
    return (
    <>  <CreateTodoList isOpen={openTodoForm} setIsOpen={setOpenTodoForm}/>
        <nav className="bg-purple-500 py-2 flex justify-evenly w-full">
            <div className="">
                <h1 className="font-bold text-yellow-300 text-xl">Tasky</h1>
            </div>
            <div onClick={CreateTodo} className="flex gap-1 justify-center items-center px-5 lg:px-8 bg-green-500 text-white rounded-lg py-1 cursor-pointer hover:bg-green-700">
                    <h1 className="font-bold text-xl">+</h1>
                    <span className="font-semibold text-lg">Add</span>
                </div>
        </nav>
        <section className="w-full flex justify-center items-center">
            <section className="w-full md:w-auto px-4">
                <h1 className="py-5 font-bold text-orange-500 text-2xl">TODO</h1>
                <ul className="w-full md:flex md:flex-wrap gap-5">
                    {
                    todo && todo.map((data) => (
                        <TodoCard data={data} />
                    ))
                    }
                </ul>
            </section>
        </section>
    </>
    );
}