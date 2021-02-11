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
  FormHelperText,
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
  const { register, handleSubmit, control, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  console.log(errors);

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
                  inputRef={register({
                    required: "First Name is required",
                  })}
                  placeholder="Enter Your First Name"
                  label="First Name"
                  variant="outlined"
                  fullWidth
                  className={classes.inputField}
                  error={Boolean(errors.firstName)}
                  helperText={errors.firstName?.message}
                />

                <TextField
                  name="lastName"
                  inputRef={register({
                    required: "Last Name is required",
                  })}
                  error={Boolean(errors.lastName)}
                  helperText={errors.lastName?.message}
                  placeholder="Enter Your Last Name"
                  label="Last Name"
                  variant="outlined"
                  fullWidth
                  className={classes.inputField}
                />

                <TextField
                  name="email"
                  inputRef={register({
                    required: "Email address is required",
                  })}
                  error={Boolean(errors.email)}
                  helperText={errors.email?.message}
                  placeholder="Enter Your E-mail Address"
                  label="E-mail"
                  variant="outlined"
                  fullWidth
                  className={classes.inputField}
                />

                <TextField
                  name="phone"
                  inputRef={register({
                    required: "Phone number is required",
                  })}
                  error={Boolean(errors.phone)}
                  helperText={errors.phone?.message}
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
                        error={Boolean(errors.date)}
                        helperText={errors.date?.message}
                      />
                    )}
                    name="date"
                    control={control}
                    defaultValue={null}
                    rules={{
                      required: "Date of Admission is required",
                    }}
                  />

                  <Controller
                    render={(props) => (
                      <KeyboardTimePicker
                        margin="normal"
                        label="Time of Admission"
                        fullWidth
                        value={props.value}
                        onChange={props.onChange}
                        error={Boolean(errors.time)}
                        helperText={errors.time?.message}
                      />
                    )}
                    name="time"
                    control={control}
                    defaultValue={null}
                    rules={{
                      required: "Time of Admission is required",
                    }}
                  />
                </MuiPickersUtilsProvider>

                <FormControl
                  className={classes.inputField}
                  error={Boolean(errors.gender)}
                >
                  <FormLabel>Choose Your Gender</FormLabel>
                  <RadioGroup row name="gender">
                    <FormControlLabel
                      value="female"
                      control={
                        <Radio
                          inputRef={register({
                            required: "Choose your gender",
                          })}
                        />
                      }
                      label="Female"
                    />
                    <FormControlLabel
                      value="male"
                      control={
                        <Radio
                          inputRef={register({
                            required: "Choose your gender",
                          })}
                        />
                      }
                      label="Male"
                    />
                    <FormControlLabel
                      value="other"
                      control={
                        <Radio
                          inputRef={register({
                            required: "Choose your gender",
                          })}
                        />
                      }
                      label="Other"
                    />
                  </RadioGroup>
                  <FormHelperText>{errors.gender?.message} </FormHelperText>
                </FormControl>

                <FormControl
                  fullWidth
                  className={classes.inputField}
                  error={Boolean(errors.course)}
                >
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
                    rules={{
                      required: "please choose your course",
                    }}
                  />
                  <FormHelperText>{errors.course?.message} </FormHelperText>
                </FormControl>

                <FormControlLabel
                  className={classes.inputField}
                  control={<Switch name="notification" inputRef={register} />}
                  label="Send me regular updates"
                />

                <FormControl
                  style={{ display: "block", marginBottom: 15 }}
                  error={Boolean(errors.tnc)}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="tnc"
                        inputRef={register({
                          required: "please agree our terms and conditions",
                        })}
                      />
                    }
                    label="I agree all terms and conditions"
                  />
                  <FormHelperText>{errors.tnc?.message} </FormHelperText>
                </FormControl>

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
