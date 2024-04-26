
import { useState } from 'react';


export function AddTodo({ data, title, editing, cancel, save, deleteTodo, id, editTodo, doneTodo, isDone }) {
  const [titles, setTitles] = useState(title);
  const [datas, setDatas] = useState(data);

  const handleSave = () => {
    save({ title: titles, data: datas, id: id });
  };

  const handleDelete = () => {
    deleteTodo(id);
  };

  const handleCancel = () => {
    cancel(id);
  };

  const handleEdit = () => {
    editTodo(id);
  };

  const handleDone = () => {
    doneTodo(id);
  };

  return (
    <div className="todo d-flex justify-content-center align-items-center w-75 mt-5">
      <div className={isDone ? 'card border-success w-100' : 'card w-100'}>
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <div className="d-flex ms-4 justify-content-center flex-column align-items-center pe-5 border-end">
              {!editing && <h5 className={isDone ? 'card-title text-success' : 'card-title'}>{title}</h5>}
              {editing && <input type="text" className="form-control" defaultValue={title} onChange={(e) => setTitles(e.target.value)} />}
            </div>
            <div className="d-flex flex-column justify-content-center p-3">
              {editing && <textarea className="form-control w-100" defaultValue={data} onChange={(e) => setDatas(e.target.value)} />}
              {!editing && <p className="card-text text-center">{data}</p>}
            </div>
            {!editing && <div className="form-check mx-3 d-flex flex-column justify-content-center align-items-center ps-5 border-start">
               <svg onClick={handleDelete} className="mt-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                  <path fill="#dc3545" d="M9.036 7.976a.75.75 0 0 0-1.06 1.06L10.939 12l-2.963 2.963a.75.75 0 1 0 1.06 1.06L12 13.06l2.963 2.964a.75.75 0 0 0 1.061-1.06L13.061 12l2.963-2.964a.75.75 0 1 0-1.06-1.06L12 10.939 9.036 7.976Z"/>
                  <path fill="#dc3545" d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1ZM2.5 12a9.5 9.5 0 0 0 9.5 9.5 9.5 9.5 0 0 0 9.5-9.5A9.5 9.5 0 0 0 12 2.5 9.5 9.5 0 0 0 2.5 12Z"/>
                </svg>
                <svg onClick={handleDone} className="mt-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                  <path fill="#28a745" d="M17.28 9.28a.75.75 0 0 0-1.06-1.06l-5.97 5.97-2.47-2.47a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l6.5-6.5Z"/>
                  <path fill="#28a745" d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1ZM2.5 12a9.5 9.5 0 0 0 9.5 9.5 9.5 9.5 0 0 0 9.5-9.5A9.5 9.5 0 0 0 12 2.5 9.5 9.5 0 0 0 2.5 12Z"/>
                </svg>
                <svg onClick={handleEdit} className="mt-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                  <path fill="#007bff" d="M17.263 2.177a1.75 1.75 0 0 1 2.474 0l2.586 2.586a1.75 1.75 0 0 1 0 2.474L19.53 10.03l-.012.013L8.69 20.378a1.753 1.753 0 0 1-.699.409l-5.523 1.68a.748.748 0 0 1-.747-.188.748.748 0 0 1-.188-.747l1.673-5.5a1.75 1.75 0 0 1 .466-.756L14.476 4.963ZM4.708 16.361a.26.26 0 0 0-.067.108l-1.264 4.154 4.177-1.271a.253.253 0 0 0 .1-.059l10.273-9.806-2.94-2.939-10.279 9.813ZM19 8.44l2.263-2.262a.25.25 0 0 0 0-.354l-2.586-2.586a.25.25 0 0 0-.354 0L16.061 5.5Z"/>
                </svg>
              </div>}
            {editing && (
              <div className="form-check mx-3 d-flex flex-column justify-content-center align-items-center ps-5 border-start">
                <button onClick={handleSave} type="button" className="btn btn-primary">
                  Enregistrer
                </button>
                <button onClick={handleCancel} type="button" className="btn btn-danger mt-2">
                  Annuler
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}