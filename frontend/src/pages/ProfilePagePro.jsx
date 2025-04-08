import React, { useEffect, useState } from "react";
import NavPro from "../component/NavPro";
import Footer from "../component/Footer";
import ProfilePro from "../component/ProfilePro";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProfilePagePro = () => {
  const { email, people } = useParams();
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const profileLoader = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get(
          `https://on-demand-service-m5nh.onrender.com/api/v1/provider-profile/${email}`
        );
        setProfileData(response.data);
      } catch (err) {
        setError("Failed to load profile data. As you have not updated the details yet.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    profileLoader();
  }, [email]);

  if (loading) {
    return <p className="text-center my-10">Loading profile...</p>;
  }

  if (error) {
    return (
      <div className="text-center my-10">
        <p className="text-red-500">{error}</p>
        <button
          className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 mt-4"
          onClick={() => window.location.reload()}
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div>
      <NavPro
        val1="Home"
        val2={"Appointment"}
        val3="Transactions"
        val4="Logout"
        email={email}
        people={people}
      />
      {profileData ? (
        <ProfilePro profileDetail={profileData} />
      ) : (
        <p className="text-center my-10">No profile data available.</p>
      )}
      <Footer />
    </div>
  );
};

export default ProfilePagePro;
