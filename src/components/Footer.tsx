import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";

export function Footer() {

  return (
    <div className="relative">
      <Container>
        <div className="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 border-t border-gray-100 dark:border-trueGray-700 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div>
              {" "}
              <Link
                href="/"
                className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100"
              >
                <Image
                  src="/img/main-logo.png"
                  width="212"
                  height="44" 
                  className="rounded-md "
                  alt={""}                
                />
              </Link>
            </div>



            <div className="mt-10">
              <a
                href="https://vercel.com/?utm_source=web3templates&utm_campaign=oss"
                target="_blank"
                rel="noopener"
                className="relative block w-44"
              >
                <div className="flex">
                <Image
                  src="/img/logo.png"
                  alt="N"
                  width="32"
                  height="32"
                  className="w-8"
                />
                <span>Maze Master</span>
                </div>
              </a>
            </div>
            <div className="max-w-md  text-gray-500 dark:text-gray-400">
              Organize By HDSE24.1 Batch NIBM Galle.
            </div>
          </div>

          <div>
            
          </div>
          <div>
            
          </div>
          <div className="">
            <div>Follow us</div>
            <div className="flex mt-5 space-x-5 text-gray-400 dark:text-gray-500">
              <a
                href="https://www.facebook.com/nibm.mazemaster"
                target="_blank"
                rel="noopener"
              >
                <span className="sr-only">Facebook</span>
                <Facebook />
              </a>

              <a href="https://linkedin.com/" target="_blank" rel="noopener">
                <span className="sr-only">Linkedin</span>
                <Linkedin />
              </a>
            </div>
          </div>
        </div>

        <div className="my-10 text-sm text-center text-gray-600 dark:text-gray-400">
          Copyright © {new Date().getFullYear()}. Made by{" "}
          <a href="https://github.com/senaleevisal" target="_blank" rel="noopener">
            Senalee Visal 
          </a>{" "}
          {" and "}
          <a href="https://github.com/nethsaraPrabash" target="_blank" rel="noopener ">
            Nethsara prabash
          </a>
        </div>
      </Container>
    </div>
  );
}



const Facebook = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07" />
  </svg>
);


const Linkedin = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z" />
  </svg>
);
