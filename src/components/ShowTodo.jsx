import { useState, useEffect } from "react";
import CreateTodoList from "./CreateTodList";
import TodoCard from "./TodoCard";
import axios from 'axios';

export function ShowTodoList() {
    const [todo, setTodo] = useState();
    const BASE_URL = "https://todobackend-hcad.onrender.com";
    const [spiner, setSpiner] = useState(true);
    useEffect(() => {
        const fun = async () => {
            const response = await axios.get(`${BASE_URL}/api/todo`);
            if(response.status === 200){

                setTodo(response.data.todo);
                setSpiner(false);
            }
        };
        fun();
    });

    const [openTodoForm, setOpenTodoForm] = useState(false);
    const CreateTodo = () => setOpenTodoForm(true);
    return (
        <>
            <CreateTodoList isOpen={openTodoForm} setIsOpen={setOpenTodoForm} />
            <div>
                <nav className="bg-purple-500 py-2 flex justify-evenly w-full">
                    <div className="">
                        <h1 className="font-bold text-yellow-300 text-xl">Tasky</h1>
                    </div>
                    <div onClick={CreateTodo} className="flex gap-1 justify-center items-center px-5 lg:px-8 bg-green-500 text-white rounded-lg py-1 cursor-pointer hover:bg-green-700">
                        <span className="font-semibold text-lg">Add</span>
                    </div>
                </nav>
                
                {
                    spiner ? (
                        <>
                            <div className="w-full h-full flex justify-center items-center py-20">
                                <div className="h-20 w-20 rounded-full px-2 bg-black flex justify-center items-center">
                                    <div className="lds-hourglass text-black"></div>
                                </div>
                            </div>
                        </>
                    ) : ( 
                        <>

                            <div className="w-full flex justify-center items-center">
                                <div className="w-full px-4">
                                    <h1 className="py-5 font-bold text-orange-500 text-2xl text-center">TODO</h1>
                                    <ul className="w-full flex flex-col gap-1 justify-center items-center">
                                        {
                                            todo ? (
                                                <>
                                                    {todo.map((data) => (
                                                        <TodoCard {...data} />
                                                    ))}
                                                </>
                                            ) : (
                                                <>
                                                    <div>
                                                        <h1 className="text-xl font-bold">Add New Work </h1>
                                                    </div>
                                                </>
                                            )
                                        }
                                    </ul>
                                </div>
                            </div>
                        </>
                    )
                }
                
            </div>
        </>
    );
}