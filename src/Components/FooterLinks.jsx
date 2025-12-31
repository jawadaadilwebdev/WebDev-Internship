import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const FooterLinks = () => {
  const footerLinks = [
    {
      title: "About",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Find store", href: "/stores" },
        { label: "Categories", href: "/categories" },
        { label: "Blogs", href: "/blogs" },
      ],
    },
    {
      title: "Partnership",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Find store", href: "/stores" },
        { label: "Categories", href: "/categories" },
        { label: "Blogs", href: "/blogs" },
      ],
    },
    {
      title: "Information",
      links: [
        { label: "Help Center", href: "/help" },
        { label: "Money Refund", href: "/refund" },
        { label: "Shipping", href: "/shipping" },
        { label: "Contact us", href: "/contact" },
      ],
    },
    {
      title: "For users",
      links: [
        { label: "Login", href: "/login" },
        { label: "Register", href: "/register" },
        { label: "Settings", href: "/settings" },
        { label: "My Orders", href: "/orders" },
      ],
    },
  ];

  const socialLinks = [
    { icon: FaFacebookF, href: "#" },
    { icon: FaTwitter, href: "#" },
    { icon: FaLinkedinIn, href: "#" },
    { icon: FaInstagram, href: "#" },
    { icon: FaYoutube, href: "#" },
  ];
  return (
    <div className="w-[86%] mx-auto p-6">
      <div
        className="
    grid
    grid-cols-1
    gap-6
    w-full
    sm:grid-cols-2
    md:grid-cols-3
    lg:grid-cols-4
    xl:grid-cols-6
  "
      >
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-2">
            <img src="assets/logo-symbol.png" alt="" />
            <h3 className="text-[#8CB7F5] font-semibold text-2xl">Brand</h3>
          </div>
          <p className="text-gray-500 text-sm">
            Best information about the company gies here but now lorem ipsum is
          </p>
          <div className="flex justify-around">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <a key={index} href={link.href}>
                  <Icon className="text-gray-500 hover:text-blue-500 text-2xl" />
                </a>
              );
            })}
          </div>
        </div>

        {footerLinks.map((section, idx) => (
          <div key={idx} className="flex flex-col justify-around">
            <h4 className=" text-sm font-semibold text-gray-900">
              {section.title}
            </h4>

            <ul className="">
              {section.links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-gray-900"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="flex flex-col justify-around gap-5">
          <h4 className="text-sm font-semibold text-gray-900">Get app</h4>
          <img className="w-35 h-auto" src="assets/appstore.png" alt="App Store" />
          <img className="w-35 h-auto" src="assets/playstore.png" alt="Google Play" />
        </div>
      </div>
    </div>
  );
};

export default FooterLinks;
