// import React from 'react'

import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

function Layout({ children }) {
  const [spacing, setspacing] = useState(300);
  const location = useLocation();
  const [flag, setFlag] = useState(false);
  const menus = [
    {
      icon: <i className="ri-dashboard-2-line mr-4 text-xl" />,
      label: "Dashboard",
      link: "/dashboard",
    },
    {
      icon: <i className="ri-tv-line mr-4 text-xl" />,
      label: "Device",
      link: "/device",
    },
    {
      icon: <i className="ri-nurse-line mr-4 text-xl" />,
      label: "Doctor",
      link: "/doctor",
    },
    {
      icon: <i className="ri-dashboard-2-line mr-4 text-xl" />,
      label: "About",
      link: "/about",
    },
  ];
  return (
    <div className="bg-[#E9E7EF] w-full min-h-screen">
      <aside
        className="bg-white h-full fixed top-0 left-0 overflow-hidden"
        style={{
          width: spacing,
          transition: "300ms",
        }}
      >
        <div className={spacing === 300 ? "p-8 pb-0" : "p-0 items-center"}>
          {spacing === 82 && (
            <img src="/images/logo.jpg" className="mb-8 mt-6" />
          )}
          {spacing === 300 && (
            <img src="/images/Health_photo.webp" alt="" className="mb-2" />
          )}
          <div className="flex items-center gap-4 justify-center">
            <img
              src="/images/Doctor.jpg"
              alt=""
              className="h-12 w-12 rounded-full object-center"
            />
            {spacing === 300 && (
              <h1 className="text-lg font-semibold">Super Admin</h1>
            )}
          </div>
        </div>

        <div className="p-4 flex flex-col gap-4">
          {menus.map((item, idx) => (
            <Link
              to={item.link}
              key={idx}
              className="flex px-4 py-2 items-center rounded text-black hover:bg-zinc-300 transition-all"
              style={{
                background : (location.pathname === item.link ? '#7c3aed' : null),
                color : (location.pathname === item.link ? 'white' : null)
              }}
            >
              {item.icon}
              {spacing === 300 && (
                <label htmlFor="" className="text-lg">
                  {item.label}
                </label>
              )}
            </Link>
          ))}
        </div>
      </aside>
      <section
        style={{
          marginLeft: spacing,
          transition: "300ms",
        }}
      >
        <nav className="flex justify-between bg-white p-6 shadow">
          <div>
            <button
              className="w-10 h-10 rounded-full hover:bg-gray-100"
              onClick={() => setspacing(spacing === 300 ? 82 : 300)}
            >
              <i className="ri-menu-2-line"></i>
            </button>

            <Link to="https://codingOTT.com">Go to Website</Link>
          </div>
          <div className="flex items-center gap-4">
            <button>
                <i className="ri-message-3-line mr-2"></i>
                Code with us
            </button>
            <button>
                <i className="ri-message-3-line mr-2"></i>
                Health ease
            </button>
            <button className="flex">
                <img className="w-6 h-6 rounded-full" src="/images/Doctor.jpg" alt="" />
                chat with us
            </button>
            <button onClick={()=>setFlag(!flag)} className="flex items-center gap-2 relative">
                <img src="/images/flag.jpg" alt="" className="w-6 h-6 rounded-full"/>IN
                {flag === true && <div className="absolute border bg-white top-12 right-0 flex flex-col">
                    <button className="p-4 hover:bg-gray-200">EN</button>
                    <button className="p-4 hover:bg-gray-200">BD</button>
                    <button className="p-4 hover:bg-gray-200">IN</button>
                </div>}
            </button>
          </div>
        </nav>

        <div className="p-6">
          <h1 className="text-5xl font-bold">{children}</h1>
        </div>

        <footer className="bg-white p-6 rounded-md m-6">
          <div className="flex items-center w-fit mx-auto text-gray-600">
            <i className="ri-copyright-line"></i>
            <p>CodingOtt | All Right Reserved</p>
          </div>
        </footer>
      </section>
    </div>
  );
}

export default Layout;
