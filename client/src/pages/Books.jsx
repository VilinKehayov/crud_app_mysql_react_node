import React, {useState, useEffect} from 'react'
import axios from "axios"
import { Link } from 'react-router-dom';


const Books = () => {

    const [books, setBooks] = useState([])

    useEffect(()=>{
        const fetchAllBooks = async () => {
            try {
                const res = await axios.get("http://localhost:3000/books")
                setBooks(res.data);
            } catch (error) {
                console.log(error)
            }
        }
        fetchAllBooks();
    },[]);
  return (
    <div>
        <h1>Vilin's Book Shop</h1>
        <div className="books">
            {books.map((book)=>(
               <div className="book" key={book.id}>
                {book.cover && <img src={book.cover} alt="" />}
                <h2>{book.title}</h2>
                <p>{book.desc}</p>
                <span>{book.price}</span>
                <button className="delete">Delete</button>
                <button className="update">Update</button>
               </div>
            ))}
        </div>
        <button><Link to="/add">Add new book</Link></button>
    </div>
  )
}

export default Books