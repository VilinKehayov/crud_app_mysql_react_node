import React, {useState} from "react";

const Add = () => {
    
    const [input, setInput] = useState({
        title: "",
        desc: "",
        price: null,
        cover: "",
    })
    
    const handleChange = (e) => {
        setInput(prev => ({...prev,[e.target.name]: e.target.value}))
        console.log(input);
    }

  return (
    <div className="form">
      <h1>Add new book</h1>
      <input type="text" placeholder="title" onChange={handleChange} name="title"/>
      <input type="text" placeholder="desc" onChange={handleChange} name="desc"/>
      <input type="number" placeholder="price" onChange={handleChange} name="number"/>
      <input type="text" placeholder="cover"onChange={handleChange}  name="cover"/>
    </div>
  );
};

export default Add;
