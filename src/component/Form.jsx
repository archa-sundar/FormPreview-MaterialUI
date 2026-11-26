
import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  MenuItem,
  Grid,
  Card
} from "@mui/material";

import Preview from "./Preview";

function Form() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
    department: "",
    designation: "",
    qualification: "",
    experience: "",
    salary: "",
    address: "",
    joiningDate: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      age: "",
      gender: "",
      department: "",
      designation: "",
      qualification: "",
      experience: "",
      salary: "",
      address: "",
      joiningDate: ""
    });
  };

  return (
    <Box sx={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #e0d4ff, #c7d2fe)",
      p: 4
    }}>

      <Typography variant="h4" fontWeight="bold"
        textAlign="center" mb={1} color="#312e81">
        Employee Registration
      </Typography>

      <Typography textAlign="center" mb={4} color="text.secondary">
        Enter your details and preview your information
      </Typography>

      <Grid container spacing={3}>

      

        <Grid item xs={12} md={7}>
          <Card sx={{ p: 3, borderRadius: 4, boxShadow: 4 }}>

            <Typography variant="h5" fontWeight="bold"
              color="#4f46e5" mb={3}>
              Employee Details
            </Typography>

            <Grid container spacing={2}>

              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Full Name"
                  name="name" value={formData.name}
                  onChange={handleChange} />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Email Address"
                  name="email" value={formData.email}
                  onChange={handleChange} />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Phone Number"
                  name="phone" value={formData.phone}
                  onChange={handleChange} />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Age"
                  name="age" type="number"
                  value={formData.age} onChange={handleChange} />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField fullWidth select label="Gender"
                  name="gender" value={formData.gender}
                  onChange={handleChange}>
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                </TextField>
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField fullWidth select label="Department"
                  name="department" value={formData.department}
                  onChange={handleChange}>
                  <MenuItem value="IT">IT</MenuItem>
                  <MenuItem value="HR">HR</MenuItem>
                  <MenuItem value="Finance">Finance</MenuItem>
                  <MenuItem value="Marketing">Marketing</MenuItem>
                </TextField>
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Designation"
                  name="designation" value={formData.designation}
                  onChange={handleChange} />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Qualification"
                  name="qualification" value={formData.qualification}
                  onChange={handleChange} />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Experience"
                  name="experience" value={formData.experience}
                  onChange={handleChange} />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Salary"
                  name="salary" type="number"
                  value={formData.salary} onChange={handleChange} />
              </Grid>

              <Grid item xs={12}>
                <TextField fullWidth label="Address"
                  name="address" multiline rows={2}
                  value={formData.address} onChange={handleChange} />
              </Grid>

              <Grid item xs={12}>
                <TextField fullWidth label="Joining Date"
                  name="joiningDate" type="date"
                  InputLabelProps={{ shrink: true }}
                  value={formData.joiningDate}
                  onChange={handleChange} />
              </Grid>

            </Grid>

            <Box display="flex" justifyContent="flex-end"
              gap={2} mt={3}>

              <Button variant="outlined" color="error"
                onClick={handleReset}>
                Reset
              </Button>

              <Button variant="contained"
                sx={{ bgcolor: "#4f46e5" }}>
                Submit
              </Button>

            </Box>

          </Card>
        </Grid>

      

        <Grid item xs={12} md={5}>
          <Preview formData={formData} />
        </Grid>

      </Grid>
    </Box>
  );
}

export default Form;
