import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';


export default function UpdateTodoList({ isOpen, setIsOpen, _id }) {
    const BASE_URL = "http://localhost:4000";
    const [data, setData] = useState({ title: "", description: "" });

    function handleChange(e) {
        setData((data) => ({ ...data, [e.target.name]: e.target.value }));
    }

    function closeModal() {
        setIsOpen(false)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const todo = {
            title: data.title,
            description: data.description,
        };

        console.log({ todo });
        if (todo.title === '') {
            toast.error("Please Enter Title");
        }
        else if (todo.description === '') {
            toast.error("Please Enter Description");
        }
        else {
            const response = await axios.put(`${BASE_URL}/api/todo/${_id}`, todo);
            if (response.status === 200) {
                toast.success("Todo List Update Success");
                setData({ title: "", description: "" });
                closeModal();
            }
            else {
                toast.error("Todo List Not Updated");
                console.log(response.message);
            }
        }
    }

    return (
        <>
            <ToastContainer />
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        Create Todo List
                                    </Dialog.Title>
                                    <div className="mt-2 w-full">
                                        <form className='flex flex-col gap-2 w-full'>
                                            <div className='w-full'>
                                                <input
                                                    type="text"
                                                    name="title"
                                                    value={data.title}
                                                    onChange={handleChange}
                                                    placeholder='Enter Title'
                                                    className='px-4 py-2 outline-none border-2 border-blue-500 rounded-md w-full'
                                                />
                                            </div>
                                            <div className='w-full'>
                                                <input
                                                    type="text"
                                                    name="description"
                                                    value={data.description}
                                                    onChange={handleChange}
                                                    placeholder='Enter Title'
                                                    className='px-4 py-2 outline-none border-2 border-blue-500 rounded-md w-full'
                                                />
                                            </div>
                                            <div className='py-2'>
                                                <button onClick={handleSubmit} className="px-4 md:px-6 lg:px-8 bg-green-500 hover:bg-green-700 py-1 lg:py-2 rounded-lg text-white ">
                                                    Update
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
