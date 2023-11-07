import { Container } from "react-bootstrap"
import { Form } from "react-bootstrap"
import Button from 'react-bootstrap/Button';

function Login(){
    return (
        <Container className='bg-white rounded col-md-6 py-5'>
            <div className='shadow p-3 bg-white rounded raised-div'>
            <h2>Login</h2>
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Email Address" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control className = "w-75" type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="success" type="submit">
                Sign In
            </Button>
            </Form>
            </div>
        </Container>
    );
}
export default Login;