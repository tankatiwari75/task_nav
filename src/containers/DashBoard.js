import react, { useState ,useEffect} from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import profile from "../static/images/profile.png";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useForm } from "react-hook-form";

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
  const [taskList, setTaskList] = useState([])
  const { register, handleSubmit, errors } = useForm();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("http://localhost:3001/api/tasks/list");
      const json = await data.json();
      setTaskList(json);
    };

    fetchData().catch(console.error);
    
  }, [])
  
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const paragraphs = [
    "This is the first Task.",
    "This is the second Task.",
    "This is the third Task.",
    "And this is the fourth Fourth.",
  ];
  const createTask = async(data) => {

    try{
      const response = await fetch("http://localhost:3001/api/tasks", {
        method: 'POST',
        crossDomain:true,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        const data = await response.json();
        setTaskList(data)
        togglePopup()
      } else {
        console.error('Login failed');
      }
    }catch(error) {
        console.error('An error occurred', error);
      }
  };
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

              <form className="m-5" onSubmit={handleSubmit(createTask)}>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-lg font-medium text-gray-700"
                  >
                    Task
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="task_decription"
                    {...register('task_description', { required: true })}
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
                  <select
                    id="select"
                    class="custom-select"
                    name="team_member"
                    {...register('team_member', { required: true })}
                  >
                    <option value="Jasmina">Jasmina</option>
                    <option value="Pratima">Pratima</option>
                    <option value="Tanka">Tanka</option>
                    <option value="Ananda">Ananda</option>
                    <option value="Subash">Subash</option>
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
                    name="due_date"
                    {...register('due_date', { required: true })}
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
          {taskList.map((item,index) => (
            <div key={item.id}>
              <p className="mb-2">Task Description: {item.task_description}</p>
              <p className="mb-2 ">Team Member: {item.team_member} </p>
              <p className="mb-2">Due Date: {item.due_date}</p>
              {index !== taskList.length - 1 && (
                <hr className="border-t-2 border-gray-300 my-4" />
              )}
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}
