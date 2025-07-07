const Contact = () => {
  return (
    <div
      className="flex justify-center items-center"
      style={{ minHeight: "calc(100vh - 96px)" }}
    >
      <div className="w-[450px] h-[450px] border bg-blue-300 flex flex-col justify-center items-center space-y-10">
        <h1 className="text-center font-bold text-2xl">Contact Us</h1>
        <form action="#" className="flex flex-col space-y-5">
          <div>
            <label>Name</label>
            <input
              type="text"
              placeholder="Your Name"
              required
              className="border pl-2 ml-2"
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              placeholder="Your Email"
              required
              className="border pl-2 ml-2"
            />
          </div>

          <div className="flex flex-col">
            <label>Message</label>
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
              className="px-2 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300 cursor-pointer"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
