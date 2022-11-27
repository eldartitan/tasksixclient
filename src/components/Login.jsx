import React from "react";
import { useState } from "react";
import { Box, Button, Grid, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { getUser } from "../store/userSlice";

export default function Login() {
    const dispatch = useDispatch();
    const [username, setUsername] = useState("");
    const handleChange = (event) => setUsername(event.target.value);
    const handleClick = () => dispatch(getUser({ username }));

    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: "100vh" }}
        >
            <Grid item xs={3}>
                <Box
                    component="form"
                    noValidate
                    autoComplete="off"
                    alignItems="center"
                    sx={{ display: "flex" }}
                >
                    <TextField
                        id="filled-basic"
                        label="Username"
                        variant="filled"
                        value={username}
                        onChange={handleChange}
                    />
                    <Button variant="text" onClick={handleClick}>
                        Join
                    </Button>
                </Box>
            </Grid>
        </Grid>
    );
}
