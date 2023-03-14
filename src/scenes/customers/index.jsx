import React from "react"
import { Box, useTheme } from "@mui/material"
import { DataGrid } from "@mui/x-data-grid"
import Header from "components/Header"
import { useGetAccommodationQuery, useGetCustomersQuery } from "state/api"

const Customers = () => {
  const theme = useTheme()

  const { data, isLoading } = useGetAccommodationQuery()

  const columns = [
    { field: "_id", headerName: "ID", flex: 0.5 },
    { field: "accomodation_type", headerName: "Accomodation Type", flex: 0.5 },
    { field: "bed", headerName: "Bed", flex: 0.5 },
    {
      field: "phone_number",
      headerName: "Phone Number",
      flex: 0.5,
      renderCell: (params) => {
        return params.value.replace(/^(\d{3})(\d{3})(\d{4})/, "($1)$2-$3")
      },
    },
    { field: "RateCode", headerName: "RateCode", flex: 0.5 },
    { field: "roommate", headerName: "Room Mate", flex: 0.5 },
    { field: "fullname", headerName: "Full Name", flex: 0.5 },
    { field: "location", headerName: "Location", flex: 1 },
    { field: "offerOpened", headerName: "Offer Opened", flex: 1 },
    { field: "price", headerName: "Price", flex: 0.5 },
    {
      field: "image",
      headerName: "Image",
      width: 150,
      height: 150,
      borderRadius: 75,
      editable: true,
      renderCell: (params) => <img src={params.value} />, // renderCell will render the component
    },
  ]
  return (
    <Box m="1.5rem 2.5rem">
      <Header title="ACCOMODATION" subtitle="List of all Accomodations" />
      <Box
        mt="40px"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": { border: "none" },
          "& .MuiDataGrid-cell": { borderBottom: "none" },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderRadius: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: theme.palette.primary.light,
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            border: "none",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${theme.palette.secondary[300]} !important`,
          },
        }}
      >
        <DataGrid
          loading={isLoading || !data}
          rows={data.data || []}
          getRowId={(row) => row._id}
          columns={columns}
        />
      </Box>
    </Box>
  )
}

export default Customers
