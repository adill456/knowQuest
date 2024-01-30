"use client";

import LoginForm from "@/components/auth/LoginForm";

const Login = () => {
  return (
    <section className="w-full  -mt-24  h-screen flex items-center justify-center">
      <section className="w-full absolute lg:w-4/5 lg:flex items-center justify-center py-3">
        <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center h-[500px] lg:h-[700px] w-4/5 m-auto border border-gray-200 rounded-lg overflow-hidden">
          <div className="col-span-1 hidden lg:block text-white bg-black h-full w-full p-10">
            <div className="w-full flex flex-col justify-between h-full">
              <span className="text-2xl">KnowQuest Inc.</span>
              <div className="w-full">
                <p className="text-base">
                  KnowQuest Inc, your ultimate quiz companion, offers a diverse
                  array of engaging quizzes for every interest. Explore a world
                  of knowledge, challenge friends, and personalize your learning
                  experience.
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-1 h-full w-full bg-gray-200 p-10">
            <LoginForm />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Login;
