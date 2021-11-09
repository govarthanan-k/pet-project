import React, { useState, useEffect } from "react";
import TextBox from "./TextBox";
import Box from "@mui/material/Box";
import FormButton from "./FormButton";
import Alert from "@mui/material/Alert";
import { useRouter } from "next/router";
import DropDownList from "./DropDownList";
import { isValidName, isValidEmail } from "../../utils/validator";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

function AddCadidateForm() {
  //to get from backend
  const statusList = ["CV Screening", "TA need to be sent"];
  const possibleRoles = [
    "Not defined",
    "Associate",
    "Junior developer",
    "Mid - level developer",
    "Senior developer",
    "Senior technical developer",
    "Senior lead developer",
    "Principal engineer",
    "Frontend Technical analyst",
  ];
  const outcomes = ["In progress", "Declined", "Approved"];

  const router = useRouter();
  let [firstName, setFirstName] = useState("");
  let [surname, setSurname] = useState("");
  let [email, setEmail] = useState("");
  let [status, setStatus] = useState(statusList[0]);
  let [candidateAdditionFailure, setCandidateAdditionFailure] = useState(false);
  let [submitEnabled, setSubmitEnabled] = useState(false);
  let [possibleRole, setPossibleRole] = useState(possibleRoles[0]);
  let [outcome, setOutcome] = useState(outcomes[0]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setSubmitEnabled(validateForm());
  });

  const updateFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const updateSurname = (e) => {
    setSurname(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updateStatus = (e) => {
    setStatus(e.target.value);
  };

  const updatePossibleRole = (e) => {
    setPossibleRole(e.target.value);
  };
  const updateOutcome = (e) => {
    setOutcome(e.target.value);
  };
  const validateForm = () => {
    return (
      isValidName(firstName) && isValidName(surname) && isValidEmail(email)
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      let response = await fetch("http://localhost:3000/api/addNewCandidate", {
        method: "POST",
        body: JSON.stringify({
          firstName,
          surname,
          email,
          status,
          possibleRole,
          outcome,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const responseJson = await response.json();
      if (responseJson.status === "success") {
        router.push("http://localhost:3000/");
      } else {
        setCandidateAdditionFailure(true);
      }
    }
  };

  return (
    <>
      <Typography
        component="h1"
        variant="h5"
        style={{ textAlign: "center", marginTop: "20px", marginBottom: "20px" }}
      >
        Candidate Details
      </Typography>
      <Container maxWidth="xs">
        {candidateAdditionFailure && (
          <Alert severity="error" sx={{ m: 1, minWidth: "100%" }}>
            Unable to add candidate!!
          </Alert>
        )}

        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1 },
          }}
          onSubmit={handleSubmit}
        >
          <TextBox
            label="First Name*"
            value={firstName}
            handleChange={updateFirstName}
            validate={isValidName}
            errorText="Please enter valid first name"
          />
          <TextBox
            label="Surname*"
            value={surname}
            handleChange={updateSurname}
            validate={isValidName}
            errorText="Please enter valid surname"
          />
          <TextBox
            label="Email"
            value={email}
            handleChange={updateEmail}
            validate={isValidEmail}
            errorText="Please enter valid email id"
          />

          <DropDownList
            items={statusList}
            handleChange={updateStatus}
            value={status}
            label="Status"
          />
          <DropDownList
            items={possibleRoles}
            handleChange={updatePossibleRole}
            value={possibleRole}
            label="Possible Role"
          />
          <DropDownList
            items={outcomes}
            handleChange={updateOutcome}
            value={outcome}
            label="Outcome"
          />

          <FormButton
            label="Submit"
            buttonType="submit"
            disabled={!submitEnabled}
          />
        </Box>
      </Container>
    </>
  );
}

export default AddCadidateForm;
