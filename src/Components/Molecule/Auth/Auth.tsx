import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Auth = ({ children }:any) => {
  const navigate = useNavigate();

  useEffect(() => {
      const token = localStorage.getItem("auth");
    if (!token) {
      navigate("/");
        
      }
  }, []);

  return <>{children}</>;
};

export default Auth;
