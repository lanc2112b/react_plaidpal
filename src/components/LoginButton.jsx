import { Button } from 'react-bootstrap';

const LoginButton = () => { 

 const handleLogin = () => {
    const backendURL = `http://localhost:8000`;
    window.location.href = `${backendURL}/auth/google`;
  };

    return (

        <Button variant="danger" onClick={handleLogin}>
            <i className="fas fa-user me-2"></i>
            Login w/google
        </Button>

    )
}

export default LoginButton;