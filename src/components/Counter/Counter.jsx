import CountUp from 'react-countup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faCalendarAlt, faTools } from '@fortawesome/free-solid-svg-icons';

const CounterSection = () => {
  const counters = [
    { value: 18000, label: 'HAPPY CUSTOMERS', icon: faUsers },
    { value: 10, label: 'YEARS OF SERVICES', icon: faCalendarAlt },
    { value: 18500, label: 'PROJECTS COMPLETED', icon: faTools },
  ];

  return (
    <section className="text-black py-6" data-aos="fade-up" data-aos-delay="200">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {counters.map((counter, index) => (
            <div key={index} className="space-y-4">
              <div className="flex justify-center">
                <FontAwesomeIcon icon={counter.icon} className="text-5xl text-blue-800" />
              </div>
              <h2 className="text-5xl font-bold text-blue-600">
                <CountUp end={counter.value} duration={5} />+
              </h2>
              <p className="text-xl font-semibold">{counter.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
