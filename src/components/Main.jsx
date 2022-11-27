import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUser, getUsers, sendMessage } from "../store/userSlice";
import Container from "@mui/material/Container";
import { List, ListItem, Typography } from "@mui/material";
import Message from "./Message";
import { Stack } from "@mui/system";
import MyInput from "./MyInput";

export default function Main() {
    const dispatch = useDispatch();
    const { users, logUser, error } = useSelector((state) => state.user);

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);

    useEffect(() => {
        setTimeout(
            () => dispatch(getUser({ username: logUser.username })),
            5000
        );
    }, [dispatch, logUser]);

    const style = {
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
    };

    return (
        <>
            <Container
                maxWidth="sm"
                sx={{ display: "flex", justifyContent: "center" }}
            >
                <Stack
                    spacing={3}
                    direction="column"
                    justifyContent="center"
                    alignItems="flex-start"
                >
                    <MyInput name={logUser.username} style={style} options={users} />
                    <List
                        sx={style}
                        component="nav"
                        aria-label="mailbox folders"
                    >
                        {logUser.messages.map((m) => (
                            <ListItem key={m._id}>
                                <Message {...m} />
                            </ListItem>
                        ))}
                    </List>
                </Stack>
            </Container>
        </>
    );
}
