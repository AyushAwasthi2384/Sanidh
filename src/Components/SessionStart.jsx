// import React from "react";
// import PropTypes from "prop-types";
// import TopNavbar from "./TopNavbar";
// import { IoIosArrowForward } from "react-icons/io";

// const SessionStart = () => {
//   return (
//     <div className="h-full flex flex-col gap-[1rem]">
//       <div>
//         <TopNavbar route={"Session"} userName={"Ayush Awasthi"} />
//       </div>
//       <div className="flex-col flex h-full bg-white rounded-3xl box-border p-6  ">
//         <div className="h-[4rem] w-full flex justify-between items-center">
//           <div>
//             <h1 className="text-2xl font-bold">
//               {" "}
//               Enter the details of patient
//             </h1>
//             <p className="text-xs text-red-600">* Denotes mandatory fields</p>
//           </div>
//           <div className="flex gap-2">
//             <button
//               type="button"
//               className=" h-10 p-3 px-4 flex items-center justify-center border-2 border-[#5271FF] rounded-2xl text-[#5271FF]"
//             >
//               Fetch from profile
//             </button>
//             <button
//               type="button"
//               className=" h-10 p-3 px-4 flex gap-3 items-center justify-center border bg-[#5271FF] rounded-2xl text-white"
//             >
//               Start Session{" "}
//               <span>
//                 <IoIosArrowForward />
//               </span>
//             </button>
//           </div>
//         </div>
//         <div className="w-full h-[3rem] text-gray-500 text-xl ">
//           {" "}
//           Basic
//           <hr />
//         </div>
//         <div className="grid grid-cols-3 w-full mb-2 gap-[1rem] ">
//           <div className="w-full h-[5rem] flex flex-col gap-2  ">
//             <label htmlFor="name" id="username" className=" text-gray-500">
//               First Name
//               <span className="text-red-500">*</span>
//             </label>
//             <input
//               type="text"
//               className="rounded-lg bg-[#F2F6FE] h-[3rem] outline-none focus:shadow-md p-3"
//             />
//           </div>
//           <div className="w-full h-[5rem] flex flex-col gap-2 ">
//             <label htmlFor="name" id="username" className=" text-gray-500">
//               Last Name
//               <span className="text-red-500">*</span>
//             </label>
//             <input
//               type="text"
//               className="rounded-lg bg-[#F2F6FE] h-[3rem] outline-none focus:shadow-md p-3"
//             />
//           </div>
//           <div className="w-full h-[5rem] flex flex-col gap-2 ">
//             <label htmlFor="name" id="username" className=" text-gray-500">
//               Gender
//               <span className="text-red-500">*</span>
//             </label>
//             <select className="rounded-lg bg-[#F2F6FE] h-[3rem] outline-none focus:shadow-md p-3">
//               <option value="">Select gender</option>
//               <option value="male">Male</option>
//               <option value="female">Female</option>
//               <option value="other">Others</option>
//             </select>
//           </div>
//           <div className="w-full h-[5rem] flex flex-col gap-2 ">
//             <label htmlFor="name" id="username" className=" text-gray-500">
//               Age
//               <span className="text-red-500">*</span>
//             </label>
//             <input
//               type="number"
//               className="rounded-lg bg-[#F2F6FE] h-[3rem] outline-none focus:shadow-md p-3"
//             />
//           </div>
//           <div className="w-full h-[5rem] flex flex-col gap-2 ">
//             <label htmlFor="name" id="username" className=" text-gray-500">
//               Weight
//               <span className="text-red-500">*</span>
//             </label>
//             <input
//               type="number"
//               className="rounded-lg bg-[#F2F6FE] h-[3rem] outline-none focus:shadow-md p-3"
//             />
//           </div>
//           <div className="w-full h-[5rem] flex flex-col gap-2 ">
//             <label htmlFor="name" id="username" className=" text-gray-500">
//               Height
//               <span className="text-red-500">*</span>
//             </label>
//             <input
//               type="number"
//               className="rounded-lg bg-[#F2F6FE] h-[3rem] outline-none focus:shadow-md p-3"
//             />
//           </div>
//           <div className="w-full h-[5rem] flex flex-col gap-2 ">
//             <label htmlFor="name" id="username" className=" text-gray-500">
//               Location
//               <span className="text-red-500">*</span>
//             </label>
//             <input
//               type="text"
//               className="rounded-lg bg-[#F2F6FE] h-[3rem] outline-none focus:shadow-md p-3"
//             />
//           </div>
//           <div className="w-full h-[5rem] flex flex-col gap-2 ">
//             <label htmlFor="name" id="username" className=" text-gray-500">
//               Email Id
//               <span className="text-red-500">*</span>
//             </label>
//             <input
//               type="text"
//               className="rounded-lg bg-[#F2F6FE] h-[3rem] outline-none focus:shadow-md p-3"
//             />
//           </div>
//         </div>
//         <div className="w-full h-[3rem] text-gray-500 text-xl mt-3 ">
//           {" "}
//           Advanced <hr />
//         </div>
//         <div className="grid grid-cols-3 w-full mb-2 gap-[1rem] items-center">
//           <div className="w-full h-[5rem] flex flex-col gap-2 ">
//             <label htmlFor="name" id="username" className=" text-gray-500">
//               Blood sugar level
//               <span className="text-red-500">*</span>
//             </label>
//             <div className="relative ">
//               {" "}
//               <input
//                 type="text"
//                 className="rounded-lg bg-[#F2F6FE] h-[3rem] outline-none focus:shadow-md p-3 w-full"
//               />
//               <span className="absolute right-2 top-3 text-gray-400">
//                 mg/dL
//               </span>
//             </div>
//           </div>
//           <div className="w-full h-[5rem] flex flex-col gap-2 ">
//             <label htmlFor="name" id="username" className=" text-gray-500">
//               Blood Pressure
//               <span className="text-red-500">*</span>
//             </label>
//             <div className="w-full flex gap-2 items-center">
//               <input
//                 type="number"
//                 className="rounded-lg bg-[#F2F6FE] h-[3rem] outline-none focus:shadow-md p-3 w-[50%]"
//               />
//               <span className="text-gray-500 text-2xl">/</span>
//               <input
//                 type="number"
//                 className="rounded-lg bg-[#F2F6FE] h-[3rem] outline-none focus:shadow-md p-3 w-[50%]"
//               />
//             </div>
//           </div>

