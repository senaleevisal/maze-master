"use client";
import React, { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import {Disclosure, DisclosureButton} from "@headlessui/react";


export function PopupWidget() {

  return (
    <div>
      <Disclosure>
        <>
            <a href="https://wa.me/94765378041">
          <DisclosureButton className="fixed z-40 flex items-center justify-center transition duration-300 bg-indigo-500 rounded-full shadow-lg right-5 bottom-5 w-14 h-14 focus:outline-none hover:bg-indigo-600 focus:bg-indigo-600 ease">
            <span className="sr-only">Open Contact form Widget</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute w-6 h-6 text-white"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
          </DisclosureButton>
              </a>
        </>
      </Disclosure>
    </div>
  );
}
