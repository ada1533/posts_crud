import React, { useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Like from '../Like/Like';
import { BsFillTrashFill, BsFillPencilFill } from 'react-icons/bs';

const PostList = ({ getPosts, posts, deletePost }) => {
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="container d-flex flex-wrap justify-content-center">
      {posts.map(post => (
        <Card key={post.id} style={{ width: 'auto', margin: '10px' }}>
          <div className="d-flex">
            <div>
              <Card.Img variant="top" src={post.image} width="auto" height="50%" />
              <Like key={post.id} postId={post.id} initialLikeStatus={post.like} />
            </div>
            <div className="flex-grow-1 d-flex flex-column justify-content-between p-2">
              <div>
                <Card.Title>{post.author}</Card.Title>
                <Card.Text style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{post.body}</Card.Text>
              </div>
              <div className="ml-auto">
                <div className="d-flex justify-content-evenly align-items-center">
                  <Link to={`/edit/${post.id}`}>
                    <BsFillPencilFill variant="success"></BsFillPencilFill>
                  </Link>

                  <BsFillTrashFill
                    variant="danger"
                    onClick={() => deletePost(post.id)}
                  ></BsFillTrashFill>

                  <Link to={`/details/${post.id}`}>
                    <Button variant="warning">D</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default PostList;
