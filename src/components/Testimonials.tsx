import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";

import userOneImg from "../../public/img/user1.jpg";
import userTwoImg from "../../public/img/user2.jpg";
import userThreeImg from "../../public/img/user3.jpg";

export const Testimonials = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-50 h-30 bg-gray-100 rounded-2xl  dark:bg-trueGray-800">

            <Avatar
              image={userOneImg}
              name="Kalum Tharindu"
              title="Organizing co-ordinator/Batch Representative"
            />
          </div>
        </div>
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-50 h-30 bg-gray-100 rounded-2xl  dark:bg-trueGray-800">

            <Avatar
              image={userTwoImg}
              name="Sawindu Samuditha Jayasinghe"
              title="Organizing co-ordinator/Batch Representative"
            />
          </div>
        </div>
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-50 h-30 bg-gray-100 rounded-2xl  dark:bg-trueGray-800">

            <Avatar
              image={userThreeImg}
              name="Navodya Dewmini"
              title="Organizing co-ordinator"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

interface AvatarProps {
  image: any;
  name: string;
  title: string;
}

function Avatar(props: Readonly<AvatarProps>) {
  return (
    <div className="flex items-center  space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-l-lg ">
        <Image
          src={props.image}
          width="120"
          height="120"
          alt="Avatar"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props: { readonly children: React.ReactNode }) {
  return (
    <>
      {" "}
      <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
        {props.children}
      </mark>{" "}
    </>
  );
}
