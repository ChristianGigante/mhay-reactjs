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
  const { values, setValues, handleInputChange } = useForm(initialFieldValues);

  return (
    <Form>
      <Grid container>
        <Grid item xs={6}>
          <Controls.Input
            label="Full Name"
            name="fullName"
            value={values.fullName}
            onChange={handleInputChange}
          />
          <Controls.Input
            label="Email"
            value={values.email}
            name="email"
            onChange={handleInputChange}
          />
          <Controls.Input
            label="Mobile"
            name="mobile"
            value={values.mobile}
            onChange={handleInputChange}
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
            <Controls.Button color="default" text="Reset" />
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
