import { CssBaseline, ThemeProvider } from "@mui/material"
import { createTheme } from "@mui/material/styles"
import { useMemo } from "react"
import { useSelector } from "react-redux"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { themeSettings } from "themes"
import Dashboard from "scenes/dashboard"
import Products from "scenes/products"
import Layout from "scenes/layout"
import Customers from "scenes/customers"
import Transactions from "scenes/transactions"
import Geography from "scenes/geography"
import Overview from "scenes/overview"
import Daily from "scenes/daily"
import Monthly from "scenes/monthly"
import Breakdown from "scenes/breakdown"
import Admin from "scenes/admin"
import Performance from "scenes/performance"
import CreateCourse from "scenes/courses"
import CreatePool from "scenes/pool"
function App() {
  const mode = useSelector((state) => state.global.mode)

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/courses" element={<Products />} />
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
              <Route path="/Createpool" element={<CreatePool />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  )
}

export default App