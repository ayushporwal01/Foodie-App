const Contact = () => {
  return (
    <div
      className="flex justify-center items-center"
      style={{ minHeight: "calc(100vh - 96px)" }}
    >
      <div className="w-[450px] h-[450px] flex flex-col justify-center items-center space-y-10">
        <h1 className="text-center font-bold text-4xl text-gray-700">Contact Us</h1>

        <form action="#" className="flex flex-col space-y-5 w-full">
          <input
            type="text"
            placeholder="Your Name"
            required
            className="w-full border border-[#e08300] py-1.5 pl-2 rounded-lg focus:outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            className="w-full border border-[#e08300] py-1.5 pl-2 rounded-lg focus:outline-none"
          />

          <textarea
            name="message"
            rows="4"
            placeholder="Your Message..."
            required
            className="w-full border border-[#e08300] py-5 pl-2 rounded-lg focus:outline-none"
          ></textarea>

          <button
            type="submit"
            className="w-20 py-1 bg-[#e08300] text-white font-medium rounded-md mx-auto transition-colors duration-300 hover:bg-[#ff9002]  cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
