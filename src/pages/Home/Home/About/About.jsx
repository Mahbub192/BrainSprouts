import inspires from "../../../../assets/img/about/OMUNMO0.jpg";
import crative from "../../../../assets/img/about/crative.jpg";
import motivation from "../../../../assets/img/about/motivation.webp";

const About = () => {
  return (
    <div className="container mx-auto my-16">
      <h1 className="text-center text-3xl font-bold ">Here is how it works</h1>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="mt-16 shadow-xl p-7">
          <img className="w-24 rounded-full mx-auto" src={inspires} alt="" />
          <h2 className="text-center text-xl font-bold my-5 uppercase">Inspires</h2>
          <p className="px-5 text-justify">
            Inspires creativity, curiosity, and critical thinking through
            interactive and educational experiences
          </p>
          <p className="px-5 text-justify">
            Fosters a love for learning and enhances cognitive abilities in a
            fun and engaging way
          </p>
        </div>
        <div className="mt-16 shadow-xl p-7">
          <img className="w-24 rounded-full mx-auto" src={motivation} alt="" />
          <h2 className="text-center text-xl font-bold my-5 uppercase">Motivation</h2>
          <p className="px-5 text-justify">
            Fosters a growth mindset by promoting a positive attitude towards
            challenges and the belief in one is ability to succeed.
          </p>
          <p className="px-5 text-justify">
            Inspires a love for learning and exploration by making educational
            concepts engaging, relevant, and enjoyable.
          </p>
        </div>
        <div className="mt-16 shadow-xl p-7">
          <img className="w-24 rounded-full mx-auto" src={crative} alt="" />
          <h2 className="text-center text-xl font-bold my-5 uppercase">Creative</h2>
          <p className="px-5 text-justify">
            Ignites imagination and encourages innovative thinking through
            open-ended play and creative problem-solving challenges
          </p>
          <p className="px-5 text-justify">
            Inspires self-expression and originality by providing tools and
            materials for artistic exploration and design.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
