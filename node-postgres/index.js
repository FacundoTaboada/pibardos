const { Pool } = require("pg");

const config = {
    user: 'postgres',
    host: 'localhost',
    password: 'pibardos',
    database: 'library'
};

const pool = new Pool(config);

const getHabits = async () => {
    try {
        const res = await pool.query('select * from habits');
        console.log(res.rows);
    } catch (e) {
        console.log(e);
    }
};

const insertUser = async () => {
    const text = 'INSERT INTO users(username, password) VALUES($1,$2)';
    const values = ['facu', 'facu123'];
    const res = await pool.query(text, values);
    console.log(res);
}

const deleteUser = async () => {
    const text = 'DELETE FROM users WHERE username = $1';
    const value = ['facu'];
    const res = await pool.query(text, value);
    console.log(res);
}

const editUser = async () => {
    const text = 'UPDATE users SET username = $1, password = $2 WHERE username = $3';
    const value = ['salomon', 'salomon123', 'salomon']
    const res = await pool.query(text, value)
    console.log(res)
}

editUser()