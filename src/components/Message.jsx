import { Button, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";

export default function Message(props) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <Card sx={{ minWidth: 360 }}>
                <CardContent>
                    <Button size="small" onClick={() => setIsOpen(!isOpen)}>
                        {props.theme}
                    </Button>
                    {isOpen && (
                        <Typography variant="body2" sx={{wordWrap: "break-word"}}>{props.text}</Typography>
                    )}
                    <Typography
                        sx={{ fontSize: 14 }}
                        color="text.secondary"
                        gutterBottom
                    >
                        send from <span style={{fontWeight: 600}}>{props.sendFrom}</span> at{" "}
                        {props.createdAt
                            .replace("T", " ")
                            .slice(0, props.createdAt.length - 5)}
                    </Typography>
                </CardContent>
            </Card>
        </>
    );
}
