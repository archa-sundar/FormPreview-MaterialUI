
import React from "react";

import {
  Box,
  Typography,
  Card,
  CardContent,
  Avatar,
  Divider
} from "@mui/material";

function Preview({ formData }) {

  const personalDetails = [
    ["Email", formData.email],
    ["Phone", formData.phone],
    ["Age", formData.age],
    ["Gender", formData.gender],
    ["Address", formData.address]
  ];

  const professionalDetails = [
    ["Department", formData.department],
    ["Designation", formData.designation],
    ["Qualification", formData.qualification],
    ["Experience", formData.experience],
    ["Salary", formData.salary],
    ["Joining Date", formData.joiningDate]
  ];

  return (

    <Card sx={{
      borderRadius: 4,
      boxShadow: 4,
      overflow: "hidden"
    }}>

      <Box sx={{
        background: "linear-gradient(135deg, #4f46e5, #7c3aed)",
        p: 4,
        textAlign: "center",
        color: "white"
      }}>

        <Avatar sx={{
          width: 85,
          height: 85,
          margin: "auto",
          mb: 2,
          bgcolor: "white",
          color: "#4f46e5",
          fontSize: 35
        }}>
          {formData.name
            ? formData.name.charAt(0).toUpperCase()
            : "E"}
        </Avatar>

        <Typography variant="h5" fontWeight="bold">
          {formData.name || "Employee Name"}
        </Typography>

        <Typography>
          {formData.designation || "Employee Designation"}
        </Typography>

      </Box>

      <CardContent sx={{ p: 3 }}>

        <Typography variant="h6" fontWeight="bold"
          color="#4f46e5" mb={2}>
          Personal Information
        </Typography>

        {personalDetails.map(([label, value]) => (
          <Box mb={2} key={label}>
            <Typography variant="caption" color="text.secondary">
              {label}
            </Typography>

            <Typography fontWeight="medium">
              {value || "Not provided"}
            </Typography>
          </Box>
        ))}

        <Divider sx={{ my: 2 }} />

        <Typography variant="h6" fontWeight="bold"
          color="#4f46e5" mb={2}>
          Professional Information
        </Typography>

        {professionalDetails.map(([label, value]) => (
          <Box mb={2} key={label}>
            <Typography variant="caption" color="text.secondary">
              {label}
            </Typography>

            <Typography fontWeight="medium">
              {value || "Not provided"}
            </Typography>
          </Box>
        ))}

      </CardContent>

    </Card>
  );
}

export default Preview;
