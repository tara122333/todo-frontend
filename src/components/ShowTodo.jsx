import { useState, useEffect } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';

function TodoCard({ data }) {
    const { _id, title, description } = data;
    return (
        <li key={_id} className="w-full">
            <div className="bg-yellow-300 flex border-2 w-full md:w-full lg:w-full rounded-lg px-4 py-3 flex-col">
                <div className="flex flex-col pb-4">
                    <h3 className="font-semibold lg:text-xl">{title}</h3>
                    <p className="">{description}</p>
                </div>

                <div className="flex gap-2 md:gap-4 lg:gap-6">
                    <button className="bg-green-500 px-4 py-1 rounded-md text-white font-semibold hover:bg-green-700">Edit</button>
                    <button className="bg-red-500 px-4 md:px-6 lg:px-8 md:py-1 rounded-md text-white font-semibold hover:bg-red-700">Delete</button>
                </div>
            </div>
        </li>
    );
}

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

    console.log(todo);
    return (
    <>  
        <nav className="bg-purple-500 py-2 flex justify-evenly w-full">
            <div className="">
                <h1 className="font-bold text-yellow-300 text-xl">Tasky</h1>
            </div>
           <Link to={'/create-todo'}>
            <div className="flex gap-1 justify-center items-center px-5 lg:px-8 bg-green-500 text-white rounded-lg py-1 cursor-pointer hover:bg-green-700">
                    <h1 className="font-bold text-xl">+</h1>
                    <span className="font-semibold text-lg">Add</span>
                </div>
           </Link>
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