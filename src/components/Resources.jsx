import React from "react";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../assets/images/about.jpg"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBox,
  faChartLine,
  faDollarSign,
  faGavel,
  faShippingFast,
  faSearch,
  faHandshake,
  faLink,
} from "@fortawesome/free-solid-svg-icons";

const resourcesData = [
  {
    title: "Online Marketplaces",
    description: "Explore various online platforms to sell your products.",
    icon: faBox,
    link: "https://www.etsy.com/",
  },
  {
    title: "Marketing Tools",
    description: "Utilize tools for effective marketing strategies.",
    icon: faChartLine,
    link: "https://mailchimp.com/",
  },
  {
    title: "Finance Management",
    description: "Manage your finances efficiently with these tools.",
    icon: faDollarSign,
    link: "https://www.quickbooks.com/",
  },
  {
    title: "Legal Resources",
    description: "Access legal guidance and resources for your business.",
    icon: faGavel,
    link: "https://www.legalzoom.com/",
  },
  {
    title: "Shipping Solutions",
    description: "Find reliable shipping services for your products.",
    icon: faShippingFast,
    link: "https://www.fedex.com/",
  },
  {
    title: "Product Sourcing",
    description: "Discover suppliers for your business needs.",
    icon: faSearch,
    link: "https://www.alibaba.com/",
  },
  {
    title: "Customer Service Tools",
    description: "Improve customer service with these tools.",
    icon: faHandshake,
    link: "https://www.zendesk.com/",
  },
  {
    title: "Networking Platforms",
    description: "Connect with other vendors and customers.",
    icon: faLink,
    link: "https://www.linkedin.com/",
  },
];

const Resources = () => {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="p-6 bg-white bg-opacity-20 rounded-lg shadow-lg max-w-6xl mx-auto mt-0">
        <h2 className="text-3xl font-bold text-center mb-6">Available Resources</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {resourcesData.map((resource, index) => (
            <div
              key={index}
              className="p-4 bg-orange-500 rounded-lg text-white shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <FontAwesomeIcon icon={resource.icon} className="text-2xl mr-2" />
                <h3 className="text-xl font-semibold">{resource.title}</h3>
              </div>
              <p className="mb-4">{resource.description}</p>
              <a
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline hover:text-purple-800"
              >
                Get Resource
              </a>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button
            onClick={() => navigate("/dashboard")}
            className="bg-purple-800 text-white px-4 py-2 rounded hover:bg-orange-500 transition"
          >
            Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Resources;
