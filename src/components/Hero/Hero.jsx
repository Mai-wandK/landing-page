import CarHero from '../../assets/CarHero.png';
import BlueCarHero from '../../assets/BlueCarHero.png';
import { FaStar } from "react-icons/fa";
import GoogleReviewsImage from '/src/assets/Google-logo.png'; // Replace with your image path
import CounterSection from '../Counter/Counter';

const Hero = ({ theme }) => {

  const email = 'lorem@ipsum.com';

  const handleEmailClick = () => {
    // Trigger the email client
    window.location.href = `mailto:${email}`;
  };

  return (
    <section className='dark:bg-black dark:text-white duration-300 relative z-20 pt-16'>
      <div className="container min-h-[620px] flex">
        <div className='grid place-items-center grid-cols-1 sm:grid-cols-2'>
          <div
            data-aos="zoom-in"
            data-aos-duration="1600"
            className='order-1 sm:order-2'>
            <img
              src={theme === "dark" ? CarHero : BlueCarHero}
              alt="CarImage"
              className='sm:scale-125 -z-10 max-h-[600px] drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)]'
            />
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className='order-2 sm:order-1 space-y-5 sm:pr-32 px-4 sm:px-0'>
            <h1 className='text-5xl lg:text-7xl font-semibold font-serif'>Lorem Ipsum Dolor Sit Amet</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            <button
              className="btn bg-primary text-white font-bold px-8 py-3 rounded-md hover:bg-primary/80 duration-300 cursor-pointer"
              onClick={handleEmailClick}
            >
              Contact Us
            </button>
            <div className="mt-4 flex items-center text-gray-600 dark:text-gray-400">
              <span className="text-2xl font-semibold mr-2">4.8/5</span>
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} className="text-yellow-500" />
              ))}
              <span className="px-2 border-l border-gray-300 ml-2">Lorem</span>
              <span className="px-2 border-l border-gray-300">Ipsum</span>
            </div>
            <div className="mt-4 flex items-center text-gray-600 dark:text-gray-400">
              <img src={GoogleReviewsImage} alt="Google Reviews" className="w-24 mr-2 object-cover" />
              <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 ml-2 underline">77+ Google Reviews</a>
            </div>
          </div>
        </div>
      </div>
      <CounterSection />
    </section>
  )
}

export default Hero;
