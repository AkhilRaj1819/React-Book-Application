import React from 'react';

const Books = ({ books }) => {
  return (
    <div>
        <div className='books'>
      {books.map((ele, index) => (
        <div key={index}>
          <h3 className='title'>{ele.title}</h3>
          <h5>Authors</h5>
          {ele.authors.map((author,index) => (
            <p className='author' key={index}>{author}</p>
          ))}
          <p className='categorie'>category: {ele.category}</p>
        </div>
      ))}
      </div>
      
    </div>
  );
};

export default Books;