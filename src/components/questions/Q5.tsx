import React from "react";
import PersonAddAlt1OutlinedIcon from "@mui/icons-material/PersonAddAlt1Outlined";
import ArrowDropUpOutlinedIcon from "@mui/icons-material/ArrowDropUpOutlined";
import { Box, Paper } from "@mui/material";
import { useThemeContext } from "../../context";

const Q5 = () => {
  const { darkMode } = useThemeContext();
  return (
    <>
      <Paper
        className="max-w-[350px] p-2"
        sx={(theme) => ({
          backgroundColor: darkMode ? "rgba(0,0,0,0.2)" : "rgba(180,180,180,0.3)",
        })}
      >
        <div className="flex p-2 gap-2 items-center flex-grow-0 w-auto">
          <div className="iconDiv">
            <Box
              className="rounded-md p-2 text-blue-600"
              sx={{ backgroundColor: () => (darkMode ? "black" : "white") }}
            >
              <PersonAddAlt1OutlinedIcon />
            </Box>
          </div>
          <div className="rightDiv">
            <div className="">Adverse effect & contraindications</div>
            <div className="flex flex-grow w-full items-end justify-end space-x-[5px]">
              <div className="text-lg font-bold justify-end block">546</div>
              <div className="w-full mb-1">
                <Graph1 />
              </div>
            </div>
          </div>
        </div>
        <Graph2 />
      </Paper>
      <div className="mt-4 text-2xl">
        <span className="text-red-600">Note:</span>I couldn't find the similar icon as per given in
        Question PDF File.
        <p>The charts has been created using HTML div.</p>
      </div>
    </>
  );
};

const Graph1 = () => {
  return (
    <div className="flex flex-col">
      <div className="flex space-x-[3px] h-[5px] w-2/3">
        <div className="bg-gray-400 w-full rounded overflow-hidden">
          <div className="bg-blue-600 w-[100%] h-full"></div>
        </div>
        <div className="bg-gray-400 w-full rounded overflow-hidden">
          <div className="bg-orange-600 w-[25%] h-full"></div>
        </div>
      </div>
    </div>
  );
};
const Graph2 = () => {
  const { darkMode } = useThemeContext();
  const data = [
    {
      value1: 35,
      value2: 65,
    },
    {
      value1: 60,
      value2: 30,
    },
    {
      value1: 35,
      value2: 65,
    },
    {
      value1: 90,
      value2: 20,
    },
    {
      value1: 35,
      value2: 65,
    },
    {
      value1: 20,
      value2: 80,
    },
    {
      value1: 20,
      value2: 80,
    },
  ];
  return (
    <Box
      className="rounded-md p-2 max-w-[90%] ml-2"
      sx={(theme) => ({
        backgroundColor: darkMode ? "black" : "white",
      })}
    >
      <div className="flex gap-4 items-center">
        <div className="graph flex gap-[5px] h-[40px]">
          {data.map((row, index) => {
            const h1 = Math.max(0, (row.value1 / (row.value1 + row.value2)) * 100 - 2);
            const h2 = Math.max(0, (row.value2 / (row.value1 + row.value2)) * 100 - 2);
            return (
              <div className="flex-col w-[5px]" key={index}>
                <div className="bg-orange-600 rounded-md" style={{ height: `${h1}%` }}></div>
                <div className="bg-white" style={{ height: `4%` }}></div>
                <div className="bg-blue-600 rounded-md" style={{ height: `${h2}%` }}></div>
              </div>
            );
          })}
        </div>
        <div className="">
          <div className="">Similarity measures between molecules</div>
          <div className="flex gap-1 items-end">
            <div className="text-lg font-bold justify-end block">125%</div>
            <div className="text-green-600">
              <ArrowDropUpOutlinedIcon />
              <span>10%</span>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Q5;
