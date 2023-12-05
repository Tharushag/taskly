"use client";

import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import IconButton from '@mui/material/IconButton';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import clsx from 'clsx';

import { useState, useRef } from 'react';
import OutsideClick from '@/app/ui/outsideClick';

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

  return (
    <div className="relative z-10">
      <OutsideClick onClick={closeDatePicker}>
        <IconButton 
          disabled={disabled} 
          className="bg-[#282828] hover:bg-[#2F2F2F] p-2 rounded-xl flex items-center justify-center cursor-pointer"
          onClick={handleDatePicker}
        >
          <CalendarMonthRoundedIcon className="text-white text-xl" />
        </IconButton>

        <div className={clsx(
          "absolute top-10 right-0",
          {"hidden": !open},
        )}>
          <ThemeProvider theme={darkTheme}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <StaticDatePicker value={value} onChange={handleChange} />
            </LocalizationProvider>
          </ThemeProvider>
        </div>
      </OutsideClick>
    </div>
  );
}

export default CustomDatePicker;
