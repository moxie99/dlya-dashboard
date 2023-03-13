import {
  Button,
  Card,
  CardActions,
  CardContent,
  Collapse,
  Rating,
  Typography,
  useTheme,
} from "@mui/material"
import React, { useState } from "react"

const Product = ({
  _id,
  title,
  description,
  number_of_courses,
  rating,
  category,
  supply,
  NumberOfStudent,
  certificate,
  instructor,
}) => {
  const theme = useTheme()

  const [isExpanded, setisExpanded] = useState(false)
  return (
    <Card
      sx={{
        backgroundImage: "none",
        backgroundColor: theme.palette.background.alt,
        borderRadius: "0.55rem",
      }}
    >
      <CardContent>
        <Typography
          sx={{ fontSize: 13.5 }}
          color={theme.palette.secondary[600]}
          gutterBottom
        >
          {category}
        </Typography>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography sx={{ mb: "2rem" }} color={theme.palette.secondary[400]}>
          {Number(number_of_courses).toFixed(2)}
        </Typography>
        <Rating value={rating} readOnly />
        <Typography variant="body2">{description}</Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="primary"
          size="small"
          onClick={() => setisExpanded(!isExpanded)}
        >
          See More
        </Button>
      </CardActions>
      <Collapse
        in={isExpanded}
        timeout="auto"
        unmountOnExit
        sx={{ color: theme.palette.neutral[300] }}
      >
        <CardContent>
          <Typography>Number of Students: {NumberOfStudent}</Typography>
          <Typography>Category :{category}</Typography>
          <Typography>Certificate: {certificate}</Typography>
          <Typography>Instructor: {instructor}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  )
}

export default Product
