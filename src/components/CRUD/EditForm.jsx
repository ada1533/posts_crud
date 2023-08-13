import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const EditForm = ({ getOnePost, onePost, updatePost }) => {
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');
  const [image, setImage] = useState('');
  const { id } = useParams();

  useEffect(() => {
    getOnePost(id);
  }, []);

  useEffect(() => {
    if(onePost) {
      setBody(onePost.body);
      setAuthor(onePost.author);
      setImage(onePost.image);
    };
  }, [onePost, ]);

  function saveChanges() {
    let editedPost = {
      body,
      author,
      image
    };
    updatePost(id, editedPost);
  };

  return (
    <div>
      <input type="text" placeholder="Author" onChange={e => setAuthor(e.target.value)} value={author} />
      <input type="text" placeholder="Body" onChange={e => setBody(e.target.value)} value={body} />
      <input type="url" placeholder="Image" onChange={e => setImage(e.target.value)} value={image} />

      <Link to="/">
        <button onClick={saveChanges}>Save</button>
      </Link>
    </div>
  )
}

export default EditForm