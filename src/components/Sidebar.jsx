import React, { useState, useEffect } from "react"
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material"
import {
  SettingsOutlined,
  ChevronLeft,
  ChevronRightOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  Groups2Outlined,
  ReceiptLongOutlined,
  PublicOutlined,
  PointOfSaleOutlined,
  TodayOutlined,
  CalendarMonthOutlined,
  AdminPanelSettingsOutlined,
  TrendingUpOutlined,
  PieChartOutlined,
  AddBusinessOutlined,
  AddLinkOutlined,
  HomeMaxOutlined,
  FeedOutlined,
  GroupAddOutlined,
  GroupOutlined,
} from "@mui/icons-material"

import { useLocation, useNavigate } from "react-router-dom"
import profileImage from "../assets/DLYA.png";
import FlexBetween from "./FlexBetween"

const navItems = [
  {
    text: "Dashboard",
    icon: <HomeOutlined />,
  },
  {
    text: "Courses",
    icon: null,
  },
  {
    text: "AddCourse",
    icon: <AddBusinessOutlined />,
  },
  {
    text: "AllCourses",
    icon: <ShoppingCartOutlined />,
  },

  {
    text: "Transactions",
    icon: <ReceiptLongOutlined />,
  },
  {
    text: "Geography",
    icon: <PublicOutlined />,
  },
  {
    text: "Pool",
    icon: null,
  },
  {
    text: "Createpool",
    icon: <AddBusinessOutlined />,
  },
  {
    text: "AllNominees",
    icon: <AddBusinessOutlined />,
  },
  {
    text: "AllRequest",
    icon: <AddBusinessOutlined />,
  },
  {
    text: "AcceptRequest",
    icon: <AddBusinessOutlined />,
  },
  {
    text: "CreateProfile",
    icon: <AddBusinessOutlined />,
  },
  {
    text: "AddPoolObject",
    icon: <AddLinkOutlined />,
  },
  {
    text: "Overview",
    icon: <PointOfSaleOutlined />,
  },
  {
    text: "Daily",
    icon: <TodayOutlined />,
  },

  {
    text: "Monthly",
    icon: <CalendarMonthOutlined />,
  },
  {
    text: "Breakdown",
    icon: <PieChartOutlined />,
  },
  {
    text: "Accomodation",
    icon: null,
  },
  {
    text: "Accomodations",
    icon: <HomeMaxOutlined />,
  },
  {
    text: "AddAccomodation",
    icon: <AddBusinessOutlined />,
  },
  {
    text: "Admins",
    icon: <AdminPanelSettingsOutlined />,
  },
  {
    text: "Performance",
    icon: <TrendingUpOutlined />,
  },
  {
    text: "Feeds",
    icon: null,
  },
  {
    text: "Feeds",
    icon: <FeedOutlined />,
  },
  {
    text: "AddFeed",
    icon: <AddBusinessOutlined />,
  },
  {
    text: "Groups",
    icon: null,
  },
  {
    text: "Groups",
    icon: <GroupOutlined />,
  },
  {
    text: "CreateGroup",
    icon: <GroupAddOutlined />,
  },
  {
    text: "Chat",
    icon: null,
  },

  {
    text: "Events",
    icon: null,
  },
  {
    text: "Blog",
    icon: null,
  },
  {
    text: "News",
    icon: null,
  },
  {
    text: "Devotion",
    icon: null,
  },
];

const Sidebar = ({
  isNonMobile,
  drawerWidth,
  isSidebarOpen,
  setIsSidebarOpen,
  user,
}) => {
  const { pathName } = useLocation()
  const [active, setActive] = useState("")
  const navigate = useNavigate()

  const theme = useTheme()

  useEffect(() => {
    setActive(pathName?.substring(1))
  }, [pathName])

  return (
    <Box component="nav">
      {isSidebarOpen && (
        <Drawer
          open={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          variant="persistent"
          anchor="left"
          sx={{
            width: drawerWidth,
            "& .MuiDrawer-paper": {
              color: theme.palette.secondary[200],
              backgroundColor: theme.palette.background.alt,
              boxSizing: "border-box",
              borderWidth: isNonMobile ? 0 : "2px",
              width: drawerWidth,
            },
          }}
        >
          <Box width="100%">
            <Box m="1.5rem 2rem 2rem 3rem">
              <FlexBetween color={theme.palette.secondary.main}>
                <Box display="flex" align="center" gap="0.5rem">
                  <Typography variant="h4" fontWeight="bold">
                    DLYA DASHBOARD
                  </Typography>
                </Box>
                {!isNonMobile && (
                  <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    <ChevronLeft />
                  </IconButton>
                )}
              </FlexBetween>
            </Box>
            <List>
              {navItems.map(({ text, icon }) => {
                if (!icon) {
                  return (
                    <Typography key={text} sx={{ m: "2.25rem 0 1rem 3rem" }}>
                      {text}
                    </Typography>
                  )
                }
                const lctext = text.toLowerCase()
                return (
                  <ListItem key={text} disablePadding>
                    <ListItemButton
                      onClick={() => {
                        navigate(`/${lctext}`)
                        setActive(lctext)
                      }}
                      sx={{
                        backgroundColor:
                          active === lctext
                            ? theme.palette.secondary[300]
                            : "transparent",
                        color:
                          active === lctext
                            ? theme.palette.primary[600]
                            : theme.palette.secondary[100],
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          ml: "2rem",
                          color:
                            active === lctext
                              ? theme.palette.primary[600]
                              : theme.palette.secondary[200],
                        }}
                      >
                        {icon}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                      {active === lctext && (
                        <ChevronRightOutlined sx={{ ml: "auto" }} />
                      )}
                    </ListItemButton>
                  </ListItem>
                )
              })}
            </List>
          </Box>
          <Box>
            <Divider />

            <FlexBetween textTransform="none" gap="1rem" m="1.5rem 2rem 0 3rem">
              <Box
                component="img"
                alt="profile"
                src={profileImage}
                width="40px"
                height="40px"
                borderRadius="50%"
                sx={{ objectFit: "cover" }}
              />
              <Box textAlign="left">
                <Typography
                  fontWeight="bold"
                  fontSize="0.9rem"
                  sx={{ color: theme.palette.secondary[100] }}
                >
                  {user.name}
                </Typography>
                <Typography
                  fontWeight="bold"
                  fontSize="0.9rem"
                  sx={{ color: theme.palette.secondary[100] }}
                >
                  {user.occupation}
                </Typography>
              </Box>
              <SettingsOutlined sx={{ color: theme.palette.secondary[300] }} />
            </FlexBetween>
          </Box>
        </Drawer>
      )}
    </Box>
  )
}

export default Sidebar
