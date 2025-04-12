"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { signInAction } from "../_action/sign-in";

export const SignInSection = () => {
  return (
    <div className="space-y-3">
      <h1 className="text-base text-center">
        Sign in by clicking button bellow
      </h1>
      <Button className="w-full" onClick={signInAction}>
        <FaGoogle />
        Sign in by Google
      </Button>
      <Button
        className="w-full"
        onClick={() => alert("Oops, this feature doesn't available yet.")}
      >
        <FaFacebook />
        Sign in by Facebook
      </Button>
    </div>
  );
};
