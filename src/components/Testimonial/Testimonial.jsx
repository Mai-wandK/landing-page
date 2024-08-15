import { FaStar } from 'react-icons/fa';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const reviews = [
  {
    name: "John D.",
    title: "Lorem Ipsum Dolor",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
  },
  {
    name: "Sarah L.",
    title: "Sed Ut Perspiciatis",
    content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
  },
  {
    name: "Mike T.",
    title: "Nemo Enim Ipsam",
    content: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos.",
  },
];

const CustomerReviews = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section className="bg-white dark:bg-black dark:text-white" data-aos="fade-up">
      <div className="mx-auto max-w-screen-2xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="md:flex md:items-end md:justify-between">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
              Read trusted reviews from our customers
            </h2>
            <p className="mt-6 max-w-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Our customers love us! Check out what they have to say about our top-notch service and friendly staff.
            </p>
          </div>
          <a
            href="/"
            className="mt-6 inline-flex shrink-0 items-center gap-2 rounded-full border border-primary px-5 py-3 text-primary transition hover:bg-primary hover:text-white md:mt-0"
          >
            <span className="font-medium">Read all reviews</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4 rtl:rotate-180"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {reviews.map((review, index) => (
            <blockquote
              key={index}
              className="flex h-full flex-col justify-between bg-white dark:bg-dark p-6 shadow-sm sm:p-8 rounded-lg"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div>
                <div className="flex gap-0.5 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="h-5 w-5" />
                  ))}
                </div>
                <div className="mt-4">
                  <p className="text-2xl font-bold text-black sm:text-3xl dark:text-white">{review.title}</p>
                  <p className="mt-4 leading-relaxed text-gray-700 dark:text-gray-300">{review.content}</p>
                </div>
              </div>
              <footer className="mt-4 text-sm font-medium text-gray-700 dark:text-gray-300 sm:mt-6">&mdash; {review.name}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
