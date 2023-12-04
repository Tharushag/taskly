"use client";

import { useState } from 'react';

import clsx from 'clsx';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import CustomIconButton from "@/app/ui/custom-icon-button";
import Checkbox from "@/app/ui/checkbox";
import TextBox from '@/app/ui/TextBox';
import DatePicker from '@/app/ui/datepicker';

function Task() {
  const [complete, setComplete] = useState(false);

  const handleComplete = (state) => {
    setComplete(state);
  }

  return (
    <div
      className={clsx(
        "p-6 rounded-3xl bg-[#1E1E1E] flex w-full h-fit grid grid-cols-[auto,1fr,auto] gap-4 items-center",
        { "opacity-50": complete }
      )}
    >
      <Checkbox onClick={handleComplete} />

      <TextBox
        style={clsx(
          "text-lg disabled",
          { "line-through": complete }
        )}
        text="Hello World!"
        disabled={complete ? true : false}
      />

      <div className="flex gap-2">
        <DatePicker disabled={complete} />

        <CustomIconButton disabled={complete}>
          <DeleteOutlineRoundedIcon className="text-white text-xl" />
        </CustomIconButton>
      </div>
    </div>
  )
}

export default Task;
