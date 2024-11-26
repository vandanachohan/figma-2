import React from "react";
import Image from "next/image";

const testimonialsData = [
  {
    rating: 5,
    text: "This service was amazing, highly recommended!",
    image: "/team3.png", 
    name: "John Doe",
    role: "CEO, Example Co."
  },
  {
    rating: 4,
    text: "Great experience, will use again.",
    image: "/team1.png", 
    name: "Jane Smith",
    role: "Marketing Manager"
  },
  {
    rating: 5,
    text: "Outstanding support and quality.",
    image: "/team6.png", 
    name: "Mike Johnson",
    role: "Product Manager"
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center">
          Customer Testimonials
        </h2>
        <p className="text-gray-900 text-center mt-2">
          See what our customers are saying about us.
        </p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`inline-block w-5 h-5 ${
                      i < testimonial.rating
                        ? "text-yellow-500"
                        : "text-gray-300"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>

              <p className="text-gray-900 italic mb-4">{testimonial.text}</p>

              <div className="flex items-center justify-center space-x-4">
                <Image
                  src={testimonial.image}
                  alt={`${testimonial.name} profile picture`}
                  width={64}
                  height={64}
                  className="rounded-full"
                />
                <div>
                  <h4 className="text-lg font-medium text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-900">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
