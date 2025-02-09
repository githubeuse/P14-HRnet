/**
 * Middleware Redux pour sauvegarder l'état des employés dans le localStorage
 * à chaque fois qu'une action est dispatchée.
 */

const localStorageMiddleware = store => next => action => {
    // Passer l'action au prochain middleware ou au reducer
    const result = next(action);

    // Récupérer l'état actuel du store
    const state = store.getState();
    // console.log('saving state to localSTorage', state.employees)
    
    // Sauvegarder l'état des employés dans le localStorage
    localStorage.setItem('employees', JSON.stringify(state.employees));
    return result;
}

export default localStorageMiddleware;