// Importa los módulos necesarios de Firebase
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set, update, remove, get } from "firebase/database"; // Agrega get a las importaciones

// Obtiene la instancia de autenticación y la base de datos
const auth = getAuth();
const db = getDatabase();

// Función para crear un usuario
export const createUser = async (email, password, name, lastName) => {
    try {
        const { user } = await auth.createUserWithEmailAndPassword(email, password);
        await set(ref(db, `users/${user.uid}`), {
            email: email,
            id: user.uid,
            name: name,
            lastName: lastName
        });
        return user;
    } catch (error) {
        console.error("Error al crear el usuario:", error);
        throw error;
    }
};



// Función para obtener la información de un usuario
function getUser(uid) {
    return ref(db, `users/${uid}`);
}

// Función para actualizar la información de un usuario
async function updateUser(uid, updates) {
    try {
        // Actualiza la información del usuario en la base de datos
        await update(ref(db, `users/${uid}`), updates);
    } catch (error) {
        console.error("Error al actualizar el usuario:", error);
        throw error; // Reenvía el error para que pueda ser manejado por el código que llama a esta función
    }
}

// Función para eliminar un usuario
async function deleteUser(uid) {
    try {
        // Elimina la información del usuario de la base de datos
        await remove(ref(db, `users/${uid}`));
    } catch (error) {
        console.error("Error al eliminar el usuario:", error);
        throw error; // Reenvía el error para que pueda ser manejado por el código que llama a esta función
    }
}

// Función para obtener todos los usuarios
const getUsers = async () => {
    try {
        const usersRef = ref(db, 'users');
        const snapshot = await get(usersRef);
        const users = [];

        if (snapshot.exists()) {
            snapshot.forEach((childSnapshot) => {
                users.push(childSnapshot.val());
            });
        }

        return users;
    } catch (error) {
        console.error("Error al obtener usuarios:", error);
        return [];
    }
};

// Función para desactivar un usuario
async function deactivateUser(uid) {
    try {
        // Actualiza el campo 'active' del usuario en la base de datos a false
        await update(ref(db, `users/${uid}`), { active: false });
    } catch (error) {
        console.error("Error al desactivar el usuario:", error);
        throw error; // Reenvía el error para que pueda ser manejado por el código que llama a esta función
    }
}

// Exporta todas las funciones necesarias
import { auth, db, ref, set, createUser, getUser, updateUser, deleteUser, getUsers, deactivateUser } from './firebaseFunctions';
