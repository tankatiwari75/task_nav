import react, { useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import profile from "../static/images/profile.png";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const user = {
  name: "Tanka",
  email: "tom@example.com",
  imageUrl: "../static/images/profile.png",
};
const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Messages", href: "#", current: false },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function DashBoard() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const paragraphs = [
    'This is the first Task.',
    'This is the second Task.',
    'This is the third Task.',
    'And this is the fourth Fourth.',
  ];
  return (
    <>
      <NavBar />

      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <button
            onClick={togglePopup}
            className="rounded-md bg-emerald-600 px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Create Task
          </button>
        </div>
        {showPopup && (
          <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-75 z-50">
            <div className="bg-white w-1/3 rounded shadow-lg">
            <button
                className="flex float-right  p-3 text-gray-600 hover:text-gray-800"
                onClick={togglePopup}
              >
                Close
              </button>
              <h2 className="text-xl font-semibold mb-4 p-3">Create Task</h2>
              
              <form className="m-5">
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-lg font-medium text-gray-700"
                  >
                    Task Question
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 py-2 border rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-lg font-medium text-gray-700"
                  >
                    Asssigned To:
                  </label>
                  <select id="select" class="custom-select">
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                    <option value="option4">Option 4</option>
                    <option value="option5">Option 5</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-lg font-medium text-gray-700"
                  >
                    Due Date:
                  </label>
                  <input
                    type="date"
                    id="duedat"
                    className="w-full px-3 py-2 border rounded-md"
                  />
                </div>

                {/* Add other form fields as needed */}

                <div className="mt-4">
                  <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
                  >
                    Submit
                  </button>
                </div>
                
              </form>
              
            </div>
          </div>
        )}
      </header>
      <main>
      <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My Tasks</h1>
      <hr className="border-t-2 border-gray-300 my-4" />
      {paragraphs.map((paragraph, index) => (
        <div key={index}>
          <p className="mb-2">{paragraph}</p>
          <p className="mb-2 ">Team Members:Tanka, Jasmina, Pratima </p>
          <p className="mb-2">Due Date: 2022-08-10</p>
          {index !== paragraphs.length - 1 && <hr className="border-t-2 border-gray-300 my-4" />}
        </div>
      )
      )
      }
    </div>
      </main>

      <Footer/>
    </>
  );
}
