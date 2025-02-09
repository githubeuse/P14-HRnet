import { createSlice } from "@reduxjs/toolkit";

// Création d'un slice pour gérer l'état des employés
const employeesSlice = createSlice({
    name: 'employees', 
    initialState: [],
    reducers: {
        // Action pour ajouter un employé à la liste
        addEmployee: (state, action) => {
            state.push(action.payload);
        },
        // Action pour effacer tous les employés de la liste
        clearEmployees: () => {
            return [];
        }
    },
});

export const { addEmployee, clearEmployees} = employeesSlice.actions;
export default employeesSlice.reducer;