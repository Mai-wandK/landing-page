const About = () => {
  return (
    <section className="dark:bg-dark dark:text-white bg-gray-100 sm:min-h-[700px] sm:grid sm:place-items-center duration-300">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center">
          <div data-aos="slide-right" data-aos-duration="1000" className='py-4'>
            <img
              src="https://via.placeholder.com/400"
              alt="Placeholder"
              className="h-[400px] w-[400px] rounded-[15px]"
            />
          </div>
          <div>
            <div className="space-y-5 sm:p-16 pb-6">
              <h1
                data-aos="fade-up"
                className="text-3xl sm:text-4xl font-bold font-serif"
              >
                About Us
              </h1>
              <p data-aos="fade-up" className="leading-8 tracking-wide">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Integer sit amet metus ac mi facilisis cursus.
              </p>

              <p data-aos="fade-up" className="leading-8 tracking-wide">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>

              <p data-aos="fade-up" className="leading-8 tracking-wide">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
