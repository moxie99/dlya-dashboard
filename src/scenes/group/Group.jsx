import React, { useState } from "react"
import { DataGrid } from "@mui/x-data-grid"
import Header from "components/Header"
import {
  useGetFeedsQuery,
  useGetGroupsQuery,
  useGetTransactionsQuery,
} from "state/api"
import { Box, useTheme } from "@mui/material"
import DataGridCustomToolbar from "components/DataGridCustomToolbar"

const Groups = () => {
  const theme = useTheme()

  const { data, isLoading } = useGetGroupsQuery()

  const columns = [
    { field: "_id", headerName: "ID", flex: 1 },
    {
      field: "questions",
      headerName: "Number Of Questions In Group",
      flex: 1,
      sortable: false,
      renderCell: (params) => params.value.length,
    },
    {
      field: "answers",
      headerName: "Number Of answers In Group",
      flex: 1,
      sortable: false,
      renderCell: (params) => params.value.length,
    },
    {
      field: "bio",
      headerName: "Group Description",
      flex: 0.5,
      sortable: false,
      renderCell: (params) => params.value.length,
    },
    { field: "group_name", headerName: "Group Name", flex: 1 },
    {
      field: "group_members",
      headerName: "Group Members",
      flex: 1,
      sortable: false,
      renderCell: (params) => params.value.length,
    },

    {
      field: "files",
      headerName: "Files Exchanged In Groups",
      flex: 1,
      sortable: false,
      renderCell: (params) => params.value.length,
    },

    {
      field: "profile",
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
      <Header title="TRANSACTIONS" subtitle="List of transactions" />
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
        {/*<DataGrid
          loading={isLoading || !data}
          getRowId={(row) => row._id}
          rows={(data && data.transactions) || []}
          columns={columns}
          rowCount={(data && data.total) || 0}
          rowPerPageOptions={[20, 50, 100]}
          pagination
          page={page}
          pageSize={pageSize}
          paginationMode="server"
          sortingMode="server"
          onPageChange={(newPage) => setPage(newPage)}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          onSortModelChange={(newSortModel) => setSort(...newSortModel)}
          components={{ Toolbar: DataGridCustomToolbar }}
          componentsProps={{
            toolbar: { searchInput, setSearchInput, setSearch },
          }}
        />

        */}
        <DataGrid
          loading={isLoading || !data}
          rows={data?.data || []}
          getRowId={(row) => row._id}
          columns={columns}
        />
      </Box>
    </Box>
  )
}

export default Groups
