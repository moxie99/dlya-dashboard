import { CssBaseline, ThemeProvider } from "@mui/material"
import { createTheme } from "@mui/material/styles"
import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { themeSettings } from "themes";
import Dashboard from "scenes/dashboard";
import Products from "scenes/products";
import Layout from "scenes/layout";
import Customers from "scenes/customers";
import Transactions from "scenes/transactions";
import Geography from "scenes/geography";
import Overview from "scenes/overview";
import Daily from "scenes/daily";
import Monthly from "scenes/monthly";
import Breakdown from "scenes/breakdown";
import Admin from "scenes/admin";
import Performance from "scenes/performance";
import CreateCourse from "scenes/courses";
import CreatePool from "scenes/pool";
import AddPoolObject from "scenes/AddPoolObject";
import AddAccomodation from "scenes/accomodation";
import AddFeed from "scenes/feed";
import Addgroup from "scenes/group";
import Groups from "scenes/group/Group";
import Login from "scenes/login/Login";
import GetAllPools from "scenes/pool/allpoolrequest";
import Nominees from "scenes/pool/Nominees";

function App() {
  const mode = useSelector((state) => state.global.mode);

  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    const storedAccessToken = localStorage.getItem("access_token");
    if (storedAccessToken) {
      setAccessToken(storedAccessToken);
    }
  }, []);

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />

          <Routes>
            <Route element={<Layout />}>
              <Route
                path="/"
                element={
                  <Navigate
                    to={accessToken ? "/dashboard" : "/login"}
                    replace
                  />
                }
              />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/allcourses" element={<Products />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/overview" element={<Overview />} />
              <Route path="/daily" element={<Daily />} />
              <Route path="/monthly" element={<Monthly />} />
              <Route path="/breakdown" element={<Breakdown />} />
              <Route path="/admins" element={<Admin />} />
              <Route path="/performance" element={<Performance />} />
              <Route path="/addcourse" element={<CreateCourse />} />
              <Route path="/createpool" element={<CreatePool />} />
              <Route path="/addpoolobject" element={<AddPoolObject />} />
              <Route path="/accomodations" element={<Customers />} />
              <Route path="/addaccomodation" element={<AddAccomodation />} />
              <Route path="/addFeed" element={<AddFeed />} />
              <Route path="/feeds" element={<Transactions />} />
              <Route path="/creategroup" element={<Addgroup />} />
              <Route path="/groups" element={<Groups />} />
              <Route path="/allrequest" element={<GetAllPools />} />
              <Route path="/allnominees" element={<Nominees />} />
            </Route>
            <Route path="/login" element={<Login />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App
