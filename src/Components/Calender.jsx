import React from "react";
import { Box } from "@chakra-ui/react";
import ReactTooltip from "react-tooltip";
import GitHubCalendar from "react-github-calendar";
import { LIGHTSTEELBLUE } from "../Constants/Typography";

const Calender = () => {
  const selectLastHalfYear = (contributions) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 10;

    return contributions.filter((day) => {
      const date = new Date(day.date);
      const monthOfDay = date.getMonth();

      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };

  return (
    <div style={{ padding: "18px", backgroundColor: "rgb(198, 213, 206)" }}>
      <Box
        color={LIGHTSTEELBLUE}
        fontWeight="bold"
        fontSize={{ base: "22px", md: "45px" }}
        marginBottom="15px"
        textAlign={{ base: "center" }}
        textDecoration="underline"
      >
        Github Activity
      </Box>
      <GitHubCalendar
        style={{ margin: "auto" }}
        username="shivamkumar24"
        // transformData={selectLastHalfYear}
        blockSize={10}
        fontSize={15}
        hideColorLegend
        hideTotalCount
      >
        <ReactTooltip delayShow={20} html />
      </GitHubCalendar>
    </div>
  );
};

export default Calender;
