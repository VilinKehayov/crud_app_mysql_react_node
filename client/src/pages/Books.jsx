import React, {useState, useEffect} from 'react'
import axios from "axios"


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
               <div className="book">
                {book.cover && <img src={book.cover} alt="" />}
                <h2>{book.title}</h2>
                <p>{book.desc}</p>
                <span>{book.price}</span>
               </div>
            ))}
        </div>
    </div>
  )
}

export default Books