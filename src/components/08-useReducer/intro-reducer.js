const initialState = [{
    id: 1,
    todo: 'Comprar',
    done: false
}]

const todoReducer = (state = initialState, action) => {

    if(action?.type === 'agregar'){
        return [...state, action.payload]
    }

    return state;
}

// Inicialización

let TODOs = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Comprar carbon',
    done: false
}

// Agregación

const agregarTodoAction = {
    type: 'agregar',
    payload: newTodo
}

TODOs = todoReducer(TODOs, agregarTodoAction)

console.log(TODOs)