export function Header ({onSubmitAdd, suppDone, setSearchTerm}) { //? fonction qui renvoie un header avec un bouton qui permet d'ajouter un todo et un input qui permet de chercher un todo
    return (
        <header className="w-full">
            <div className="w-full flex justify-between ">
                <div className="flex gap-6 items-center">
                    <h1 className="font-mono font-bold text-2xl">TO-DO LIST</h1>
                    <svg onClick={onSubmitAdd} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 bg-red-400 rounded-full text-zinc-100">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </div>
                
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 ">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>

            </div>
        </header>
    )
}