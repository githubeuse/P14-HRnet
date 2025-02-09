import { configureStore } from "@reduxjs/toolkit";
import employeesReducer from './features/employees/employeesSlice';
import localStorageMiddleware from "./middleware/localStorageMiddleware";

/**
 * Fonction pour charger l'état initial des employés depuis le localStorage.
 * @returns {object|undefined} L'état des employés ou undefined si non disponible.
 */

const loadState = () => {
    try {
        const serializedState = localStorage.getItem('employees');
        if (serializedState === null) {
            return undefined;
        }
        const state = JSON.parse(serializedState);
        return state;
    } catch {
        return undefined;
    }
}

// Précharger l'état initial avec les employés chargés depuis le localStorage.

const preloadedState = {
    employees: loadState() || [],
};

// Configuration du store Redux avec le reducer des employés, le middleware pour le localStorage et l'état préchargé.

const store = configureStore({
    reducer: {
        employees: employeesReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(localStorageMiddleware),
    preloadedState,
});

export default store;