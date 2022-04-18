import React, { useState } from "react";
import Card from "./Card";
import axios from "axios";

const Bookapi = () => {
  const [search, setSearch] = useState("");
  const [bookData, setData] = useState([]);
  const searchBook = (evt) => {
    if (evt.key === "Enter") {
      axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyB2Rrne2xtGIcLnMkiukrt5JspllnujzLA'+'&maxResults=40')
        .then((res) => setData(res.data.items))
        .catch((err) => console.log(err));
    }
  };
  return (
    <>
      <div className="header">
        <div className="row1">
          <h1>
            Why buy a book when you can find it here ?<br /> Save Paper Save
            Future !
          </h1>
        </div>
        <div className="row2"><h2>Look Your Book !</h2><div className="search">
            <input type="text"placeholder="Enter Book Name  & Press Enter."value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyPress={searchBook}/>
            <button><i class="fa-brands fa-searchengin"></i></button>
          </div>
          <img src="./images/k.jpg" alt="" />
        </div>
      </div>
     <div className="container">
          {
          <Card book={bookData}/> 
          }
 </div>
    </>
  )
}
export default Bookapi;
