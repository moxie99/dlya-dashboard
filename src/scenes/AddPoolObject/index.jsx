import {
  Box,
  FormControl,
  FormHelperText,
  TextField,
  TextareaAutosize,
  Stack,
  useTheme,
} from "@mui/material"
import CustomButton from "components/CustomButton"
import Header from "components/Header"
import { useState } from "react"

const AddPoolObject = ({
  type,
  register,
  handleSubmit,
  handleImageChange,
  formLoading,
  onFinishHandler,
  propertyImage,
}) => {
  const theme = useTheme()
  const [title, setTitle] = useState("")
  const [instructor, setInstructor] = useState("")
  const [description, setDescription] = useState("")
  const [tableOfContent, setTableOfContent] = useState("")
  const [courses, setCourses] = useState("")
  const [category, setCategory] = useState("")
  const [videoclip, setVideoclip] = useState("")
  const [totalHours, setTotalHours] = useState("")
  const [courseOutline, setCourseOutline] = useState("")

  console.log({
    title,
    instructor,
    description,
    tableOfContent,
    courses,
    category,
    videoclip,
    totalHours,
    courseOutline,
  })

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="POOL OPTION" subtitle="Add a contestant to the pool" />
      <Box
        mt={2.5}
        borderRadius="15px"
        padding="20px"
        bgcolor={theme.palette.background.alt}
      >
        <form
          style={{
            marginTop: "20px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <FormControl>
            <FormHelperText
              sx={{
                fontWeight: 500,
                margin: "10px 0",
                fontSize: 16,
                color: "#11142d",
              }}
            >
              Enter Contestant Name
            </FormHelperText>
            <TextField
              fullWidth
              required
              color="info"
              variant="outlined"
              id="outlined-basic"
              label="Contestant Name"
              onChange={(event) => {
                setTitle(event.target.value)
              }}
            />
          </FormControl>

          <CustomButton
            type="submit"
            title={formLoading ? "Submitting..." : "Submit"}
            backgroundColor="#475be8"
            color="#fcfcfc"
          />
        </form>
      </Box>
    </Box>
  )
}

export default AddPoolObject
