import React from "react";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";

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

// import React from "react";
// import ReactDOM from "react-dom";
// import Calendar from "react-github-contribution-calendar";

// const Calender = () => {
//   var values = "2022-03-01";
//   var until = "2023-01-08";
//   var weekNames = ["s", "m", "t", "w", "t", "f", "s"];
//   var monthNames = [
//     "1",
//     "2",
//     "3",
//     "4",
//     "5",
//     "6",
//     "7",
//     "8",
//     "9",
//     "10",
//     "11",
//     "12",
//   ];
//   return (
//     <Calendar
//       username={"shivamkumar24"}
//       values={values}
//       until={until}
//       weekNames={weekNames}
//       monthNames={monthNames}
//     />
//   );
// };

// export default Calender;
