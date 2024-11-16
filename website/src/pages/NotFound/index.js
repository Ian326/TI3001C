import Lottie from 'react-lottie-player';
import NotFoundAnimation from '../../assets/not-found.json';

const NotFoundPage = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Lottie animationData={NotFoundAnimation} play={true} loop={true} style={{ width: 800, height: 800 }} />
    </div>
  );
};

export default NotFoundPage;
