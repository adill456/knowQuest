import SignupForm from "@/components/auth/SignupForm";

const Signup = () => {
  return (
    <section className="w-full  -mt-[6rem]  h-screen flex items-center justify-center">
      <section className="w-full absolute lg:w-full lg:flex items-center justify-center py-1">
        <div className="grid grid-cols-1 lg:grid-cols-3 place-items-center h-[600px] lg:h-[700px] w-4/5 m-auto border border-gray-200 rounded-lg overflow-hidden">
          <div className="col-span-2 h-full w-full bg-gray-200 p-5">
            <SignupForm />
          </div>
          <div className="col-span-1 hidden lg:block text-white bg-black h-full w-full p-10">
            <div className="w-full flex flex-col justify-between h-full">
              <span className="text-2xl">KnowQuest Inc.</span>
              <div className="w-full">
                <p className="text-base">
                  Welcome to KnowQuest Inc! Discover a world of engaging quizzes
                  tailored to your interests. Challenge friends, expand your
                  knowledge, and make learning a personalized experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Signup;
