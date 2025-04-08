import React, { useEffect, useState } from "react";
import hello from "../assets/hello.png";
import UpdateProvider from "../pages/UpdateProvider";
import NavPro from "./NavPro";
import axios from "axios";
import { useParams } from "react-router-dom";
import { toast, Bounce } from "react-toastify";

const ProviderDashboard = () => {
  const [Available, setAvailable] = useState(false);
  const { email, people } = useParams();
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false); 

  useEffect(() => {
    const fetchAvailable = async () => {
      setLoading(true); // Set loading to true before making the request
      try {
        const response = await axios.get(
          `https://on-demand-service-m5nh.onrender.com/api/v1/check-avail/${email}`
        );
        if (response.data.provider.isAvaliable) {
          setAvailable(true);
        } else {
          setAvailable(false);
        }
      } catch (error) {
        console.error("Error fetching availability status:", error);
      } finally {
        setLoading(false); 
      }
    };

    fetchAvailable();
  }, [email]);

  const updateHandle = () => {
    setShow(!show);
  };

  const handletomakeAvailable = async () => {
    setLoading(true); 
    try {
      const response = await axios.patch(
        `https://on-demand-service-m5nh.onrender.com/api/v1/is-available/${email}`
      );
      console.log(response.data)
      if(response.data.provider.isAvaliable){
        setAvailable(true)
        toast.success("🦄 You are now available!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
      else{
        setAvailable(false);
        toast.success("🦄 You are now offline!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
      
    } catch (error) {
      console.log(error);
      toast.error("❌ Something went wrong! Please try again later.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } finally {
      setLoading(false); // Reset loading state after the request completes
    }
  };

  return (
    <div>
      <NavPro
        val1="Home"
        val2="Appointments"
        val3="Transactions"
        val4="Logout"
        email={email}
        people={people}
      />
      {show && <UpdateProvider className="" show={setShow} />}
      <div className="sm:px-20 py-10 px-10 bg-[#fff7e1]" style={{ minHeight: "90vh" }}>
        <p className="text-gray-400">
          Are you new to the platform? Don't forget to fill out further details.
        </p>
        <button
          className="p-2 bg-blue-400 rounded-md w-max my-4 text-white"
          onClick={updateHandle}
        >
          Update details
        </button>
        <p className="text-6xl font-semibold font-mono text-center">Hello 😊</p>
        <img
          src={hello}
          alt="Hello Illustration"
          className="sm:w-[40vw] w-[60vw] h-[30vh] mx-auto"
        />
        <div className="text-center text-xl font-mono font-medium">Turn your availability On 🟢 and Off 🔴</div>
        <div className="flex justify-center sm:my-20">
          <button
            className={`p-2 rounded-md text-white w-max mx-auto ${
              Available ? "bg-green-700" : "bg-red-500"
            }`}
            onClick={handletomakeAvailable}
            disabled={loading} 
          >
            {loading ? "Updating..." : Available ? "You are now available to Work!" : "You are not available!"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProviderDashboard;
