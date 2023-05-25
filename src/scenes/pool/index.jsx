import {
  Box,
  FormControl,
  FormHelperText,
  TextField,
  useTheme,
} from "@mui/material";
import CustomButton from "components/CustomButton";
import Header from "components/Header";
import { useState } from "react";
import { useCreatePoolQuery } from "state/poolApi";

const CreatePool = ({
  type,
  register,
  handleSubmit,
  handleImageChange,
  formLoading,
  onFinishHandler,
  propertyImage,
}) => {
  const theme = useTheme();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tableOfContest, setTableOfContest] = useState("");
  const [createPool, { isLoading }] = useCreatePoolQuery();

  // const attendees = tableOfContest.split(", ");

  // const poolObj = {
  //   object: "I attended the conference",
  //   voteCount: "0",
  //   percentage: "0",
  // };

  // const poolList = attendees.map((attendee) => {
  //   return { ...poolObj, object: attendee };
  // });

  // const onSubmit = () => {
  //   const data = {
  //     question: title,
  //     description: description,
  //     poolList: poolList,
  //   };
  // };

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="POOL" subtitle="Create a pool for election" />
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
              color={theme.palette.secondary[100]}
              sx={{
                fontWeight: 500,
                margin: "10px 0",
                fontSize: 16,
              }}
            >
              Enter Pool Title
            </FormHelperText>
            <TextField
              fullWidth
              required
              color="info"
              variant="outlined"
              id="outlined-basic"
              label="Pool Title"
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
          </FormControl>

          <FormControl>
            <FormHelperText
              sx={{
                fontWeight: 500,
                margin: "10px 0",
                fontSize: 16,
              }}
              color={theme.palette.secondary[100]}
            >
              Enter Pool Description
            </FormHelperText>
            <TextField
              multiline
              rows={4}
              required
              placeholder="Write Pool description"
              color="info"
              style={{
                width: "100%",
                background: "transparent",
                fontSize: "16px",
                borderColor: "rgba(0,0,0,0.23)",
                borderRadius: 6,
                padding: 10,
              }}
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            />
          </FormControl>

          <FormControl>
            <FormHelperText
              sx={{
                fontWeight: 500,
                margin: "10px 0",
                fontSize: 16,
              }}
              color={theme.palette.secondary[100]}
            >
              Enter Contestants sepearted with comma
            </FormHelperText>
            <TextField
              fullWidth
              required
              id="outlined-basic"
              color="info"
              variant="outlined"
              onChange={(event) => {
                setTableOfContest(event.target.value);
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
  );
};

export default CreatePool;
