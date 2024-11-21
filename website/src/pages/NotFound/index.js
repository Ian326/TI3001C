import { useEffect } from 'react';
import Lottie from 'react-lottie-player';
import NotFoundAnimation from '../../assets/not-found.json';

const NotFoundJSX = () => {
  useEffect(() => {
    document.body.classList.add('error-404');
    return () => {
      document.body.classList.remove('error-404');
    };
  }, []);

  return (
    <div className="flex justify-center items-center w-screen">
      
      <Lottie animationData={NotFoundAnimation} play={true} loop={true} 
        className="error-404 self-center" />
    
    </div>
  );
};

export default NotFoundJSX;
