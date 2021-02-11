import React from "react";
import {
  TextField,
  FormControlLabel,
  Checkbox,
  FormLabel,
  FormControl,
  RadioGroup,
  Radio,
  InputLabel,
  Switch,
  Select,
  MenuItem,
  Button,
  Paper,
  Grid,
} from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";

import DateFnsUtils from "@date-io/date-fns";
import { makeStyles } from "@material-ui/core/styles";

import { useForm, Controller } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  inputField: {
    width: "100%",
    margin: theme.spacing(1, 0),
  },
}));

const Home = () => {
  const classes = useStyles();
  const { register, handleSubmit, control } = useForm();

  const onSubmit = (e) => {
    console.log(e);
  };

  return (
    <div className="box">
      <div className="box-secondary">
        <Paper elevation={3}>
          <Grid
            container
            spacing={3}
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={10} offset={2}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                  name="firstName"
                  inputRef={register}
                  placeholder="Enter Your First Name"
                  label="First Name"
                  variant="outlined"
                  fullWidth
                  className={classes.inputField}
                />

                <TextField
                  name="lastName"
                  inputRef={register}
                  placeholder="Enter Your Last Name"
                  label="Last Name"
                  variant="outlined"
                  fullWidth
                  className={classes.inputField}
                />

                <TextField
                  name="email"
                  inputRef={register}
                  placeholder="Enter Your E-mail Address"
                  label="E-mail"
                  variant="outlined"
                  fullWidth
                  className={classes.inputField}
                />

                <TextField
                  name="phone"
                  inputRef={register}
                  placeholder="Enter Your Phone Number"
                  label="Phone"
                  variant="outlined"
                  fullWidth
                  className={classes.inputField}
                />

                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <Controller
                    render={(props) => (
                      <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        label="Date of Admission"
                        value={props.value}
                        onChange={props.onChange}
                        fullWidth
                      />
                    )}
                    name="date"
                    control={control}
                    defaultValue={null}
                  />

                  <Controller
                    render={(props) => (
                      <KeyboardTimePicker
                        margin="normal"
                        label="Time of Admission"
                        fullWidth
                        value={props.value}
                        onChange={props.onChange}
                      />
                    )}
                    name="time"
                    control={control}
                    defaultValue={null}
                  />
                </MuiPickersUtilsProvider>

                <FormControl className={classes.inputField}>
                  <FormLabel>Choose Your Gender</FormLabel>
                  <RadioGroup row name="gender">
                    <FormControlLabel
                      value="female"
                      control={<Radio inputRef={register} />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio inputRef={register} />}
                      label="Male"
                    />
                    <FormControlLabel
                      value="other"
                      control={<Radio inputRef={register} />}
                      label="Other"
                    />
                  </RadioGroup>
                </FormControl>

                <FormControl fullWidth className={classes.inputField}>
                  <InputLabel id="demo-simple-select-label">
                    Select Your Course
                  </InputLabel>

                  <Controller
                    render={(props) => (
                      <Select value={props.value} onChange={props.onChange}>
                        <MenuItem value="">Choose your course</MenuItem>
                        <MenuItem value="Web Development">
                          Web Development
                        </MenuItem>
                        <MenuItem value="App Development">
                          App Development
                        </MenuItem>
                        <MenuItem value="UI/UX">UI/UX</MenuItem>
                      </Select>
                    )}
                    name="course"
                    control={control}
                    defaultValue=""
                  />
                </FormControl>

                <FormControlLabel
                  className={classes.inputField}
                  control={<Switch name="notification" inputRef={register} />}
                  label="Send me regular updates"
                />

                <FormControlLabel
                  style={{ display: "block", marginBottom: 15 }}
                  control={<Checkbox name="tnc" inputRef={register} />}
                  label="I agree all terms and conditions"
                />

                <Button variant="contained" color="primary" type="submit">
                  create new account
                </Button>
              </form>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </div>
  );
};

export default Home;
