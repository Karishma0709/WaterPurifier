import React from "react";
import { FaCheckCircle, FaTint, FaRecycle, FaSmile } from "react-icons/fa";

const WaterSoftening = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-blue-800 text-center mb-6">
          What Makes Water Soft & Its Benefits
        </h2>
        <p className="text-lg text-gray-700 text-center mb-12">
          Understand the process of water softening and how it can improve your daily life by providing pure and safe water.
        </p>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* What Makes Water Soft */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">
              What Makes Water Soft?
            </h3>
            <p className="text-gray-600 mb-6">
              Hard water contains high levels of minerals like calcium and magnesium, which cause scaling and reduce efficiency in appliances. Water softening is the process of removing these minerals using an ion-exchange method or specialized water softeners. This process replaces the calcium and magnesium ions with sodium or potassium ions, making the water soft and more efficient for use.
            </p>
            <div className="flex items-center text-blue-800">
              <FaTint className="text-3xl mr-4" />
              <p className="text-gray-700">
                Soft water prevents scaling and improves the lifespan of appliances.
              </p>
            </div>
          </div>

          {/* Benefits of Water Softening */}
          <div>
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">
              Benefits of Soft Water
            </h3>
            <ul className="space-y-6">
              {/* Benefit 1 */}
              <li className="flex items-center">
                <FaCheckCircle className="text-blue-800 text-3xl mr-4" />
                <p className="text-gray-700">
                  Extends the lifespan of home appliances like washing machines, water heaters, and dishwashers by preventing scaling.
                </p>
              </li>

              {/* Benefit 2 */}
              <li className="flex items-center">
                <FaRecycle className="text-blue-800 text-3xl mr-4" />
                <p className="text-gray-700">
                  Reduces the usage of detergents and soaps, saving money and protecting the environment.
                </p>
              </li>

              {/* Benefit 3 */}
              <li className="flex items-center">
                <FaSmile className="text-blue-800 text-3xl mr-4" />
                <p className="text-gray-700">
                  Makes skin and hair feel softer and smoother after bathing or washing.
                </p>
              </li>

              {/* Benefit 4 */}
              <li className="flex items-center">
                <FaCheckCircle className="text-blue-800 text-3xl mr-4" />
                <p className="text-gray-700">
                  Prevents scaling on faucets, showerheads, and other fixtures, keeping your bathroom and kitchen spotless.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaterSoftening;
