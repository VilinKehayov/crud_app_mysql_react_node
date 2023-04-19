import React, {useState} from "react";
import axios from "axios"
import {useNavigate} from "react-router-dom"

const Add = () => {
    
    const [input, setInput] = useState({
        title: "",
        desc: "",
        price: null,
        cover: "",
    })

    const navigate = useNavigate();
    
    const handleChange = (e) => {
        setInput(prev => ({...prev,[e.target.name]: e.target.value}))
        console.log(input);
    }

    const handleClick = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:3000/books", input)
            navigate("/")
        } catch (error) {
            console.log(error);
            
        }
    }

  return (
    <div className="form">
      <h1>Add new book</h1>
      <input type="text" placeholder="title" onChange={handleChange} name="title"/>
      <input type="text" placeholder="desc" onChange={handleChange} name="desc"/>
      <input type="number" placeholder="price" onChange={handleChange} name="number"/>
      <input type="text" placeholder="cover"onChange={handleChange}  name="cover"/>
      <button className="formButton" onClick={handleClick}>Add</button>
    </div>
  );
};

export default Add;
