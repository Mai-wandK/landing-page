import { FaOilCan, FaCarBattery, FaTachometerAlt, FaWrench, FaCarCrash, FaCogs } from "react-icons/fa";

const servicesOffered = [
  {
    name: "Oil & Lube",
    icon: (
      <FaOilCan className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    description: "Keep your engine running smoothly with our oil change and lube services.",
    aosDelay: "0",
  },
  {
    name: "Battery Replacement",
    icon: (
      <FaCarBattery className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    description: "Ensure reliable starts with our quick and efficient battery replacement service.",
    aosDelay: "200",
  },
  {
    name: "Diagnostics",
    icon: (
      <FaTachometerAlt className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    description: "Comprehensive computer diagnostics to identify and fix issues accurately.",
    aosDelay: "400",
  },
  {
    name: "Brake Service",
    icon: (
      <FaWrench className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    description: "Stay safe with our complete brake system inspections and repairs.",
    aosDelay: "600",
  },
  {
    name: "Collision Repair",
    icon: (
      <FaCarCrash className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    description: "Expert collision repair to restore your vehicle to its original condition.",
    aosDelay: "800",
  },
  {
    name: "General Maintenance",
    icon: (
      <FaCogs className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    description: "Routine maintenance to keep your vehicle in peak condition.",
    aosDelay: "1000",
  },
];

const ServicesOffered = () => {
  return (
    <section>
      <span id="services"></span>
      <div className="dark:bg-black dark:text-white py-14 sm:min-h-[600px] sm:grid sm:place-items-center">
        <div className="container">
          <div className="pb-12">
            <h1
              data-aos="fade-up"
              className="text-3xl font-semibold text-center sm:text-4xl font-serif"
            >
              Our Services
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {servicesOffered.map((service) => (
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
    </section>
  );
};

export default ServicesOffered;
