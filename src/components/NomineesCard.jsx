import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import FlexBetween from "./FlexBetween";
import CustomButton from "./CustomButton";
const NomineesCard = ({
  title,
  value,
  increase,
  icon,
  description,
  handleReject,
  handleAccept,
  _id,
  phone_number,
  supply,
  stat,
  positionId,
  poolId,
  date,
  nomination,
  handleAdminCreateAccount,
  email,
}) => {
  const theme = useTheme();

  const dateNow = new Date(date);

  const options = {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZone: "UTC",
  };

  const formattedDate = dateNow.toLocaleString("en-US", options);
  return (
    <Box
      gridColumn="span 2"
      gridRow="span 1"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      p="1.25rem 1rem"
      flex="1 1 100%"
      backgroundColor={theme.palette.background.alt}
      borderRadius="0.59rem"
    >
      <FlexBetween>
        <Typography variant="h6" sx={{ color: theme.palette.secondary[100] }}>
          {title}
        </Typography>

        {icon}
      </FlexBetween>
      <FlexBetween>
        <Typography variant="h6" sx={{ color: theme.palette.secondary[100] }}>
          {phone_number}
        </Typography>

        {supply}
      </FlexBetween>
      <FlexBetween>
        <Typography variant="h6" sx={{ color: theme.palette.secondary[100] }}>
          {stat}
        </Typography>

        {positionId}
      </FlexBetween>

      <FlexBetween>
        <Typography variant="h6" sx={{ color: theme.palette.secondary[100] }}>
          {poolId}
        </Typography>

        {nomination}
      </FlexBetween>

      <Typography
        variant="h3"
        fontWeight="600"
        sx={{ color: theme.palette.secondary[200] }}
      >
        {value}
      </Typography>

      <FlexBetween gap="1rem">
        <Typography
          variant="h5"
          fontStyle="italic"
          sx={{ color: theme.palette.secondary.light }}
        >
          {increase}
        </Typography>

        <Typography>{description}</Typography>
      </FlexBetween>

      <FlexBetween gap="1rem">
        <Typography
          variant="h5"
          fontStyle="italic"
          sx={{ color: theme.palette.secondary.light }}
        >
          {email}
        </Typography>

        <Typography>{formattedDate}</Typography>
      </FlexBetween>
      <FlexBetween>
        <CustomButton
          type="submit"
          backgroundColor={"red"}
          title="Reject"
          color={"white"}
          handleClick={handleReject}
        />

        <CustomButton
          type="submit"
          backgroundColor={"green"}
          title="Accept"
          handleClick={handleAccept}
          color={"white"}
        />
        <CustomButton
          type="submit"
          backgroundColor={"rgba(42, 45, 147, 1)"}
          title="Create Account"
          handleClick={handleAdminCreateAccount}
          color={"white"}
        />
      </FlexBetween>
    </Box>
  );
};

export default NomineesCard;
