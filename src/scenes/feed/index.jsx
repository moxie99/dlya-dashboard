import {
  Box,
  FormControl,
  FormHelperText,
  TextField,
  TextareaAutosize,
  Stack,
  useTheme,
  Button,
  Typography,
} from "@mui/material"
import CustomButton from "components/CustomButton"
import Header from "components/Header"
import { useState } from "react"

const AddFeed = ({
  type,
  register,
  handleSubmit,
  handleImageChange,
  formLoading,
  onFinishHandler,
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
  const [propertyImage, setPropertyImage] = useState({ name: "", url: "" })

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
      <Header title="FEEDS" subtitle="Create a Feed here" />
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
              Enter Group Description
            </FormHelperText>
            <TextField
              multiline
              rows={4}
              required
              placeholder="Write Feed description"
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

          <Stack direction="column" gap={1} justifyContent="center" mb={2}>
            <Stack direction="row" gap={2}>
              <Typography
                color="#11142d"
                fontSize={16}
                fontWeight={500}
                my="10px"
              >
                Property Photo
              </Typography>

              <Button
                component="label"
                sx={{
                  width: "fit-content",
                  color: "#2ed480",
                  textTransform: "capitalize",
                  fontSize: 16,
                }}
              >
                Upload *
                <input
                  hidden
                  accept="image/*"
                  type="file"
                  onChange={(e) => {
                    // @ts-ignore
                    handleImageChange(e.target.files[0])
                  }}
                />
              </Button>
            </Stack>
            <Typography
              fontSize={14}
              color="#808191"
              sx={{ wordBreak: "break-all" }}
            >
              {propertyImage?.name}
            </Typography>
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

export default AddFeed
