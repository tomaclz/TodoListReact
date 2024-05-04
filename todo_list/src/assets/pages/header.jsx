export function Header ({onSubmitAdd, suppDone, setSearchTerm}) { //? fonction qui renvoie un header avec un bouton qui permet d'ajouter un todo et un input qui permet de chercher un todo
    return (
        <header className="w-50">
            <nav className="navbar bg-body-tertiary p-3 rounded-4 border border-2">
            <div className="container-fluid">
                <button onClick={onSubmitAdd} type="button" className="btn btn-primary btn-lg">Ajouter une Todo</button>
                <form className="d-flex" role="search">
                    <input onChange={(e) => setSearchTerm(e.target.value)} className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                </form>
                <button onClick={suppDone} type="button" className="btn btn-primary btn-danger btn-lg">Supprimer les Todos</button>
            </div>
            </nav>
        </header>
    )
}