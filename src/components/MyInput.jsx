import {
    Autocomplete,
    Button,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { sendMessage } from "../store/userSlice";

export default function MyInput(props) {
    const dispatch = useDispatch();

    const [value, setValue] = useState(props.options[0]);
    const [inputValue, setInputValue] = useState('');
    const [theme, setTheme] = useState("");
    const [text, setText] = useState("");

    const handleClick = () => {
        dispatch(sendMessage({ sendTo: inputValue, theme, text, sendFrom: props.name }));
        setInputValue("");
        setValue("");
        setTheme("");
        setText("");
    };

    return (
        <>
            <Stack spacing={2} sx={{ width: 360 }}>
                <Typography variant="h5" component="div">
                    {props.name}
                </Typography>
                <Autocomplete
                    disablePortal
                    // id="combo-box-demo"
                    options={props?.options}
                    sx={props.style}
                    size="small"
                    id="filled-basic"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                    inputValue={inputValue}
                    onInputChange={(event, newInputValue) => {
                      setInputValue(newInputValue);
                    }}
                    renderInput={(params) => (
                        <TextField label="Send to" {...params} />
                    )}
                />
                <TextField
                    sx={props.style}
                    id="filled-basic"
                    label="Theme"
                    size="small"
                    value={theme}
                    onChange={(event) => setTheme(event.target.value)}
                />
                <TextField
                    sx={props.style}
                    id="filled-basic"
                    label="Text"
                    multiline
                    value={text}
                    onChange={(event) => setText(event.target.value)}
                />
                <Button onClick={handleClick}>Submit</Button>
            </Stack>
        </>
    );
}
