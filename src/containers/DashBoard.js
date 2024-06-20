import { useState, useEffect } from "react";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useForm } from "react-hook-form";
import MessagePage from "./MessagePage";

import { List } from "lucide-react";

// const user = {
//   name: "Tanka",
//   email: "tom@example.com",
//   imageUrl: "../static/images/profile.png",
// };
// const navigation = [
//   { name: "Dashboard", href: "#", current: true },
//   { name: "Messages", href: "#", current: false },
// ];
// const userNavigation = [
//   { name: "Your Profile", href: "#" },
//   { name: "Settings", href: "#" },
//   { name: "Sign out", href: "#" },
// ];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

export default function DashBoard() {
  const [showPopup, setShowPopup] = useState(false);
  const [taskList, setTaskList] = useState([]);

  const [filterOption, setFilterOption] = useState("all"); // Default filter option
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    fetchData(); // Initial fetch of tasks
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/tasks/list");
      if (response.ok) {
        const data = await response.json();
        setTaskList(data);
      } else {
        console.error("Failed to fetch tasks");
      }
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  // const paragraphs = [
  //   "This is the first Task.",
  //   "This is the second Task.",
  //   "This is the third Task.",
  //   "And this is the fourth Fourth.",
  // ];
  const createTask = async (data) => {
    try {
      const response = await fetch("http://localhost:3001/api/tasks", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const data = await response.json();
        setTaskList(data);
        togglePopup();
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("An error occurred", error);
    }
  };

  // mark as Complete Option
  const markAsComplete = async (taskId) => {
    try {
      const response = await fetch(
        `http://localhost:3001/api/tasks/${taskId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ is_completed: true }),
        }
      );

      if (response.ok) {
        const updatedTask = await response.json();
        setTaskList(
          taskList.map((task) => (task._id === taskId ? updatedTask : task))
        );
      } else {
        console.error("Failed to mark task as complete");
      }
    } catch (error) {
      console.error("An error occurred", error);
    }
  };
  // Delete Options
  const deleteTask = async (taskId) => {
    try {
      const response = await fetch(
        `http://localhost:3001/api/tasks/${taskId}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        setTaskList(taskList.filter((task) => task._id !== taskId));
      } else {
        console.error("Failed to delete task");
      }
    } catch (error) {
      console.error("An error occurred", error);
    }
  };

  const today = new Date().toISOString().split("T")[0];

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
                  <textarea
                    id="name"
                    rows="4"
                    cols="50"
                    name="task_decription"
                    {...register("task_description", { required: true })}
                    className="w-full px-3 py-2 border rounded-md"
                  ></textarea>
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
                    min={today}
                    name="due_date"
                    {...register("due_date", { required: true })}
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
          <div className="flex">
            <h1 className="text-2xl font-bold mb-4">My Tasks</h1>
            {/* <div className="ml-auto">
              <select
                value={filterOption}
                onChange={(e) => filterTasks(e.target.value)}
              >
                <option value="all">All Tasks</option>
                <option value="due_date">Closer to Due Date</option>
                <option value="completed">Completed</option>
              </select>
            </div> */}
          </div>

          <hr className="border-t-2 border-gray-300 my-4" />
          {taskList.map((item, index) => (
            <div key={item._id}>
              <div className="flex">
                <div>
                  <p className="mb-2">
                    Task Description: {item.task_description}
                  </p>
                  <p className="mb-2">Due Date: {item.due_date}</p>
                </div>
                <div className="ml-auto">
                  {!item.is_completed ? (
                    <button
                      className="bg-emerald-600 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded"
                      onClick={() => markAsComplete(item._id)}
                    >
                      Mark As Complete
                    </button>
                  ) : (
                    <div className="flex">
                      <span className="text-green-500 font-bold mr-2">
                        Completed
                      </span>
                      <button
                        className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded"
                        onClick={() => deleteTask(item._id)}
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              </div>
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
