const Contact = () => {
  return (
    <div className="flex justify-center items-center min-h-screen dark:bg-black">
      <div className="w-[450px] h-[450px] flex flex-col justify-center items-center space-y-10">
        <h1 className="text-center text-4xl text-[#555] font-bold">
          Contact Us
        </h1>

        <form action="#" className="flex flex-col space-y-5 w-full">
          <input
            type="text"
            placeholder="Your Name"
            required
            className="w-full border border-[#e08300] py-1.5 pl-2 rounded-lg focus:outline-none dark:placeholder-[#555]"
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            className="w-full border border-[#e08300] py-1.5 pl-2 rounded-lg focus:outline-none dark:placeholder-[#555]"
          />

          <textarea
            name="message"
            rows="4"
            placeholder="Your Message..."
            required
            className="w-full border border-[#e08300] py-5 pl-2 rounded-lg focus:outline-none dark:placeholder-[#555]"
          ></textarea>

          <button
            type="submit"
            className="w-20 py-1 bg-[#e08300] text-white font-medium mx-auto rounded-md hover:bg-[#ff9002] transition-colors duration-300 cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
