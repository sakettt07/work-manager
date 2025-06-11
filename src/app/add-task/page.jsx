"use client";
import React, { useState } from "react";
import loginSvg from "../../assets/login.svg";
import { addTask } from "@/services/taskService";
import { toast } from "react-toastify";
import { FaSpinner } from "react-icons/fa";

const page = () => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    status: "",
    createdBy: "68238631656a31196f76d45d",
  });
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await addTask(task);
      console.log(result);
      setTimeout(() => {
        setLoading(false);
        toast.success("Task added successfully", {
          position: "top-center",
        });
              setTask({
        title: "",
        description: "",
        status: "",
        createdBy: "68238631656a31196f76d45d",
      });
      },2000);

    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
      setLoading(false);
    }
  };
  return (
    <div className="grid grid-cols-12 justify-center">
      <div className="col-span-6 col-start-4 p-5">
        <div>
          <img className="w-32 h-32" src={loginSvg} alt="" />
        </div>
        <h1>Add your task</h1>
        {loading?(
          <div>
            <FaSpinner className="animate-spin text-3xl text-blue-500" />
            <span className="ml-3 text-lg text-gray-400">Adding Task....</span>
          </div>
        ):(<form action="#!" onSubmit={handleSubmit}>
          <div className="mt-4">
            <label
              htmlFor="task_title"
              className="block text-sm font-medium mb-2"
            >
              Title
            </label>
            <input
              type="text"
              className="w-full p-3 rounded-3xl bg-fray-800 focus:ring-gray-400 border border-gray-500"
              id="task_title"
              name="task_title"
              onChange={(e) => setTask({ ...task, title: e.target.value })}
              value={task.title}
            />
          </div>
          <div className="mt-4">
            <label
              htmlFor="task_title"
              className="block text-sm font-medium mb-2"
            >
              Description
            </label>
            <textarea
              type="text"
              rows={6}
              className="w-full p-3 rounded-3xl bg-fray-800 focus:ring-gray-400 border border-gray-500"
              id="task_title"
              name="task_title"
              onChange={(e) =>
                setTask({ ...task, description: e.target.value })
              }
              value={task.description}
            />
          </div>
          <div className="mt-4">
            <label htmlFor="" className="block text-sm">
              Status
            </label>
            <select
              id="task_status"
              name="task_status"
              className="w-full p-3 rounded-3xl bg-gray-700"
              onChange={(e) => setTask({ ...task, status: e.target.value })}
              value={task.status}
            >
              <option value="none" selected disabled>
                -----Select Option -----
              </option>
              <option value="Pending">Pending</option>
              <option value="Completed">COmpleted</option>
            </select>
          </div>
          <div className="mt-4 flex justify-center gap-4">
            <button className="bg-blue-600 py-2 px-4 rounded-md hover:bg-blue-400">
              Add Todo
            </button>
            <button className="bg-blue-600 py-2 px-4 rounded-md hover:bg-blue-400">
              Clear
            </button>
          </div>
        </form>)}
      </div>
    </div>
  );
};

export default page;
