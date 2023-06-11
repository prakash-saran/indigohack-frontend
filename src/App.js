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
  Checkbox,
  List,
  Button,
  } from '@mui/material';
  import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

import axios from 'axios'

function App() {
  const [type, setType] = useState('')
  const [fromAirport, setFromAirport] = useState('')
  const [toAirport, setToAirport] = useState('')
  const [isMilitary, setIsMilitary] = useState(false);
  const [departureDate, setDepartureDate] = useState('')
  const [returnDate, setReturnDate] = useState('')
  const [numberOfPassanger, setNumberOfPassanger] = useState('1')
  const [currency, setCurrency] = useState('INR');
  const [isVaccinated, setIsVaccinated] = useState(false);
  const [isDocter, setIsDocter] = useState(false);
  const [isStudent, setIsStudent] = useState(false);
  const [isSearchingFlights, setIsSearchingFlights] = useState(false);

  const rows = [
    { id: 1, from: 'delhi', firstName: 'mumbai', price: 3500 },
    { id: 2, from: 'mumbai', firstName: 'chennai', price: 4200 },
    { id: 3, from: 'chenai', firstName: 'konkata', price: 45 },
    { id: 4, from: 'kolkata', firstName: 'delhi', price: 16 },
  ];

  const columns: GridColDef[]  = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    { field: 'price', headerName: 'Price', type: 'number', width: 90 }
  ];
  

const bookFlight = async (e) => {
  setIsSearchingFlights(true);
  const resp = await axios.post('http://localhost:3300/bookings', {
    name: 'prakash',
    fromAirport,
    toAirport,
    type,
    departureDate,
    returnDate,
    currency,
    numberOfPassanger,
  });
  console.log(resp);
}

  return (
    <div className="App">
      <FormControl>
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
        <TextField id="outlined-basic" label="Departure" variant="outlined" value={departureDate} />

      </Box>
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Return Date" variant="outlined" value={returnDate} disabled={type === 'roundTrip'}/> 
      <TextField id="outlined-basic" label="Number of Passangers" variant="outlined" value={numberOfPassanger}/>
      <TextField id="outlined-basic" label="Amount In Currency" variant="outlined" value={currency}/>
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

    {!isSearchingFlights && <Button variant="contained" style={{ width: '200px', textAlign: 'center' }} onClick={e => setIsSearchingFlights(true)}>Search Flight</Button>}
    {isSearchingFlights && <Button variant="contained" onClick={e => bookFlight(true)}>Book Flight</Button>}

    {isSearchingFlights && <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />}
      </FormControl>
    </div>
  );
}

export default App;
