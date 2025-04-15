import { useRef } from "react";

import classes from './NewTodo.module.css'
// impostiamo il valore delle props come una arrow function in cui però dobbiamo specificare sia i valori in ingresso 
// sia cosa ritorna, dato che in questo caso non ritorna nulla inseriamo void
const NewTodo: React.FC<{addNewTodo: (text: string)=> void}> = (props) => {
    // con la notazione <HTMLInputElement> andiamo a specificare a useRef di che tipo sarà il valore alla quale assegneremo il ref
    // ed inoltre dobbiamo dare un valore iniziale ed in questo caso sarà null
    const todoTextInputRef = useRef<HTMLInputElement>(null)

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        // il '?' dopo current viene messo in automatico da typescript 
        // che permette di controllare se è stata già stabilita una connessione con l'input
        // e nel caso ancora non fosse stabilita assegna il valore null\undefined alla constante
        // const enteredText = todoTextInputRef.current?.value;

        // mentre se lato sviluppatore si è sicuri al 100% che in quel punto la connessone è stata stabilita 
        // e quindi si è sicuri al 100% che non sarà mai null
        // si può usare il simbolo '!' 
        const enteredText = todoTextInputRef.current!.value;

        if (enteredText.trim().length === 0) {
            // throw an error
            return;
        }
        
        props.addNewTodo(enteredText);
    }

    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <label htmlFor="text">Todo text</label>
            <input type="text" id="text" ref={todoTextInputRef} />
            <button>Add Todo</button>
        </form>
    )
}

export default NewTodo;
// prova modifica pc casa