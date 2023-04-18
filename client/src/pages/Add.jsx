import React from "react";

const Add = () => {
    
    const [input, setInput] = useState({
        title: "",
        desc: "",
        price: null,
        cover: "",
    })

  return (
    <div className="form">
      <h1>Add new book</h1>
      <input type="text" placeholder="title" />
      <input type="text" placeholder="desc" />
      <input type="number" placeholder="price" />
      <input type="text" placeholder="cover" />
    </div>
  );
};

export default Add;
