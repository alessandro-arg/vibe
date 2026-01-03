"use client";

import { useCurrentTheme } from "@/hooks/use-current-theme";
import { PricingTable } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Image from "next/image";

const Page = () => {
  const currentTheme = useCurrentTheme();

  return (
    <div className="flex flex-col max-w-3xl mx-auto w-full">
      <section className="space-y-6 pt-[16vh] 2xl:pt-48">
        <div className="flex flex-col items-center">
          <Image
            src="/logo.svg"
            alt="vibe logo"
            width={50}
            height={50}
            className="hidden md:block w-12.5 h-12.5"
          />
        </div>
        <h1 className="text-xl md:text-3xl font-black text-center">Pricing</h1>
        <p className="text-shadow-muted text-center text-sm md:text-base">
          Choose the plan that fits your needs
        </p>
        <PricingTable
          appearance={{
            baseTheme: currentTheme === "dark" ? dark : undefined,
            elements: {
              pricingTableCard: "border! shadow-none! rounded-lg!",
            },
          }}
        />
      </section>
    </div>
  );
};

export default Page;
