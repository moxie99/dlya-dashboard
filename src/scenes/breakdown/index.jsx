import { Box, useTheme } from "@mui/material"
import BreakdownChart from "components/BreakdownChart"
import Header from "components/Header"
import React from "react"
import { useGetPoolsQuery } from "state/api"

const Breakdown = () => {
  const { data, isLoading } = useGetPoolsQuery()

  const theme = useTheme()
  const colors = [theme.palette.secondary[500], theme.palette.primary[300]]

  const fData = data?.data?.map(({ question, _id, totalVote }, i) => {
    return {
      id: _id,
      label: question,
      value: Number(totalVote),
      color: colors[i],
    }
  })

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="BREAKDOWN" subtitle="Breakdown of Sales By Category" />
      <Box mt="40px" height="75vh">
        <BreakdownChart dataExpected={fData} />
      </Box>
    </Box>
  )
}

export default Breakdown
