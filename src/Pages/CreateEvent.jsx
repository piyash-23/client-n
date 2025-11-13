import React, { useState } from "react";

const CreateEvent = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    location: "",
    capacity: "",
  });
  const [errors, setErrors] = useState({});

  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === "number" ? Number(value) : value,
    });
  };

  const validateForm = () => {
    let newErrors = {};
    let isValid = true;

    if (!formData.title.trim()) {
      newErrors.title = "Event must have a title";
      isValid = false;
    }

    if (!formData.date) {
      newErrors.date = "Pick a date";
      isValid = false;
    } else if (new Date(formData.date) <= new Date(getTodayDate())) {
      newErrors.date = "Pick a future date";
      isValid = false;
    }

    if (formData.capacity < 1) {
      newErrors.capacity = "Capacity must be greater than 1";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Submit Confirm", formData);
      fetch();
    } else {
      console.log("Facing a problem while submitting");
    }
    try {
      const response = await fetch(
        "https://social-server-steel.vercel.app/events",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) {
        const result = await response.json();
        console.log("Server Response:", result);

        setFormData({
          title: "",
          description: "",
          date: "",
          location: "",
          capacity: 10,
        });
      } else {
        const errorData = await response.json();
        console.error("Submission Failed:", errorData);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div>
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 sm:p-6 lg:p-8">
          <div className="w-full max-w-2xl bg-white shadow-2xl rounded-xl overflow-hidden transform transition duration-500 hover:scale-[1.01]">
            <div className="bg-indigo-600 p-6 sm:p-8 text-white">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Create a new Event ✨
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
              <div>
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Title<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="EX: Technology summit 2023"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ${
                    errors.title ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.title && (
                  <p className="mt-1 text-sm text-red-500">{errors.title}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Description
                </label>
                <textarea
                  name="description"
                  id="description"
                  rows="4"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Please Give more details about this event"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
                ></textarea>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="date"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Date and Time<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="datetime-local"
                    name="date"
                    id="date"
                    min={getTodayDate()}
                    value={formData.date}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ${
                      errors.date ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.date && (
                    <p className="mt-1 text-sm text-red-500">{errors.date}</p>
                  )}
                  <p className="mt-1 text-xs text-gray-500">
                    You must choose a future date
                  </p>
                </div>

                <div>
                  <label
                    htmlFor="capacity"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Highest Capacity (People)
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    name="capacity"
                    id="capacity"
                    min="1"
                    value={formData.capacity}
                    onChange={handleChange}
                    placeholder="যেমন: 100"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ${
                      errors.capacity ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.capacity && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.capacity}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="location"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Event Location
                </label>
                <input
                  type="text"
                  name="location"
                  id="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="EX: Koshaibari Rail Crossing"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  Create The Event🎉
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateEvent;
