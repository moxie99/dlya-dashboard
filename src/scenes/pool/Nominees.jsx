import React, { useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { useGetCoursesQuery, useGetNomineesQuery } from "state/api";
import Header from "components/Header";
import toast from "react-hot-toast";
import axios from "axios";
import { useEffect } from "react";
import NomineesCard from "components/NomineesCard";
const Nominees = () => {
  const { data, isLoading } = useGetCoursesQuery();

  const [nominees, setNominees] = useState([]);
  const [pools, setPools] = useState([]);
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const accessToken = localStorage.getItem("access_token");
        setAccessToken(accessToken);
        console.log("token", accessToken);
        const option = {
          headers: {
            Authorization: accessToken,
          },
        };

        const response = await axios.get(
          "https://dlya-backend-test.herokuapp.com/pool/general/pools",
          option
        );
        const res = await axios.get(
          "https://dlya-backend-test.herokuapp.com/pool/nominees/bafb57e4-4c3b-4407-9f11-5568f19565ca",
          option
        );
        setNominees(res.data.data);
        setPools(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  console.log("nomineess", nominees);
  const rejectNomination = async (data) => {
    const option = {
      headers: {
        Authorization: accessToken,
      },
    };

    try {
      const res = await axios.post(
        "https://dlya-backend-test.herokuapp.com/pool/nominee/request",
        data,
        option
      );
      toast.success(res.data.message, {
        position: "top-center",
        style: {
          width: "320px",
          height: "100px",
          backgroundColor: "#fff",
          color: "#61181E",
          fontSize: 18,
          fontWeight: "bold",
        },
        icon: "👏",
        duration: 3000,
        iconTheme: {
          primary: "#000",
          secondary: "#61181E",
        },
      });
    } catch (error) {
      toast.error(error.response.data.message, {
        position: "top-center",
        style: {
          width: "600",
          height: "100px",
          backgroundColor: "#fff",
          color: "#61181E",
          fontSize: 18,
          fontWeight: "bold",
        },
      });
    }
  };
  const acceptNomination = async (data) => {
    const option = {
      headers: {
        Authorization: accessToken,
      },
    };

    try {
      const res = await axios.post(
        "https://dlya-backend-test.herokuapp.com/pool/nominee/request",
        data,
        option
      );
      toast.success(res.data.message, {
        position: "top-center",
        style: {
          width: "400px",
          height: "150px",
          backgroundColor: "#fff",
          color: "#61181E",
          fontSize: 18,
          fontWeight: "bold",
        },
        icon: "👏",
        duration: 3000,
        iconTheme: {
          primary: "#000",
          secondary: "#61181E",
        },
      });
    } catch (error) {
      toast.error(error.response.data.message, {
        position: "top-center",
        style: {
          width: "600",
          height: "150px",
          backgroundColor: "#fff",
          color: "#61181E",
          fontSize: 18,
          fontWeight: "bold",
        },
      });
    }
  };

  const handleCreateAccount = async (data) => {
    const option = {
      headers: {
        Authorization: accessToken,
      },
    };

    try {
      const res = await axios.post(
        "https://dlya-backend-test.herokuapp.com/pool/nominee/account",
        data,
        option
      );
      toast.success(res.data.message, {
        position: "top-center",
        style: {
          width: "400px",
          height: "150px",
          backgroundColor: "#fff",
          color: "#61181E",
          fontSize: 18,
          fontWeight: "bold",
        },
        icon: "👏",
        duration: 3000,
        iconTheme: {
          primary: "#000",
          secondary: "#61181E",
        },
      });
    } catch (error) {
      toast.error(error.response.data.message, {
        position: "top-center",
        style: {
          width: "600",
          height: "150px",
          backgroundColor: "#fff",
          color: "#61181E",
          fontSize: 18,
          fontWeight: "bold",
        },
      });
    }
  };

  const isNonMobile = useMediaQuery("(min-width: 1000px)");
  return (
    <Box m="1.5rem 2.5rem">
      <Header
        title="ALL NOMINEES"
        subtitle="See the nominees for the different positions for election"
      />

      {data || !isLoading ? (
        <Box
          mt="20px"
          display="grid"
          gridTemplateColumns="repeat(4, minmax(0, 1fr))"
          justifyContent="space-between"
          rowGap="20px"
          columnGap="1.33%"
          sx={{ "& > div": { gridColumn: isNonMobile ? undefined : "span 4" } }}
        >
          {nominees?.map(
            (
              {
                _id,
                accepted,
                city,
                lastname,
                inApp,
                position,
                position_id,
                user_id,
                phone_number,
                state,
                pool_id,
                createdAt,
                nomination_id,
                email,
              },
              i
            ) => (
              <NomineesCard
                key={i}
                email={email}
                _id={_id}
                title={lastname}
                value={position}
                increase={inApp}
                icon={city}
                phone_number={phone_number}
                supply={state}
                stat={accepted}
                positionId={position_id}
                poolId={pool_id}
                date={createdAt}
                nomination={nomination_id}
                handleAccept={() =>
                  acceptNomination({
                    nomination_id: nomination_id,
                    value: true,
                  })
                }
                handleReject={() =>
                  rejectNomination({
                    nomination_id: nomination_id,
                    value: false,
                  })
                }
                handleAdminCreateAccount={() =>
                  handleCreateAccount({
                    email: email || "",
                    phone_number: phone_number,
                    city: city || state,
                    nomination_id: nomination_id,
                  })
                }
              />
            )
          )}
        </Box>
      ) : (
        <>Loading...</>
      )}
    </Box>
  );
};

export default Nominees;

// accepted: true;
// city: "CA";
// createdAt: "2023-05-12T01:44:41.040Z";
// email: "axgurah@gmail.com";
// firstname: "Divine";
// inApp: true;
// lastname: "Ezechukwu";
// nomination_id: "5f62618a-727a-4a18-85c8-43fd433208fd";
// phone_number: "+124059322733";
// pool_id: "bafb57e4-4c3b-4407-9f11-5568f19565ca";
// position: "Vice President 1";
// position_id: "123456";
// state: "CA";
// user_id: "d9052520-1149-4843-9bcf-60ef2492e128";
// __v: 0;
// _id: "645d9a1e70d78e8d1d994731";
