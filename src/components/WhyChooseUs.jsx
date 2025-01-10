import React from "react";
import { FaRocket, FaLightbulb, FaChartLine, FaWrench } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-4xl font-bold text-center text-blue-800 mb-4">
          Why Choose Us?
        </h2>
        <p className="text-lg text-center text-gray-700 mb-12">
          We provide the best Aquaguard RO services and quality installation with the use of professional equipment.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="p-6 border-2 border-dashed border-gray-300 rounded-lg">
            <div className="flex text-blue-800 text-5xl mb-3">
              <FaRocket />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h3>
            <p className="text-gray-600">
              Our mission is to make India a healthy and prosperous country. We and our team are working hard to deliver the best products in the field of healthcare and home appliances.
            </p>
          </div>

          {/* Plan */}
          <div className="p-6 border-2 border-dashed border-gray-300 rounded-lg">
            <div className="flex text-blue-800 text-5xl mb-3">
              <FaLightbulb />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Plan</h3>
            <p className="text-gray-600">
              Our plan is to make a system where each person can get a healthy environment to live and grow. We are using technology to make sustainable and economical healthcare products.
            </p>
          </div>

          {/* Vision */}
          <div className="p-6 border-2 border-dashed border-gray-300 rounded-lg">
            <div className="flex text-blue-800 text-5xl mb-3">
              <FaChartLine />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h3>
            <p className="text-gray-600">
              Our vision is to provide a healthy life for every human. We are visualizing a world free of problems like pollution and disease. We strive to make healthcare home appliances accessible for all.
            </p>
          </div>

          {/* Installation & Uninstallation */}
          <div className="p-6 border-2 border-dashed border-gray-300 rounded-lg">
            <div className="flex text-blue-800 text-5xl mb-3">
              <FaWrench />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Installation & Uninstallation
            </h3>
            <p className="text-gray-600">
              Buy the installation service at nearly NO Cost from here and get satisfactory service at your doorsteps. Contact us immediately and be part of our happy customer base.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
