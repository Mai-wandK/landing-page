import { FaTools, FaThumbsUp, FaWrench } from "react-icons/fa";

const servicesData = [
  {
    name: "Expert Technicians",
    icon: (
      <FaTools className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    description: "Our certified technicians provide top-notch care with extensive experience.",
    aosDelay: "0",
  },
  {
    name: "Customer Satisfaction",
    icon: (
      <FaThumbsUp className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    description: "Highly rated for professionalism and transparent pricing, we prioritize your satisfaction.",
    aosDelay: "500",
  },
  {
    name: "Comprehensive Services",
    icon: (
      <FaWrench className="text-5xl text-primary group-hover:text-black duration-500" />
    ),
    description: "From tune-ups to complex repairs, we offer a full range of automotive services.",
    aosDelay: "1000",
  },
];

const Services = () => {
  return (
    <>
      <span id="about"></span>
      <div className="dark:bg-black dark:text-white py-14 sm:min-h-[600px] sm:grid sm:place-items-center">
        <div className="container">
          <div className="pb-12">
            <h1
              data-aos="fade-up"
              className="text-3xl font-semibold text-center sm:text-4xl font-serif"
            >
              Why Choose Us?
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {servicesData.map((service) => (
              <div
                key={service.name}
                data-aos="fade-up"
                data-aos-delay={service.aosDelay}
                className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-16 bg-dark hover:bg-primary duration-300 text-white hover:text-black rounded-lg"
              >
                <div className="grid place-items-center">{service.icon}</div>
                <h1 className="text-2xl font-bold">{service.name}</h1>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
