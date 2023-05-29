
const LoadingPage = () => {
  return (
    <div
      className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen
     z-50 overflow-hidden bg-gray-900 
     flex flex-col items-center justify-center"
    >
      <div className="loader ease-linear rounded-full border-4 border-gray-200 h-12 w-12 mb-4"></div>
    </div>
  );
};

export default LoadingPage;
