const About = () => {
  return (
     <div>
        <h1 className="text-4xl font-bold my-32 text-center text-gray-700 dark:text-white">About</h1>
        <div className="flex justify-center items-center gap-5">
          <h2 className="text-4xl font-bold text-gray-700">Home of your next favorite bite."</h2>
          <img src="/pizza.png" className="w-96 " alt="" />
        </div>
     </div>
  );
}

export default About;
