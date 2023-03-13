import {
  Box,
  FormControl,
  FormHelperText,
  TextField,
  TextareaAutosize,
  Stack,
  useTheme,
} from "@mui/material"
import { useState } from "react"
import CustomButton from "./CustomButton"
import Header from "./Header"

const Form = ({
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
      <Header title="COURSE" subtitle="Create a course here" />
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
              Enter Course Title
            </FormHelperText>
            <TextField
              fullWidth
              required
              color="info"
              variant="outlined"
              id="outlined-basic"
              label="Course Title"
              onChange={(event) => {
                setTitle(event.target.value)
              }}
            />
          </FormControl>
          <FormControl>
            <FormHelperText
              sx={{
                fontWeight: 500,
                margin: "10px 0",
                fontSize: 16,
                color: "#11142d",
              }}
            >
              Enter Course Instructor
            </FormHelperText>
            <TextField
              fullWidth
              required
              color="info"
              variant="outlined"
              id="outlined-basic"
              label="Course Instructor"
              onChange={(event) => {
                setInstructor(event.target.value)
              }}
            />
          </FormControl>
          <FormControl>
            <FormHelperText
              sx={{
                fontWeight: 500,
                margin: "10px 0",
                fontSize: 16,
                color: "#11142d",
              }}
            >
              Enter Course Description
            </FormHelperText>
            <TextField
              multiline
              rows={4}
              required
              placeholder="Write Course description"
              color="info"
              style={{
                width: "100%",
                background: "transparent",
                fontSize: "16px",
                borderColor: "rgba(0,0,0,0.23)",
                borderRadius: 6,
                padding: 10,
                color: "#919191",
              }}
              onChange={(event) => {
                setDescription(event.target.value)
              }}
            />
          </FormControl>

          <Stack direction="row" gap={4}>
            <FormControl sx={{ flex: 1 }}>
              <FormHelperText
                sx={{
                  fontWeight: 500,
                  margin: "10px 0",
                  fontSize: 16,
                  color: "#11142d",
                }}
              >
                Enter CourseOutline
              </FormHelperText>
              <TextField
                fullWidth
                required
                multiline
                rows={4}
                color="info"
                variant="outlined"
                id="outlined-basic"
                label="Course Outline"
                onChange={(event) => {
                  setCourseOutline(event.target.value)
                }}
              />
            </FormControl>
            <FormControl>
              <FormHelperText
                sx={{
                  fontWeight: 500,
                  margin: "10px 0",
                  fontSize: 16,
                  color: "#11142d",
                }}
              >
                Enter Course total_hours
              </FormHelperText>
              <TextField
                fullWidth
                required
                id="outlined-basic"
                color="info"
                type="number"
                variant="outlined"
                onChange={(event) => {
                  setTotalHours(event.target.value)
                }}
              />
            </FormControl>
          </Stack>

          <FormControl>
            <FormHelperText
              sx={{
                fontWeight: 500,
                margin: "10px 0",
                fontSize: 16,
                color: "#11142d",
              }}
            >
              Enter Course Content
            </FormHelperText>
            <TextField
              fullWidth
              required
              id="outlined-basic"
              color="info"
              variant="outlined"
              onChange={(event) => {
                setTableOfContent(event.target.value)
              }}
            />
          </FormControl>

          <FormControl>
            <FormHelperText
              sx={{
                fontWeight: 500,
                margin: "10px 0",
                fontSize: 16,
                color: "#11142d",
              }}
            >
              Enter Courses
            </FormHelperText>
            <TextField
              fullWidth
              required
              id="outlined-basic"
              color="info"
              variant="outlined"
              onChange={(event) => {
                setCourses(event.target.value)
              }}
            />
          </FormControl>

          <Stack direction="row" gap={4}>
            <FormControl sx={{ flex: 1 }}>
              <FormHelperText
                sx={{
                  fontWeight: 500,
                  margin: "10px 0",
                  fontSize: 16,
                  color: "#11142d",
                }}
              >
                Select Course Category
              </FormHelperText>
              <TextField
                fullWidth
                required
                color="info"
                variant="outlined"
                id="outlined-basic"
                label="Title"
                onChange={(event) => {
                  setCategory(event.target.value)
                }}
              />
            </FormControl>
            <FormControl>
              <FormHelperText
                sx={{
                  fontWeight: 500,
                  margin: "10px 0",
                  fontSize: 16,
                  color: "#11142d",
                }}
              >
                Enter Course Video Clip Link
              </FormHelperText>
              <TextField
                fullWidth
                required
                id="outlined-basic"
                color="info"
                type="url"
                variant="outlined"
                onChange={(event) => {
                  setVideoclip(event.target.value)
                }}
              />
            </FormControl>
          </Stack>

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

export default Form
