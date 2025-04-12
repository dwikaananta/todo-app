import React from "react";
import { FaKeybase } from "react-icons/fa";
import { SignInSection } from "./_section/sign-in";

const Page = () => {
  return (
    <div className="h-screen w-full flex bg-primary">
      <div className="w-full max-w-md m-auto space-y-4 bg-secondary p-12 rounded-lg">
        <h1 className="text-4xl font-semibold text-center">Todo App</h1>
        <FaKeybase className="mx-auto text-9xl" />
        <SignInSection />
      </div>
    </div>
  );
};

export default Page;
