import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import TimePicker from "@mui/lab/TimePicker";
import DateTimePicker from "@mui/lab/DateTimePicker";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import MobileDatePicker from "@mui/lab/MobileDatePicker";
import { LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { useState } from "react";
import { Button } from "@mui/material";
import Submitted from "../components/Submitted"

export default function Home() {
  const [value, setValue] = useState(new Date());
  const [isSubmit , setSubmit] = useState(false)

  const submitHandler = () => {
    setSubmit(true)
  }

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-blue-600 text-center">
        Book Appointments for Sandhya Gupta
      </h1>

      {isSubmit ? <Submitted /> : <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Stack spacing={3} className="my-10">
          {/* <DesktopDatePicker
          label="Date desktop"
          inputFormat="MM/dd/yyyy"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        /> */}
          <MobileDatePicker
            label="Date mobile"
            inputFormat="MM/dd/yyyy"
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
          />
          <TimePicker
            label="Time"
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
          />
          {/* <DateTimePicker
          label="Date&Time picker"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        /> */}

  
        <Button variant="contained" className="bg-blue-500" onClick={submitHandler}>Book 👍🏻</Button>
        </Stack>
      </LocalizationProvider>}
    </div>
  );
}
