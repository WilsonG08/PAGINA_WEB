import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/authContext';
import { getDatabase, ref, onValue, off, push, remove } from 'firebase/database';
import { getAuth, createUserWithEmailAndPassword, deleteUser as deleteAuthUser } from 'firebase/auth';

const Home = () => {
    const { currentUser } = useAuth();
    const [users, setUsers] = useState([]);
    const [newUserEmail, setNewUserEmail] = useState('');
    const [newUserPassword, setNewUserPassword] = useState('');
    const [newUserName, setNewUserName] = useState('');
    const [newUserLastName, setNewUserLastName] = useState('');

    const auth = getAuth();


    useEffect(() => {
        const database = getDatabase();
        const usersRef = ref(database, 'users');
        onValue(usersRef, (snapshot) => {
            const usersData = snapshot.val();
            if (usersData) {
                const usersArray = Object.keys(usersData).map((key) => ({
                    id: key,
                    email: usersData[key].email,
                    name: usersData[key].name,
                    lastName: usersData[key].lastName,
                    isActive: usersData[key].isActive,
                }));
                setUsers(usersArray);
            }
        });
        return () => {
            off(usersRef);
        };
    }, []);

    const handleNewUserSubmit = async (e) => {
        e.preventDefault();

        try {
            const auth = getAuth();
            const { user } = await createUserWithEmailAndPassword(auth, newUserEmail, newUserPassword);

            if (user) {
                const database = getDatabase();
                const usersRef = ref(database, 'users');
                push(usersRef, {
                    email: newUserEmail,
                    name: newUserName,
                    lastName: newUserLastName,
                    isActive: true,
                });

                setNewUserEmail('');
                setNewUserPassword('');
                setNewUserName('');
                setNewUserLastName('');
            }
        } catch (error) {
            console.error('Error al registrar usuario:', error.message);
        }
    };

    const handleDeleteUser = async (userId) => {
        if (window.confirm('¿Estás seguro de que quieres eliminar este usuario?')) {
            if (window.confirm('¿Realmente seguro? Esta acción no se puede deshacer.')) {
                try {
                    // Eliminar usuario de Firebase Authentication
                    // Debes reemplazar `userAuthId` con el ID de autenticación real del usuario.
                    // Esto normalmente requeriría una llamada al backend donde se tiene acceso administrativo para eliminar usuarios.
                    const userAuthId = ''; // Necesitas obtener el UID real de Firebase Auth aquí.
                    await deleteAuthUser(auth, userAuthId);
        
                    // Eliminar usuario de Realtime Database
                    const database = getDatabase();
                    const usersRef = ref(database, `users/${userId}`);
                    await remove(usersRef);
        
                    console.log('Usuario eliminado correctamente de Auth y Database');
                } catch (error) {
                    console.error('Error al eliminar usuario:', error.message);
                }
            }
        }
    };
    
    

    return (
        <div className="pt-14">
            <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Last Name
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Status
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">{user.email}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">{user.name}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">{user.lastName}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span
                                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                            user.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                                        }`}
                                    >
                                        {user.isActive ? 'Active' : 'Inactive'}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <button onClick={() => handleDeleteUser(user.id)} className="text-red-500 hover:text-red-700">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="mt-8 max-w-md mx-auto">
                <h2 className="text-lg font-semibold">Agregar Nuevo Usuario</h2>
                <form onSubmit={handleNewUserSubmit} className="mt-4">
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
                        <input type="email" id="email" value={newUserEmail} onChange={(e) => setNewUserEmail(e.target.value)} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Contraseña:</label>
                        <input type="password" id="password" value={newUserPassword} onChange={(e) => setNewUserPassword(e.target.value)} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre:</label>
                        <input type="text" id="name" value={newUserName} onChange={(e) => setNewUserName(e.target.value)} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Apellido:</label>
                        <input type="text" id="lastName" value={newUserLastName} onChange={(e) => setNewUserLastName(e.target.value)} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                    <button type="submit" className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">Registrar Usuario</button>
                </form>
            </div>
        </div>
    );
};

export default Home;
