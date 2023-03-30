import { Button } from 'react-bootstrap';

const LoginButton = () => { 

 const handleLogin = () => {
     const backendURL = `https://plaidpal-api.onrender.com`;
     window.location.href = `${backendURL}/auth/google`;
     //window.location.href = `${backendURL}/api/users`;
  };

    return (
        <>
        <Button variant="danger" onClick={handleLogin}>
            <i className="fas fa-user me-2"></i>
            Login w/google
        </Button>
        </>

    )
}

export default LoginButton;