//           <div className="w-full h-[5rem] flex flex-col gap-2 ">
//             <label htmlFor="name" id="username" className=" text-gray-500">
//               Oxygen level
//               <span className="text-red-500">*</span>
//             </label>
//             <div className="relative ">
//               {" "}
//               <input
//                 type="text"
//                 className="rounded-lg bg-[#F2F6FE] h-[3rem] outline-none focus:shadow-md p-3 w-full"
//               />
//               <span className="absolute right-4 top-3 text-gray-500">%</span>
//             </div>
//           </div>
//           <div className="w-full h-[5rem] flex flex-col gap-2 ">
//             <label htmlFor="name" id="username" className=" text-gray-500">
//               Dietary
//               <span className="text-red-500">*</span>
//             </label>
//             <select className="rounded-lg bg-[#F2F6FE] h-[3rem] outline-none focus:shadow-md p-3">
//               <option value="normal diet">Normal Diet </option>
//               <option value="low carbs">Low Carbs</option>
//               <option value="high protien">High Protien </option>
//             </select>
//           </div>
//           <div className="flex items-center h-full gap-3 mt-5 mx-5">
//             <input type="checkbox" />
//             <label
//               htmlFor="alcohol"
//               id="alcohol"
//               className="text-gray-600 text-md "
//             >
//               Consume Alcohol / Tobacco
//             </label>
//           </div>
//           <div className="flex items-center h-full gap-3 mt-5 mx-5">
//             <input type="checkbox" />
//             <label
//               htmlFor="alcohol"
//               id="alcohol"
//               className="text-gray-600 text-md "
//             >
//               Having Constant Fatigue
//             </label>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default SessionStart;

import React, { useState } from "react";

