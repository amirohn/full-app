import {
  FormParent,
  CardChild,
  FormContainer,
} from "../signUpForm/SignUpForm.styled";
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
import {validate} from "../signUpForm/validate";

export const LoginCard = () => {
  // const [isValid, setIsValid] = useState(true);
  const [errors, setErrors] = useState({});
  const [focused, setFocused] = useState({});
  const [content, setContent] = useState({
    username: "",
    passwordI: "",
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
    setErrors(validate(content, "login"));
  }, [content]);
  !errors.isValid && content.username && content.passwordI
    ? (content.isValid = false)
    : (content.isValid = true);

  const checkErrors = () => {
    console.log("you have submited");
  };

  return (
    <>
      <FormParent
        style={{maxWidth: "600px", margin: "auto", padding: "4rem 0"}}
      >
        <FormContainer>
          <Card className="formCard">
            <CardContent>
              <CardChild>
                <Stack spacing={6}>
                  <Typography as="h3" fontWeight="bold" fontSize="2rem">
                    Login
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
                    <Button
                      sx={{
                        width: "180px  ",
                        padding: "1rem 0",
                        fontWeight: "bold",
                      }}
                    >
                      <Link href="sign-up-form"> Sign Up</Link>
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
