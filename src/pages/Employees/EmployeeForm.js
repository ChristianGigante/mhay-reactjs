import React, { useState, useEffect } from "react";

import {
  Grid,
  // TextField,
  // makeStyles,
  // FormControl,
  // FormLabel,
  // RadioGroup,
  // FormControlLabel,
  // Radio,
} from "@material-ui/core";

import { useForm, Form } from "../../components/useForm";
import Controls from "../../components/controls/Controls";

import * as employeeService from "../../services/employeeService";

// const useStyle = makeStyles((theme) => ({
//   root: {
//     "& .MuiFormControl-root": {
//       width: "80%",
//       margin: theme.spacing(1),
//     },
//   },
// }));

const genderItems = [
  { id: "male", title: "Male" },
  { id: "female", title: "Female" },
  { id: "other", title: "Other" },
];

const initialFieldValues = {
  id: 0,
  fullName: "",
  email: "",
  mobile: "",
  city: "",
  gender: "male",
  departmentId: "",
  hiredDate: new Date(),
  isPermanent: false,
};

export default function EmployeeForm() {
  //   const [values, setValues, handleInputChange] = useState(initialFieldValues);

  //   const classes = useStyle();

  //   const handleInputChange = (e) => {
  //     const { name, value } = e.target;
  //     setValues({
  //       ...values,
  //       [name]: value,
  //     });
  //   };

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("fullName" in fieldValues)
      temp.fullName = fieldValues.fullName ? "" : "This field is required.";

    if ("email" in fieldValues)
      temp.email = /$^|.+@.+..+/.test(fieldValues.email)
        ? ""
        : "Email is not valid.";

    if ("mobile" in fieldValues)
      temp.mobile =
        fieldValues.mobile.length > 9
          ? ""
          : "Minimum of 10 number is required.";

    if ("departmentId" in fieldValues)
      temp.departmentId =
        fieldValues.departmentId.length !== 0 ? "" : "This field is required.";

    setErrors({
      ...temp,
    });
    if (fieldValues == values)
      return Object.values(temp).every((x) => x === "");
  };

  const { values, setValues, errors, setErrors, handleInputChange, resetForm } =
    useForm(initialFieldValues, true, validate);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) window.alert("testing...");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={6}>
          <Controls.Input
            label="Full Name"
            name="fullName"
            value={values.fullName}
            onChange={handleInputChange}
            error={errors.fullName}
          />
          <Controls.Input
            label="Email"
            value={values.email}
            name="email"
            onChange={handleInputChange}
            error={errors.email}
          />
          <Controls.Input
            label="Mobile"
            name="mobile"
            value={values.mobile}
            onChange={handleInputChange}
            error={errors.mobile}
          />
          <Controls.Input
            label="City"
            value={values.city}
            name="city"
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6}>
          <Controls.RadioGroup
            name="gender"
            label="Gender"
            value={values.gender}
            onChange={handleInputChange}
            items={genderItems}
          />

          <Controls.Select
            name="departmentId"
            label="Department ID"
            value={values.departmentId}
            onChange={handleInputChange}
            options={employeeService.getDepartmentCollection()}
            error={errors.departmentId}
          />
          <Controls.DatePicker
            name="hireDate"
            label="Hire Date"
            value={values.hireDate}
            onChange={handleInputChange}
          />
          <Controls.Checkbox
            name="isPermanent"
            label="Permanent Employee"
            value={values.isPermanent}
            onChange={handleInputChange}
          />

          <div>
            <Controls.Button type="submit" text="Submit" />
            <Controls.Button color="default" text="Reset" onClick={resetForm} />
          </div>

          {/* <FormControl>
            <FormLabel>Gender</FormLabel>

            <RadioGroup
              row={true}
              name="gender"
              value={values.gender}
              onChange={handleInputChange}
            >
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </FormControl> */}
        </Grid>
      </Grid>
    </Form>
  );
}
