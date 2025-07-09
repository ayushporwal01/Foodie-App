const Contact = () => {
  return (
    <div
      className="flex justify-center items-center"
      style={{ minHeight: "calc(100vh - 96px)" }}
    >
      <div className="w-[450px] h-[450px] border flex flex-col justify-center items-center space-y-10">
        <h1 className="text-center font-bold text-3xl">Contact Us</h1>

        <form action="#" className="flex flex-col space-y-5">
          <div className="flex space-x-3">
            <input
              type="text"
              placeholder="Your Name"
              required
              className="border pl-2 ml-2"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Your Email"
              required
              className="border pl-2 ml-2"
            />
          </div>

          <div className="flex flex-col">
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message..."
              required
              className="w-58 border pl-2"
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-1 bg-[#ff9002] text-white rounded-sm transition-colors duration-300 cursor-pointer"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
