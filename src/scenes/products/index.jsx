import React, { useState } from "react"
import { Box, useMediaQuery } from "@mui/material"
import { useGetCoursesQuery, useGetProductsQuery } from "state/api"
import Header from "components/Header"
import Product from "components/Product"
const Products = () => {
  const { data, isLoading } = useGetCoursesQuery()

  const isNonMobile = useMediaQuery("(min-width: 1000px)")
  return (
    <Box m="1.5rem 2.5rem">
      <Header title="COURSES" subtitle="See your list of courses" />

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
          {data.data.map(
            (
              {
                _id,
                title,
                description,
                number_of_courses,
                rating,
                category,
                supply,
                stat,
                NumberOfStudent,
                certificate,
                instructor,
              },
              i
            ) => (
              <Product
                key={i}
                _id={_id}
                title={title}
                description={description}
                number_of_courses={number_of_courses}
                rating={rating}
                category={category}
                supply={supply}
                stat={stat}
                NumberOfStudent={NumberOfStudent}
                certificate={certificate}
                instructor={instructor}
              />
            )
          )}
        </Box>
      ) : (
        <>Loading...</>
      )}
    </Box>
  )
}

export default Products
