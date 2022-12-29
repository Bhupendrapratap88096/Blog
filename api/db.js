import mysql2, { createConnection } from "mysql2";

export const db = mysql2.createConnection({
    host:"localhost",
    user:"root",
    password: "Bhupendra@2001",
    database:"blog"
})