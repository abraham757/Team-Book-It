const HeroSection = () => {

  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20 rounded-lg p-2">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Share your thoughts! Leave a review and discover what others are saying about your 
        <span className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
          {" "}
          favorite books!
        </span>
      </h1>
    </div>
  );
};

export default HeroSection;