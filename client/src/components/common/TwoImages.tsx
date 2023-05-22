const TwoImage = () => {
  const images = [
    {
      url: "https://cdn.shopify.com/s/files/1/0136/8467/0523/files/banner-1.jpg?v=1657102623",
    },
    {
      url: "https://cdn.shopify.com/s/files/1/0136/8467/0523/files/banner-2.jpg?v=1657102635",
    },
  ];
  return (
    <div className="flex flex-col md:flex-row pt-10 gap-10 px-10">
      <div className="text-center">
        <img src={images[0].url} alt="" className="pb-5" />
        <h3 className="text-3xl pb-5">In Stock + Ready to Go: Dining</h3>
        <p>Shop tried + true designs your bedroom needs</p>
      </div>
      <div className="text-center">
        <img src={images[1].url} alt="" className="pb-5" />
        <h3 className="text-3xl pb-5">From loveseats to sectionals.</h3>
        <p>Shop tried + true designs your bedroom needs.</p>
      </div>
    </div>
  );
};
export default TwoImage;
