import React, {useState} from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Form, Button, Container } from 'react-bootstrap';

const NewPostPage = () => {
    const [post, setPost] = useState({
        title: '',
        author: '',
        image: '',
        content: '',
    });
    const navigate=useNavigate();

    const handleChange= e => {
        const {name,value}=e.target;
        setPost({
            ...post,
            [name]: value
        });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        await axios.post('http://localhost:8000/posts',post);
        navigate('/')
    };

    return (
        <Container className='mt-4'>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Title</Form.Label>
                    <Form.Control type='text' name="title" placeholder="Title" onChange={handleChange} />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Author</Form.Label>
                    <Form.Control type='text' name='author' placeholder="Author" onChange={handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Image URL</Form.Label>
                    <Form.Control type="text" name="image" placeholder="Image URL" onChange={handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Content</Form.Label>
                    <Form.Control as='textarea' rows={3} name="content" placeholder="Content" onChange={handleChange} />
                </Form.Group>
                <Button variant="primary" type="submit">Create</Button>
            </Form>
        </Container>
    );
};

export default NewPostPage;