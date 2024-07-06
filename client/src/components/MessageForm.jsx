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
      <div className="px-24 bg-[#] ">
        <div className="pt-10 pb-16 relative">
          <h2 className=" text-3xl font-extrabold tracking-wide mb-8 text-center text-[#000] relative">
            Send Us A Message
          </h2>
          <form className=" flex flex-col ">
            <div className="flex gap-8">
              <div className="flex flex-col ">
                <label htmlFor="" className="text-lg font-semibold  ">
                  First Name
                </label>
                <input
                  type="text"
                  className=""
                  placeholder="Please Enter First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="" className="text-lg font-semibold ">
                  Last Name
                </label>
                <input
                  type="text"
                  className=""
                  placeholder="Please Enter Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
            <div className="flex gap-8">
              <div className="flex flex-col">
                <label htmlFor="" className="text-lg font-semibold ">
                  Email
                </label>
                <input
                  type="text"
                  className=""
                  placeholder="Please Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="" className="text-lg font-semibold ">
                  Phone
                </label>
                <input
                  type="text"
                  className=""
                  placeholder="Please Enter Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-lg font-semibold ">
                Message
              </label>
              <textarea
                className=""
                placeholder="Enter Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="py-3 px-9 my-14 w-fit font-bold rounded-lg text-2xl bg-white"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default MessageForm;
