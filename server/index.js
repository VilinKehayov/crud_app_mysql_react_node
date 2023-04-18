import express from "express"
import mysql from "mysql"

const app = express();

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mysql123",
    database: "crud_app"
})

app.listen(8800, ()=>{
    console.log("Server connected!")
})