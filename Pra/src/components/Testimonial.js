import avatar1 from "../Images/Avatar1.jpg";
import avatar2 from "../Images/Avatar2.jpg";
import avatar3 from "../Images/Avatar3.jpg";
function Testimonial() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <div className="h-full text-center">
              <img
                alt="testimonial"
                className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                src={avatar1} // Here, replace the static URL with the web variable
              />
              <p className="leading-relaxed">
                "Shanky.well provided me with exceptional mental health support during a difficult period. Their counselors were empathetic and understanding, and the online platform made it convenient to access services from the comfort of my home. I highly recommend Shanky.well to anyone seeking professional mental health assistance."
              </p>
              <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                  Shambhu pandey 
              </h2>
              <p className="text-gray-500">Mens Hostel Student</p>
            </div>
          </div>
          {/* Repeat the same pattern for other testimonial components */}
          <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <div className="h-full text-center">
              <img
                alt="testimonial"
                className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                src={avatar2} // Here, replace the static URL with the web variable
              />
              <p className="leading-relaxed">
                "As someone who was hesitant to seek therapy, Shanky.well made the process incredibly smooth and comfortable. The counselors were highly skilled and offered valuable insights that helped me navigate my challenges. The platform's user-friendly interface and range of services exceeded my expectations. I'm grateful for the support I received from Shanky.well."
              </p>
              <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                Sumit Paudel
              </h2>
              <p className="text-gray-500">
                Mens Hostel Student
              </p>
            </div>
          </div>
          <div className="lg:w-1/3 lg:mb-0 p-4">
            <div className="h-full text-center">
              <img
                alt="testimonial"
                className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                src={avatar3} // Here, replace the static URL with the web variable
              />
              <p className="leading-relaxed">
                "I've been using Shanky.well's services for a few months now, and I've been consistently impressed with the quality of care I've received. The counselors are knowledgeable and compassionate, and I always feel heard and understood during our sessions.  and I'm grateful to have found such a reliable resource."
              </p>
              <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                Murali 
              </h2>
              <p className="text-gray-500">Mens Hostel Student</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
