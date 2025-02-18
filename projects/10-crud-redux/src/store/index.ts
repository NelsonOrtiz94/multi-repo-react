import { configureStore, type Middleware } from "@reduxjs/toolkit";
import { toast } from 'sonner';
import usersReducer, { rollbackUser } from "./users/slice"; // Importa el reducer de usuarios

// Middleware para persistencia en localStorage
const persistanceLocalStorageMiddleware: Middleware = (store) => (next) => (action) => {
    next(action); // Deja que la acción fluya primero
    localStorage.setItem("__redux__state__", JSON.stringify(store.getState()));
};

// Middleware para sincronización con la base de datos (con manejo de errores mejorado)
const syncWithDatabaseMiddleware: Middleware = (store) => (next) => (action) => {
    const { type, payload } = action;
    const previousState = store.getState() as RootState; // Obtén el estado anterior
    next(action); // Deja que la acción continúe

    if (type === 'users/deleteUserById') {
        const userIdToRemove = payload;
        const userToRemove = previousState.users.find(user => user.id === userIdToRemove);

        fetch(`https://jsonplaceholder.typicode.com/users/${userIdToRemove}`, {
            method: 'DELETE'
        })
            .then(res => {
                if (!res.ok) { // Verifica si la respuesta no es exitosa (códigos 2xx)
                    return res.json().then(err => { throw new Error(err.message) }); // Lanza un error con el mensaje del servidor
                }
                // Si la eliminación es exitosa, puedes mostrar un mensaje (opcional)
                // toast.success(`Usuario ${userIdToRemove} eliminado correctamente`); 
            })
            .catch(err => {
                console.error(`Error deleting user ${userIdToRemove}:`, err); // Usa console.error para errores
                toast.error(`Error deleting user ${userIdToRemove}: ${err.message}`); // Muestra el error al usuario
                if (userToRemove) {
                    store.dispatch(rollbackUser(userToRemove)); // Deshace el cambio en el store
                }
            });
    }
};

// Configuración del store con los middleware y el reducer
export const store = configureStore({
    reducer: {
        users: usersReducer, // Asigna el reducer de usuarios bajo la clave 'users'
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
        persistanceLocalStorageMiddleware, 
        syncWithDatabaseMiddleware
    ), // Usa getDefaultMiddleware().concat() para añadir middleware
});

// Tipos para facilitar el uso del store en componentes
export type RootState = ReturnType<typeof store.getState>; // Tipo para el estado global
export type AppDispatch = typeof store.dispatch; // Tipo para el dispatch