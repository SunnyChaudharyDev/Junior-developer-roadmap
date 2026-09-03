import db from "../db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
/*-----------------REGISTER User-----------------*/

export async function registerUser(name,email,password){
    const existingUser = await db.query(
                "SELECT id FROM users WHERE email = $1",
        [email]
    );
    if(existingUser.rows.length > 0){
        throw new Error("Email already registered")
    };
    const passwordHash = await bcrypt.hash(password, 10) ;
    const result = await db.query(
         `INSERT INTO users (name, email, password_hash)
         VALUES ($1, $2, $3)
         RETURNING id, name, email, role`,
        [name, email, passwordHash]
    );
    return result.rows[0];
}
/*-----------------LOGIN User-----------------*/

export async function loginUser(email, password) {
    const result = await db.query(
        "SELECT * FROM users WHERE email = $1",
        [email]
    );
    const user = result.rows[0];

    if (!user) {
        throw new Error("Invalid email or password");
    }

    const passwordMatch = await bcrypt.compare(
        password,
        user.password_hash
    );

    if (!passwordMatch) {
        throw new Error("Invalid email or password");
    }

    delete user.password_hash;

    if (!process.env.JWT_SECRET) {
        throw new Error("JWT_SECRET is not configured");
    }

    const token = jwt.sign(
        { id: user.id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
    );

    return { user, token };
}