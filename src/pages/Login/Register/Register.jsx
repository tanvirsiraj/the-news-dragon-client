import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [accepted, setAccepted] = useState(false);

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        // console.log(name, photo, email, password);

        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                // console.log(createdUser);
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleAccepted = event => {
        // console.log(event.target.checked)
        setAccepted(event.target.checked);
    }

    return (
        <Container className='mx-auto w-25'>
            <h3>Please Register</h3>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Your Name" required />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail2">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control name='photo' type="text" placeholder="Photo URL" required />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        onClick={handleAccepted}
                        name="accept"
                        type="checkbox"
                        label={<>Accepts <Link to="/terms">Terms & Conditions</Link></>} />
                </Form.Group>

                <Button variant="primary" type="submit" disabled={!accepted}>
                    Register
                </Button>
                <br />
                <Form.Text className="text-secondary">
                    Already Have an Account?     <Link to="/login">Login</Link>
                </Form.Text>
                <Form.Text className="text-success">

                </Form.Text>
                <Form.Text className="text-danger">

                </Form.Text>
            </Form>
        </Container>
    );
};

export default Register;