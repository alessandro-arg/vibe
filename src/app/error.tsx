"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";

const ErrorPage = () => {
  return (
    <section className="h-screen w-full flex flex-col items-center justify-center bg-background cursor-default!">
      <div className="py-8 px-4 mx-auto max-w-7xl lg:py-16 lg:px-6 cursor-default!">
        <div className="font-mono mx-auto max-w-screen-sm text-center cursor-default!">
          <h1 className="mb-4 text-primary text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500 cursor-default!">
            404
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white cursor-default!">
            Something's missing.
          </p>
          <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400 cursor-default!">
            Sorry, we can't find that page.
          </p>
          <Button
            asChild
            size="sm"
            variant="tertiary"
            className="cursor-pointer!"
          >
            <Link href="/">
              <ArrowLeftIcon /> Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
