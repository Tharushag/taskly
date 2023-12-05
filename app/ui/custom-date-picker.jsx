"use client";

import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import IconButton from '@mui/material/IconButton';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import clsx from 'clsx';

import { useState } from 'react';
import OutsideClick from '@/app/ui/outsideClick';
import useWindowDimensions from './use-window-dimensions';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function CustomDatePicker({disabled}) {
  const [open, setOpen] = useState(false);
  const handleDatePicker = () => setOpen(!open)
  const closeDatePicker = () => setOpen(false);

  const [value, setValue] = useState(dayjs());
  const handleChange = (newValue) => setValue(newValue);

  const error = console.error;
  console.error = (...args) => {
    if (/defaultProps/.test(args[0])) return;
    error(...args);
  };

  return (
    <div className="md:relative z-10">
      <OutsideClick onClick={closeDatePicker}>
        <IconButton 
          disabled={disabled} 
          className="bg-[#282828] hover:bg-[#2F2F2F] p-2 rounded-xl flex items-center justify-center cursor-pointer"
          onClick={handleDatePicker}
        >
          <CalendarMonthRoundedIcon className="text-white text-xl" />
        </IconButton>

        <div className={clsx(
          "absolute z-10 top-32 left-[50%] translate-x-[-50%] md:translate-x-0 md:top-10 md:left-[initial] md:right-0",
          {"hidden": !open},
        )}>
          <ThemeProvider theme={darkTheme}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <StaticDatePicker
                value={value} 
                onChange={handleChange} 
                onAccept={closeDatePicker}
              />
            </LocalizationProvider>
          </ThemeProvider>
        </div>
      </OutsideClick>
    </div>
  );
}

export default CustomDatePicker;
