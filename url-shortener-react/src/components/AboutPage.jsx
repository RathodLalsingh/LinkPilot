import React from "react";
import { FaLink, FaShareAlt, FaEdit, FaChartLine } from "react-icons/fa";
const AboutPage = () => {
  return (
    <div className="lg:px-14 sm:px-8 px-5 min-h-[calc(100vh-64px)] pt-2">
      <div className="bg-white w-full sm:py-10 py-8  ">
        <h1 className="sm:text-4xl text-slate-800 text-3xl font-bold italic  mb-3">
          About LinkPilot
        </h1>
        <p className="text-gray-700 text-sm  mb-8 xl:w-[60%] lg:w-[70%] sm:w-[80%] w-full ">
          LinkPilot helps you create, manage, and analyze short links with ease. Whether you're sharing content, running campaigns, or tracking engagement, LinkPilot provides the tools you need to optimize every click..
        </p>
        <div className="space-y-5 xl:w-[60%] lg:w-[70%] sm:w-[80%] w-full ">
          <div className="flex items-start">
            <FaLink className="text-blue-500 text-3xl mr-4" />
            <div>
              <h2 className="sm:text-2xl font-bold text-slate-800">
                Smart URL Shortening Platform
              </h2>
              <p className="text-gray-600">
                Create short, memorable links effortlessly with just a few clicks. Our user-friendly platform makes URL shortening fast, simple, and hassle-free, allowing you to share and manage links with ease.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <FaShareAlt className="text-green-500 text-3xl mr-4" />
            <div>
              <h2 className="sm:text-2xl font-bold text-slate-800">
                Powerful Analytics
              </h2>
              <p className="text-gray-600">
               Unlock valuable insights with our powerful analytics dashboard. Monitor clicks, track user behavior, analyze geographic trends, and understand referral sources to optimize your link performance and improve your marketing strategies.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <FaEdit className="text-purple-500 text-3xl mr-4" />
            <div>
              <h2 className="sm:text-2xl font-bold text-slate-800">
                Secure Link Protection
              </h2>
              <p className="text-gray-600">
                Protect your links with advanced security features designed to keep your data safe. Our platform uses robust protection mechanisms to ensure every shortened URL remains secure, reliable, and trusted.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <FaChartLine className="text-red-500 text-3xl mr-4" />
            <div>
              <h2 className="sm:text-2xl font-bold text-slate-800">
                Fast & Reliable Link Delivery
              </h2>
              <p className="text-gray-600">
                Experience lightning-fast redirects and reliable performance powered by a high-availability infrastructure. Your shortened URLs stay accessible, responsive, and ready to deliver a seamless experience every time
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;