const SessionStart = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    age: "",
    weight: "",
    height: "",
    location: "",
    email: "",
    bloodSugar: "",
    bloodPressureSystolic: "",
    bloodPressureDiastolic: "",
    oxygenLevel: "",
    dietary: "normal diet",
    consumesAlcohol: false,
    hasFatigue: false,
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    // Basic validation rules
    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!formData.gender) newErrors.gender = "Gender is required";
    if (!formData.age) newErrors.age = "Age is required";
    if (!formData.weight) newErrors.weight = "Weight is required";
    if (!formData.height) newErrors.height = "Height is required";
    if (!formData.location) newErrors.location = "Location is required";

    // Email validation
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    // Advanced section validation
    if (!formData.bloodSugar)
      newErrors.bloodSugar = "Blood sugar level is required";
    if (!formData.bloodPressureSystolic || !formData.bloodPressureDiastolic) {
      newErrors.bloodPressure =
        "Both systolic and diastolic pressures are required";
    }
    if (!formData.oxygenLevel)
      newErrors.oxygenLevel = "Oxygen level is required";
    if (!formData.dietary) newErrors.dietary = "Dietary preference is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      // Handle form submission
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="h-full flex flex-col gap-4">
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold">Session</h1>
          <div className="text-sm">Welcome, User</div>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex-col flex h-full bg-white rounded-3xl box-border p-6"
      >
        <div className="h-16 w-full flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Enter the details of patient</h1>
            <p className="text-xs text-red-600">* Denotes mandatory fields</p>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              className="h-10 p-3 px-4 flex items-center justify-center border-2 border-[#5271FF] rounded-2xl text-[#5271FF]"
            >
              Fetch from profile
            </button>
            <button
              type="submit"
              className="h-10 p-3 px-4 flex gap-3 items-center justify-center border bg-[#5271FF] rounded-2xl text-white"
            >
              Start Session →
            </button>
          </div>
        </div>

        <div className="w-full h-12 text-gray-500 text-xl">
          Basic
          <hr />
        </div>

        <div className="grid grid-cols-3 w-full mb-2 gap-4">
          <div className="w-full flex flex-col gap-2">
            <label className="text-gray-500">
              First Name<span className="text-red-500">*</span>
            </label>
            <input
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="rounded-lg bg-[#F2F6FE] h-12 outline-none focus:shadow-md p-3"
            />
            {errors.firstName && (
              <span className="text-red-500 text-sm">{errors.firstName}</span>
            )}
          </div>

          <div className="w-full flex flex-col gap-2">
            <label className="text-gray-500">
              Last Name<span className="text-red-500">*</span>
            </label>
            <input
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="rounded-lg bg-[#F2F6FE] h-12 outline-none focus:shadow-md p-3"
            />
            {errors.lastName && (
              <span className="text-red-500 text-sm">{errors.lastName}</span>
            )}
          </div>

          <div className="w-full flex flex-col gap-2">
            <label className="text-gray-500">
              Gender<span className="text-red-500">*</span>
            </label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="rounded-lg bg-[#F2F6FE] h-12 outline-none focus:shadow-md p-3"
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Others</option>
            </select>
            {errors.gender && (
              <span className="text-red-500 text-sm">{errors.gender}</span>
            )}
          </div>

          <div className="w-full flex flex-col gap-2">
            <label className="text-gray-500">
              Age<span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="rounded-lg bg-[#F2F6FE] h-12 outline-none focus:shadow-md p-3"
            />
            {errors.age && (
              <span className="text-red-500 text-sm">{errors.age}</span>
            )}
          </div>

          <div className="w-full flex flex-col gap-2">
            <label className="text-gray-500">
              Weight<span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
              className="rounded-lg bg-[#F2F6FE] h-12 outline-none focus:shadow-md p-3"
            />
            {errors.weight && (
              <span className="text-red-500 text-sm">{errors.weight}</span>
            )}
          </div>

          <div className="w-full flex flex-col gap-2">
            <label className="text-gray-500">
              Height<span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="height"
              value={formData.height}
              onChange={handleChange}
              className="rounded-lg bg-[#F2F6FE] h-12 outline-none focus:shadow-md p-3"
            />
            {errors.height && (
              <span className="text-red-500 text-sm">{errors.height}</span>
            )}
          </div>

          <div className="w-full flex flex-col gap-2">
            <label className="text-gray-500">
              Location<span className="text-red-500">*</span>
            </label>
            <input
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="rounded-lg bg-[#F2F6FE] h-12 outline-none focus:shadow-md p-3"
            />
            {errors.location && (
              <span className="text-red-500 text-sm">{errors.location}</span>
            )}
          </div>

          <div className="w-full flex flex-col gap-2">
            <label className="text-gray-500">
              Email Id<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="rounded-lg bg-[#F2F6FE] h-12 outline-none focus:shadow-md p-3"
            />
            {errors.email && (
              <span className="text-red-500 text-sm">{errors.email}</span>
            )}
          </div>
        </div>

        <div className="w-full h-12 text-gray-500 text-xl mt-3">
          Advanced
          <hr />
        </div>

        <div className="grid grid-cols-3 w-full mb-2 gap-4 items-center">
          <div className="w-full flex flex-col gap-2">
            <label className="text-gray-500">
              Blood sugar level<span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                name="bloodSugar"
                value={formData.bloodSugar}
                onChange={handleChange}
                className="rounded-lg bg-[#F2F6FE] h-12 outline-none focus:shadow-md p-3 w-full"
              />
              <span className="absolute right-2 top-3 text-gray-400">
                mg/dL
              </span>
            </div>
            {errors.bloodSugar && (
              <span className="text-red-500 text-sm">{errors.bloodSugar}</span>
            )}
          </div>

          <div className="w-full flex flex-col gap-2">
            <label className="text-gray-500">
              Blood Pressure<span className="text-red-500">*</span>
            </label>
            <div className="w-full flex gap-2 items-center">
              <input
                type="number"
                name="bloodPressureSystolic"
                value={formData.bloodPressureSystolic}
                onChange={handleChange}
                className="rounded-lg bg-[#F2F6FE] h-12 outline-none focus:shadow-md p-3 w-1/2"
              />
              <span className="text-gray-500 text-2xl">/</span>
              <input
                type="number"
                name="bloodPressureDiastolic"
                value={formData.bloodPressureDiastolic}
                onChange={handleChange}
                className="rounded-lg bg-[#F2F6FE] h-12 outline-none focus:shadow-md p-3 w-1/2"
              />
            </div>
            {errors.bloodPressure && (
              <span className="text-red-500 text-sm">
                {errors.bloodPressure}
              </span>
            )}
          </div>

          <div className="w-full flex flex-col gap-2">
            <label className="text-gray-500">
              Oxygen level<span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                name="oxygenLevel"
                value={formData.oxygenLevel}
                onChange={handleChange}
                className="rounded-lg bg-[#F2F6FE] h-12 outline-none focus:shadow-md p-3 w-full"
              />
              <span className="absolute right-4 top-3 text-gray-500">%</span>
            </div>
            {errors.oxygenLevel && (
              <span className="text-red-500 text-sm">{errors.oxygenLevel}</span>
            )}
          </div>

          <div className="w-full flex flex-col gap-2">
            <label className="text-gray-500">
              Dietary<span className="text-red-500">*</span>
            </label>
            <select
              name="dietary"
              value={formData.dietary}
              onChange={handleChange}
              className="rounded-lg bg-[#F2F6FE] h-12 outline-none focus:shadow-md p-3"
            >
              <option value="normal diet">Normal Diet</option>
              <option value="low carbs">Low Carbs</option>
              <option value="high protein">High Protein</option>
            </select>
            {errors.dietary && (
              <span className="text-red-500 text-sm">{errors.dietary}</span>
            )}
          </div>

          <div className="flex items-center h-full gap-3 mt-5 mx-5">
            <input
              type="checkbox"
              name="consumesAlcohol"
              checked={formData.consumesAlcohol}
              onChange={handleChange}
              className="rounded"
            />
            <label className="text-gray-600 text-md">
              Consume Alcohol / Tobacco
            </label>
          </div>

          <div className="flex items-center h-full gap-3 mt-5 mx-5">
            <input
              type="checkbox"
              name="hasFatigue"
              checked={formData.hasFatigue}
              onChange={handleChange}
              className="rounded"
            />
            <label className="text-gray-600 text-md">
              Having Constant Fatigue
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SessionStart;
