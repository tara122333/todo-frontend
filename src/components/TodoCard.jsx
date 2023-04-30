import React from 'react'
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

export default TodoCard;