import { FaInstagram, FaFacebook, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-black dark:text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-3">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Lorem Ipsum Inc.</h2>
            <p className="mt-4 text-gray-700 dark:text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
            </p>
          </div>
          <div className="md:col-span-3">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Contact Us</h2>
            <div className="mt-4 text-gray-700 dark:text-gray-300 flex items-center">
              <FaPhone className="mr-2" />
              <a href="tel:+1234567890">+1 (234) 567-890</a>
            </div>
            <div className="mt-4 text-gray-700 dark:text-gray-300 flex items-center">
              <FaEnvelope className="mr-2" />
              <a href="mailto:info@placeholder.com">example@.com</a>
            </div>
            <div className="mt-4 text-gray-700 dark:text-gray-300 flex items-center">
              <FaMapMarkerAlt className="mr-2" />
              <span>123 Placeholder St,<br />Lorem City, Ipsum State, 12345</span>
            </div>
          </div>
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Follow Us</h2>
            <div className="flex mt-4 space-x-4">
              <a href="#" className="text-gray-900 dark:text-white hover:text-primary">
                <FaInstagram size="24" />
              </a>
              <a href="#" className="text-gray-900 dark:text-white hover:text-primary">
                <FaFacebook size="24" />
              </a>
            </div>
          </div>
          <div className="md:col-span-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-5">Visit Us</h2>
            <iframe
              src="https://www.google.com/maps"
              width="100%"
              height="400"
              frameBorder="0"
              style={{ border: 0, borderRadius: '15px' }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 dark:border-gray-700 pt-8 text-center">
          <p className="text-gray-700 dark:text-gray-300">
            &copy; {new Date().getFullYear()} Lorem Ipsum Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
