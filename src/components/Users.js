import React, { useState } from 'react';
import { auth, createUser, getUser, updateUser, deleteUser, getUsers, deactivateUser } from './firebaseFunctions';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate en lugar de useHistory
import '../sytles/UserPage.css';

function Users() {
    const [name, setName] = useState(''); // Agrega estado para el nombre
    const [lastName, setLastName] = useState(''); // Agrega estado para el apellido
    const [user, setUser] = useState(null);
    const [users, setUsers] = useState([]);
    const [uid, setUid] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [additionalData, setAdditionalData] = useState('');

    const navigate = useNavigate(); // Usa useNavigate en lugar de useHistory

    const handleCreateUser = async () => {
        if (name.length > 0 && lastName.length > 0 && email.length > 0 && password.length > 0) {
            try {
                const { user } = await auth.createUserWithEmailAndPassword(email, password);
                await set(ref(db, `users/${user.uid}`), {
                    email: email,
                    id: user.uid,
                    name: name,
                    lastName: lastName
                });
                console.log("Usuario registrado");
                // Aquí puedes hacer cualquier otra cosa que necesites después de registrar al usuario
                // Por ejemplo, puedes navegar a otra página
            } catch (error) {
                console.error("Error al registrar usuario:", error);
            }
        } else {
            console.log("Ingrese los campos requeridos");
        }
    };
    


    const handleGetUser = async () => {
        const user = await getUser(uid);
        setUser(user);
    };

    const handleGetUsers = async () => {
        try {
            const allUsers = await getUsers();
            setUsers(allUsers);
        } catch (error) {
            console.error("Error al obtener usuarios:", error);
        }
    };

    const handleUpdateUser = async () => {
        await updateUser(uid, additionalData);
    };

    const handleDeleteUser = async () => {
        await deleteUser(uid);
    };

    const handleBack = () => {
        navigate(-1); // Usa navigate(-1) para regresar
    };

    return (
        <div className="user-page">
            <button onClick={handleBack}>Regresar</button>
            <section className="user-section">
                <h2>Crear usuario</h2>
                <div className="user-inputs">
                    <input type="text" placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)} /> {/* Campo para el nombre */}
                    <input type="text" placeholder="Apellido" value={lastName} onChange={(e) => setLastName(e.target.value)} /> {/* Campo para el apellido */}
                    <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button onClick={handleCreateUser}>Crear usuario</button>
            </section>
            <section className="user-section">
                <h2>Obtener todos los usuarios</h2>
                <button onClick={handleGetUsers}>Obtener usuarios</button>
                <table>
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>ID</th>
                            <th>Apellido</th>
                            <th>Nombre</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={index}>
                                <td>{user.email}</td>
                                <td>{user.uid}</td>
                                <td>{user.lastName}</td>
                                <td>{user.name}</td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </section>
            <section className="user-section">
                <h2>Actualizar usuario</h2>
                <input type="text" placeholder="UID" value={uid} onChange={(e) => setUid(e.target.value)} />
                <input type="text" placeholder="Additional Data" value={additionalData} onChange={(e) => setAdditionalData(e.target.value)} />
                <button onClick={handleUpdateUser}>Actualizar usuario</button>
            </section>
            <section className="user-section">
                <h2>Eliminar usuario</h2>
                <input type="text" placeholder="UID" value={uid} onChange={(e) => setUid(e.target.value)} />
                <button onClick={handleDeleteUser}>Eliminar usuario</button>
            </section>
        </div>
    );
}

export default Users;
