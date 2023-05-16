const Footer = () => {
  return (
    <footer className="bg-white text-gray-900">
      <div className="container mx-auto py-8">
        <div className="flex flex-wrap mb-4">
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4">
            <h4 className="text-base uppercase mb-4">Contact Us</h4>
            <p>
              <strong>Add</strong> : 4 Copley Place, 7th Floor, Boston,MA 6
            </p>
            <p>Tell : 866.453.4748</p>
            <p>HR Fax : 810.222.5439</p>
            <p>Email : sales@demati.com</p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4">
            <h4 className="text-base uppercase mb-4">Categories</h4>
            <p>Furniture</p>
            <p>Tables</p>
            <p>Seating</p>
            <p>Desk & office</p>
            <p>Storage</p>
            <p>Bed and Bath</p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4">
            <h4 className="text-base uppercase mb-4">Services</h4>
            <p>Sale</p>
            <p>Quick ship</p>
            <p>New Designs</p>
            <p>Accidental Fabric Protection</p>
            <p>Furniture Care</p>
            <p>Gift Cards</p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4">
            <h4 className="text-base uppercase mb-4">Join Us</h4>
            <p className="pb-5">
              Enter your email below to be the first to know about new
              collections and product launches.
            </p>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Enter your email"
                className="border border-gray-300  px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button className="bg-yellow-800 text-white px-4 py-2 ml-2 focus:outline-none focus:ring-2 focus:ring-blue-400">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="h-5 w-5 mr-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="text-center text-sm">
          <p className="mb-2">Copyright © 2023. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
