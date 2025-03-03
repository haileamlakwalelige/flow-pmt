/* eslint-disable @next/next/no-async-client-component */

import Image from "next/image";
import React from "react";
import logo from "../../assets/logo.png";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import { ChartNoAxesGantt, PenBox, Projector } from "lucide-react";
import { checkUser } from "@/lib/checkUser";
import UserButtonComponent from "./UserButtonComponent";

const Navbar = async () => {
  const user = await checkUser();

  return (
    <div className="px-10 py-3">
      <div className="flex justify-between items-center">
        <div>
          <Image src={logo} alt="Logo Of flow" height={170} width={170} />
        </div>
        <div className="flex gap-2 items-center justify-center">
          <Button variant="destructive">
            <span className="bg-red-500 hover:bg-red-700 px-4 flex gap-2 items-center justify-center rounded py-2 text-base text-white">
              <PenBox /> Create Project
            </span>
          </Button>
          <SignedOut>
            <div className="bg-gray-800 hover:bg-gray-950 text-white w-full px-8 max-w-[120px] rounded py-2">
              <SignInButton />
            </div>
          </SignedOut>
          <SignedIn>
            <UserButtonComponent />
          </SignedIn>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
