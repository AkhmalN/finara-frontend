import { Button } from "../ui/button";
import { Goal, PlusCircle } from "lucide-react";
import MoneyImageSection from "@/assets/section/money-section.jpg";

const HeroSection = () => {
  return (
    <div className="px-4 py-8 md:py-12 max-w-7xl mx-auto w-full">
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10">
        {/* Left Section - Text Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <div className="flex flex-col gap-4 md:gap-5">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 leading-tight">
              Solusi mudah untuk atur keuanganmu
            </h1>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              Finara membantu kamu mengelola keuangan pribadi dengan lebih
              efisien dan efektif.
            </p>
            <div className="flex flex-col sm:flex-row justify-start gap-3 pt-2">
              <Button variant="default" color="primary">
                <PlusCircle /> Buat Transaksi
              </Button>
              <Button variant="outline">
                <Goal /> Buat Goals
              </Button>
            </div>
          </div>
        </div>
        {/* Right Section - Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="w-full max-w-sm md:max-w-md">
            <img
              src={MoneyImageSection}
              alt="Financial Management"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
