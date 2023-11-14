
import user from "../../assets/images/user.png";
import Category from "../Category/Category";
import Features from "../Features/Features";

const Home = () => {
  
  return (
    <div className="mt-12">
      <div className="flex justify-between items-center ">
        <div className="ml-36">
          <h1 className="font-bold text-5xl">
            One Step <br /> Closer To Your <br />{" "}
            <span className="text-purple-900 "> Dream Job</span>
          </h1>
          <p className="mt-3 text-slate-400">
            Explore thousands of job opportunities with all the <br />
            information you need. It's your future.Come find it. <br /> manage
            all your job application from start to finish
          </p>
          <button className="mt-3 border text-white font-semibold bg-purple-900 p-2 rounded">
            Get Started
          </button>
        </div>

        <div className="h-96 w-96 mr-40 ">
          <img src={user} alt="" />
        </div>
      </div>

      <Category></Category>
      <Features></Features>
     
    </div>
  );
};

export default Home;
