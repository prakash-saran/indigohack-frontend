import React, {useState, useEffect } from 'react';
import './App.css';
import { 
  FormControl, 
  FormLabel, 
  RadioGroup, 
  FormControlLabel, 
  Radio, 
  TextField, 
  Box,
  InputLabel,
  Select,
  MenuItem,
  Checkbox
  } from '@mui/material';

function App() {
  const [type, setType] = useState('')
  const [fromAirport, setFromAirport] = useState('')
  const [toAirport, setToAirport] = useState('')
  const [isMilitary, setIsMilitary] = useState(false);
  const [isVaccinated, setIsVaccinated] = useState(false);
  const [isDocter, setIsDocter] = useState(false);
  const [isStudent, setIsStudent] = useState(false);


const onFormSubmit = (e) => {
  console.log(e)
}

  return (
    <div className="App">
      <FormControl onSubmit={onFormSubmit}>
        <FormLabel id="ticket-Booking"></FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="oneWay"
          name="radio-buttons-group"
          value={type}
          onChange={e => setType(e.target.value)}
        >
          <FormControlLabel value="oneWay" control={<Radio />} label="One-Way" />
          <FormControlLabel value="roundTrip" control={<Radio />} label="Round-Trip" />
        </RadioGroup>

        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <Select
          labelId="from-airport"
          id="demo-simple-select-standard"
          value={fromAirport}
          onChange={e => setFromAirport(e.target.value)}
          label="From"
        >
          <MenuItem value="NEW_DELHI"><em>New Delhi</em></MenuItem>
          <MenuItem value="NAVI_MUMBAI">Navi Mumbai</MenuItem>
          <MenuItem value="BANGOLURU">Bangoluru</MenuItem>
          <MenuItem value="HYDERABAD">Hyderabad</MenuItem>
        </Select>
        <Select
          labelId="to-airport"
          id="demo-simple-select-standard"
          value={toAirport}
          onChange={e => setToAirport(e.target.value)}
          label="To"
        >
          <MenuItem value="NEW_DELHI"><em>New Delhi</em></MenuItem>
          <MenuItem value="NAVI_MUMBAI">Navi Mumbai</MenuItem>
          <MenuItem value="BANGOLURU">Bangoluru</MenuItem>
          <MenuItem value="HYDERABAD">Hyderabad</MenuItem>
        </Select>
      </Box>
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <FormControlLabel control={<Checkbox
        checked={isMilitary}
        onChange={e => setIsMilitary(e.target.checked)}
        inputProps={{ 'aria-label': 'controlled' }}
      />} label="Military" />
      <FormControlLabel control={<Checkbox
        checked={isStudent}
        onChange={e => setIsStudent(e.target.checked)}
        inputProps={{ 'aria-label': 'controlled' }}
      />} label="Student" />
      <FormControlLabel control={<Checkbox
        checked={isDocter}
        onChange={e => setIsDocter(e.target.checked)}
        inputProps={{ 'aria-label': 'controlled' }}
      />} label="Docter" />
      <FormControlLabel control={<Checkbox
        checked={isVaccinated}
        onChange={e => setIsVaccinated(e.target.checked)}
        inputProps={{ 'aria-label': 'controlled' }}
      />} label="Vaccinated" />
    </Box>
    </FormControl>
    </div>
  );
}

export default App;
