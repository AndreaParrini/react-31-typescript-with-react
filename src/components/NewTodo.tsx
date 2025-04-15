const NewTodo = ()=>{
    const submitHandler = (event: React.FormEvent) =>{
    }

    return (
        <form onSubmit={submitHandler}>
            <label htmlFor="text">Todo text</label>
            <input type="text" id="text" />
            <button>Add Todo</button>
        </form>
    )
}

export default NewTodo;
// prova modifica pc casa