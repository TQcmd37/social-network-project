import { pool } from "../db.js";

export const registerUser = async (req, res) => {
    const { user_name, email, password, id_rol} = req.body;

    try{
        if(!user_name || !email || !password || !id_rol) {
            return res.status(400).json({
                message: 'Todos los campos son requeridos'
            });
        }

        const [existingUser] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
        if(existingUser.length > 0){
            return res.status(409).json({message: 'El email ya está registrado'})
        }

        const [result] = await pool.query(
            'INSERT INTO users (user_name, email, password, id_rol) VALUES (?,?,?,?)',
            [user_name, email, password, id_rol]
        )

        const insertedUserId = result.insertId

        res.status(201).json({
            id: insertedUserId,
            user_name,
            email,
            id_rol
        });
    } catch(error){
        console.log(error);
        return res.status(500).json({message: 'Algo salió mal al registrar el usuario'});
    }
}

export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const [rows] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
        if (rows.length === 0) {
            return res.status(404).json({ message: 'El usuario no existe' });
        }
        
        const user = rows[0];
        if (password !== user.password) {
            return res.status(401).json({ message: 'Contraseña incorrecta' });
        }

        res.send({
            id: user.id,
            user_name: user.user_name,
            email: user.email,
            id_rol: user.id_rol 
        });
    } catch (error) {
        return res.status(500).json({ message: 'Algo salió mal al iniciar sesión' });
    }
};