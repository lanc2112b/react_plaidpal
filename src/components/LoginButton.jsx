import { Button } from 'react-bootstrap';

const LoginButton = () => { 

 const handleLogin = () => {
    const backendURL = `http://localhost:8000`;
    window.location.href = `${backendURL}/auth/google`;
  };

    return (

        <Button variant="danger" onClick={handleLogin}>
            Login w/google
        </Button>

    )
}

export default LoginButton;