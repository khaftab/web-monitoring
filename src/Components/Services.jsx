import { Card } from "@tremor/react";
import { TrackerExample } from "./Tracker";
import GlowingDot from "./GlowingDot";

const Services = () => {
  return (
    <div className="container mx-auto mt-7">
      <h1 className="text-3xl font-bold">Uptime <span className="text-2xl text-gray-400">Last 90 days</span></h1>

      <Card className="mt-5 p-4 py-6">
        <div className="flex items-center justify-around">
          <div>
            <h2 className="font-medium text-xl text-gray-600">API</h2>
            <div className="flex ml-4 mt-2">
              <GlowingDot />
              <span className="font-medium ml-5 mt-[-5px] text-xl text-green-600">Up</span>
            </div>
          </div>
          <div className="w-96">
            <TrackerExample service="API" />
          </div>
        </div>
        <div className="w-[850px] mx-auto my-6">
          <hr />
        </div>
        <div className="flex items-center justify-around">
          <div>
            <h2 className="font-medium text-xl text-gray-600">Blog</h2>
            <div className="flex ml-4 mt-2">
              <GlowingDot />
              <span className="font-medium ml-5 mt-[-5px] text-xl text-green-600">Up</span>
            </div>
          </div>
          <div className="w-96">
            <TrackerExample service="Blog" />
          </div>
        </div>
        <div className="w-[850px] mx-auto my-6">
          <hr />
        </div>
        <div className="flex items-center justify-around">
          <div>
            <h2 className="font-medium text-xl text-gray-600">SSL</h2>
            <div className="flex ml-4 mt-2">
              <GlowingDot />
              <span className="font-medium ml-5 mt-[-5px] text-xl text-green-600">Up</span>
            </div>
          </div>
          <div className="w-96">
            <TrackerExample service="SSL" />
          </div>
        </div>
        <div className="w-[850px] mx-auto my-6">
          <hr />
        </div>
        <div className="flex items-center justify-around">
          <div>
            <h2 className="font-medium text-xl text-gray-600">NginX</h2>
            <div className="flex ml-4 mt-2">
              <GlowingDot />
              <span className="font-medium ml-5 mt-[-5px] text-xl text-green-600">Up</span>
            </div>
          </div>
          <div className="w-96">
            <TrackerExample service="NginX" />
          </div>
        </div>
      </Card>

      <div className="shadow-sm py-4 mt-4">
        <h2 className="text-3xl font-bold">Overall Uptime</h2>
        <div className="bg-white flex justify-around py-5 mt-5">
          <div>
            <h3 className="font-bold text-2xl text-gray-800">100.00%</h3>
            <p className="text-xl text-gray-700">Last 24 hours</p>
          </div>
          <div>
            <h3 className="font-bold text-2xl text-gray-800">92.73%</h3>
            <p className="text-xl text-gray-700">Last 7 days</p>
          </div>
          <div>
            <h3 className="font-bold text-2xl text-gray-800">89.00%</h3>
            <p className="text-xl text-gray-700">Last 30 days</p>
          </div>
          <div>
            <h3 className="font-bold text-2xl text-gray-800">81.20%</h3>
            <p className="text-xl text-gray-700">Last 90 days</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;