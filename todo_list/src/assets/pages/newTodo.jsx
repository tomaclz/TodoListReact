
import { useState } from 'react';

export function NewTodo ({save, cancel}) { //? fonction qui renvoie une fenetre modale en absolute qui permet d'ajouter un todo
    const [titles, setTitles] = useState("");
    const [datas, setDatas] = useState("");

    const handleSave = () => {
        save({ title: titles, data: datas });
    }

    return (
    <div className="absolute w-80 h-auto bg-zinc-100 flex justify-center items-center top-6 left-1/3 rounded-xl shadow-xl flex-col">
        <div className="w-3/4 flex justify-start border-b-2 pb-3 pt-4 border-red-400">
            <h2 className="font-mono font-bold text-2xl">ADD TASK</h2>
        </div>
        <div className="w-3/4 flex justify-start flex-col gap-4 border-b-2 pb-3 pt-4 border-red-400">
            <input type="text" onChange={(e) => setTitles(e.target.value)} placeholder="Title" />
            <textarea onChange={(e) => setDatas(e.target.value)} placeholder="Description" />
        </div>
        <div className="w-3/4 flex justify-start pb-5 pt-4 ">
            <button className="bg-red-400 p-1 px-5 rounded-xl text-white text-sm font-medium" onClick={handleSave}>ADD TASK</button>
        </div>
    </div>
)
}