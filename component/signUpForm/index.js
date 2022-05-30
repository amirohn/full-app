import {FormParent, CardChild, FormContainer} from "./SignUpForm.styled";
import {
  Typography,
  Card,
  CardContent,
  TextField,
  Stack,
  Button,
  Checkbox,
  Box,
  Link,
} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {useState, useEffect} from "react";
import {controller, useFormContext} from "react-hook-form";
import {validate} from "./validate";

export const SignUpForm = () => {
  // const [isValid, setIsValid] = useState(true);
  const [errors, setErrors] = useState({});
  const [focused, setFocused] = useState({});
  const [content, setContent] = useState({
    username: "",
    email: "",
    passwordI: "",
    confirmPassword: "",
    value: "",
    isAccepted: false,
    isValid: true,
  });

  const handleChange = (event) => {
    event.target.name === "isAccepted"
      ? setContent({...content, [event.target.name]: event.target.checked})
      : setContent({...content, [event.target.name]: event.target.value});
  };
  const handleFocus = (event) => {
    setFocused({...focused, [event.target.name]: true});
  };
  console.log(errors);

  useEffect(() => {
    setErrors(validate(content));
  }, [content]);
  !errors.isValid &&
  content.username &&
  !errors.email &&
  content.passwordI &&
  content.confirmPassword &&
  content.passwordI === content.confirmPassword &&
  content.username &&
  content.isAccepted
    ? (content.isValid = false)
    : (content.isValid = true);

  const checkErrors = () => {
    console.log("you have submited");
  };

  return (
    <>
      <FormParent>
        <FormContainer>
          <Card className="formCard">
            <CardContent>
              <CardChild>
                <Stack spacing={6}>
                  <Typography as="h3" fontWeight="bold" fontSize="2rem">
                    Sign Up
                  </Typography>
                  <Box>
                    <TextField
                      id="outlined-basic"
                      label="username"
                      variant="outlined"
                      autoComplete="on"
                      name="username"
                      type="text"
                      value={content.username}
                      onChange={handleChange}
                      onBlur={handleFocus}
                      fullWidth
                    />
                    <Typography color="error" variant="body1">
                      {errors.username && focused.username && errors.username}
                    </Typography>
                  </Box>
                  <Box>
                    <TextField
                      id="outlined-basic"
                      label="email"
                      variant="outlined"
                      autoComplete="on"
                      type="text"
                      name="email"
                      value={content.email}
                      onChange={handleChange}
                      fullWidth
                      onBlur={handleFocus}
                    />
                    <Typography color="error" variant="body1">
                      {errors.email && focused.email && errors.email}
                    </Typography>
                  </Box>

                  <Box>
                    <TextField
                      id="outlined-basic"
                      label="Password"
                      variant="outlined"
                      autoComplete="on"
                      name="passwordI"
                      type="password"
                      value={content.passwordI}
                      onChange={handleChange}
                      fullWidth
                      onBlur={handleFocus}
                    />
                    <Typography color="error" variant="body1">
                      {errors.passwordI &&
                        focused.passwordI &&
                        errors.passwordI}
                    </Typography>
                  </Box>

                  <Box>
                    <TextField
                      id="outlined-basic"
                      label="confirm password"
                      variant="outlined"
                      autoComplete="on"
                      type="password"
                      name="confirmPassword"
                      value={content.confirmPassword}
                      onChange={handleChange}
                      fullWidth
                      onBlur={handleFocus}
                    />
                    <Typography color="error" variant="body1">
                      {errors.confirmPassword &&
                        focused.confirmPassword &&
                        errors.confirmPassword}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body1" color="initial">
                      I Agree to the Terms & Conditions
                      <Checkbox
                        {...content.isAccepted}
                        type="checkbox"
                        name="isAccepted"
                        value={content.isAccepted}
                        onChange={handleChange}
                        fullWidth
                        onBlur={handleFocus}

                        // inputProps={{"aria-label": "controlled"}}
                      />
                    </Typography>
                    <Typography color="error" variant="body1">
                      {errors.isAccepted &&
                        focused.isAccepted &&
                        errors.isAccepted}
                    </Typography>
                  </Box>
                  <Box>
                    <Button
                      sx={{
                        width: "180px  ",
                        padding: "1rem 0",
                        fontWeight: "bold",
                      }}
                    >
                      <Link href="#"> Login</Link>
                    </Button>
                    <Button
                      variant="contained"
                      type="submit"
                      sx={{width: "180px", padding: "1rem 0"}}
                      disabled={content.isValid}
                      onClick={checkErrors}
                    >
                      Submit
                    </Button>
                  </Box>
                </Stack>
              </CardChild>
            </CardContent>
          </Card>
        </FormContainer>
      </FormParent>
    </>
  );
};
