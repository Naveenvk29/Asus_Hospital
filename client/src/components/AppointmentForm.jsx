import { useState } from "react";

const AppointmentForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nic, setNic] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [department, setDepartment] = useState("Pediatrics");
  const [doctorFirstName, setDoctorFirstName] = useState("");
  const [doctorLastName, setDoctorLastName] = useState("");
  const [address, setAddress] = useState("");
  const [hasVisited, setHasVisited] = useState(false);

  const departmentsArray = [
    "Pediatrics",
    "Orthopedics",
    "Cardiology",
    "Neurology",
    "Oncology",
    "Radiology",
    "Physical Therapy",
    "Dermatology",
    "ENT",
  ];

  return (
    <>
      <div className="container px-[24rem] pb-[60px] mr-[20px] -mt-[250px]">
        <h2 className="text-lg font-bold mb-5 underline">Appointment</h2>
        <form className="flex flex-col gap-8">
          <div className="flex gap-8 ">
            <input
              type="text"
              placeholder="First Name"
              className="flex-1  py-3 pr-2 pl-[40px] rounded-lg border-gray-700"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              className="flex-1  py-3 pr-2 pl-[40px] rounded-lg border-gray-700"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="flex gap-8 ">
            <input
              type="text"
              placeholder="Email"
              className="flex-1  py-3 pr-2 pl-[40px] rounded-lg border-gray-700"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="number"
              placeholder="Mobile Number"
              className="flex-1  py-3 pr-2 pl-[40px] rounded-lg border-gray-700"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="flex gap-8 ">
            <input
              type="number"
              placeholder="NIC"
              className="flex-1  py-3 pr-2 pl-[40px] rounded-lg border-gray-700"
              value={nic}
              onChange={(e) => setNic(e.target.value)}
            />
            <input
              type="date"
              placeholder="Date of Birth"
              className="flex-1  py-3 pr-2 pl-[40px] rounded-lg border-gray-700"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </div>
          <div className="flex gap-8 ">
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="flex-1  py-3 pr-2 pl-[40px] rounded-lg border-gray-700"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <input
              type="date"
              placeholder="Appointment Date"
              className="flex-1  py-3 pr-2 pl-[40px] rounded-lg border-gray-700"
              value={appointmentDate}
              onChange={(e) => setAppointmentDate(e.target.value)}
            />
          </div>
          <div className="flex gap-8 ">
            <select
              className="flex-1  py-3 pr-2 pl-[40px] rounded-lg border-gray-700"
              value={department}
              onChange={(e) => {
                setDepartment(e.target.value);
                setDoctorFirstName("");
                setDoctorLastName("");
              }}
            >
              {departmentsArray.map((depart, index) => {
                return (
                  <option value={depart} key={index}>
                    {depart}
                  </option>
                );
              })}
            </select>
            <select
              value={`${doctorFirstName} ${doctorLastName}`}
              className="flex-1  py-3 pr-2 pl-[40px] rounded-lg border-gray-700"
              onChange={(e) => {
                const [firstName, lastName] = e.target.value.split(" ");
                setDoctorFirstName(firstName);
                setDoctorLastName(lastName);
              }}
              disabled={!department}
            >
              <option value="">Select Doctor</option>
            </select>
          </div>
          <textarea
            rows="3"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="flex-1  py-3 pr-2 pl-[40px] rounded-lg border-gray-700"
            placeholder="Address"
          />
          <div className="flex gap-5 text-lg font-semibold ">
            <p>Have you visited before?</p>
            <input
              type="checkbox"
              className="px-4 py-2"
              checked={hasVisited}
              onChange={(e) => setHasVisited(e.target.checked)}
            />
          </div>
          <button className="bg-green-500 text-white text-lg px-4 py-2 rounded cursor-pointer  hover:bg-green-800">
            GET APPOINTMENT
          </button>
        </form>
      </div>
    </>
  );
};

export default AppointmentForm;
