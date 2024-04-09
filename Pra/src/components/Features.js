import React from "react";

function Features() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Deploy faster
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Commitment to Mental Health Care
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            At our mental health care services, we prioritize the well-being and recovery of every individual. We understand the importance of mental health and provide comprehensive support to help you navigate life's challenges. Whether you're seeking therapy, counseling, or support groups, we're here for you every step of the way.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                Dedicated Support Team
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                Our team of compassionate professionals is dedicated to providing personalized care tailored to your unique needs. From licensed therapists to psychiatric specialists, we offer a range of services to support your mental health journey.
              </dd>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                Empowering Recovery Programs
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                We believe in empowering individuals to take control of their mental health and thrive. Our recovery programs focus on holistic approaches, including therapy, medication management, and lifestyle interventions, to promote long-term well-being.
              </dd>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                Community Connection
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                We understand the importance of community in fostering healing and recovery. Through support groups, workshops, and community events, we offer opportunities for connection, understanding, and growth.
              </dd>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                Safe and Supportive Environment
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                Your safety and comfort are our top priorities. Our facilities provide a safe and supportive environment where you can feel heard, valued, and respected throughout your treatment.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}

export default Features;
