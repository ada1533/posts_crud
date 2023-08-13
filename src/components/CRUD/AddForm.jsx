import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AddForm.css'

const AddForm = ({ addPost }) => {
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');
  const [image, setImage] = useState('');

  function createPost() {
    if(
      !body.trim() ||
      !author.trim() ||
      !image.trim()
  ) {
      alert('some inp are enpty')
      return;
  };

    let newPost = {
      body,
      author,
      image,
    };
    addPost(newPost);
  };

  return (
    <div id='addform'>
      <h1>Add Form</h1>
      <input type="text" placeholder="Author" onChange={e => setAuthor(e.target.value)} />
      <input type="text" placeholder="Body" onChange={e => setBody(e.target.value)} />
      <input type="url" placeholder="Image" onChange={e => setImage(e.target.value)} />

      <Link to="/">
        <button onClick={createPost}>Create</button>
      </Link>
    </div>
  )
}

export default AddForm