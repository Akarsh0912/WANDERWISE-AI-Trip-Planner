// import { Link } from "react-router-dom";
// function Home() {
//   return (
//     <>
//       <div className=" flex flex-col items-center mx-56 gap-9">
//         <h1 className=" font-extrabold text-[44px] text-center mt-16">
//           <span className="text-[#f56551]">
//             Discover Your Adventure with AI:
//           </span>
//           Personalized Itineraries at Your fingertips
//         </h1>
//         <p className=" text-xl text-center text-gray-500">
//           Your personal trip planner and travel curator, creating custom
//           itineraries tailored to your interests and budget
//         </p>
//         <Link to="/create-trip">
//           <button className="btn btn-primary">Primary</button>
//         </Link>
//       </div>
//     </>
//   );
// }

// export default Home;

import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="flex flex-col items-center mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-32 2xl:mx-40 gap-6 sm:gap-8 md:gap-9">
        <h1 className="font-extrabold text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-[44px] text-center mt-8 sm:mt-10 md:mt-12 lg:mt-14 xl:mt-16 2xl:mt-18">
          <span className="text-[#f56551]">
            Discover Your Adventure with AI:
          </span>
          Personalized Itineraries at Your Fingertips
        </h1>
        <p className="text-lg sm:text-xl text-center text-gray-500">
          Your personal trip planner and travel curator, creating custom
          itineraries tailored to your interests and budget
        </p>
        <Link to="/create-trip">
          <button className="btn btn-primary">Get Started, It is Free</button>
        </Link>
      </div>
    </>
  );
}

export default Home;
