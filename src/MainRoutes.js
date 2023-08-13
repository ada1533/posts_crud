import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import AddForm from "./components/CRUD/AddForm";
import PostList from './components/CRUD/PostList';
import Details from "./components/CRUD/Details";
import EditForm from "./components/CRUD/EditForm";
import axios from 'axios';

const MainRoutes = () => {
  const API = 'http://localhost:8000/posts';

  const [posts, setPosts] = useState([]);
  const [onePost, setOnePost] = useState(null);

  function addPost(newPost) {
    axios.post(API, newPost);
  }

  async function getPosts() {
    let res = await axios.get(API);
    setPosts(res.data);
  }

  async function getOnePost(id){
    let res = await axios.get(`${API}/${id}`);
    setOnePost(res.data);
  }

  async function updatePost(id, editedPost){
    await axios.patch(`${API}/${id}`, editedPost);
    getPosts();
  }

  async function deletePost(id){
    await axios.delete(`${API}/${id}`);
    getPosts();
  }
  return (
    <>
        <Routes>
            <Route path='/' element={<PostList getPosts={getPosts} posts={posts} deletePost={deletePost}/>}/>
            <Route path="/add" element={<AddForm addPost={addPost} />} />
            <Route path='/details/:id' element={<Details getOnePost={getOnePost} onePost={onePost} />}/>
            <Route path='/edit/:id' element={<EditForm getOnePost={getOnePost} onePost={onePost} updatePost={updatePost} />}/>
        </Routes>
    </>
  );
}

export default MainRoutes;
