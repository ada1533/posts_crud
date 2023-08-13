import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const Details = ({ getOnePost, onePost }) => {
    const { id } = useParams();
    useEffect(() => {
        getOnePost(id)
    }, [getOnePost, id]);

    return (
        <div className='container'>
            {onePost ? (
                <>
                <div>{onePost.author}</div>
                <div>{onePost.body}</div>
                <img src={onePost.image} alt="eror" width='250' height='250' />
                </>
            ) : (
                <Spinner animation='border' role='status'>
                    <span className='visually-hidden'>Loading...</span>
                </Spinner>
            )}
        </div>
    );
};

export default Details;