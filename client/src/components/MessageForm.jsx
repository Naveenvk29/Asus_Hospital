import { useState } from "react";

// import { toast } from "react-toastify";

const MessageForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  return (
    <>
      <div className="px-24 pt-10 pb-14 relative">
        <h2 className="mb-8 ml-[36rem] text-2xl tracking-wide text-gray-600 font-bold">
          Send Us A Message
        </h2>
        <form className="flex flex-col gap-8">
          <div className="flex gap-8">
            <input
              type="text"
              placeholder="First Name"
              className="flex-1 py-3 pr-3 pl-10 rounded-lg border border-gray-900"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              className="flex-1 py-3 pr-3 pl-10 rounded-lg border border-gray-900"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="flex gap-8">
            <input
              type="text"
              placeholder="Email"
              className="flex-1 py-3 pr-3 pl-10 rounded-lg border border-gray-900"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="number"
              placeholder="Mobile Number"
              className="flex-1 py-3 pr-3 pl-10 rounded-lg border border-gray-900"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <textarea
            rows={7}
            placeholder="Message"
            className="flex-1 py-3 pr-3 pl-10 rounded-lg border border-gray-900"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <div
            className="flex  items-center"
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <button
              type="submit"
              className="bg-green-500 py-3 px-9 pl-10 font-bold w-fit rounded-lg text-lg mb-8 "
            >
              Send
            </button>
          </div>
        </form>
        <span className=" absolute right-[-300px] top-[-300px] -z-10  ">
          <img src={"./Vector.png"} alt="vector" />
        </span>
      </div>
    </>
  );
};

export default MessageForm;
