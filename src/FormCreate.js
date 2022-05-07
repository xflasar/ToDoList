import React from "react";
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";

export default function FormDialog({addTask}) {
    const [open, setOpen] = React.useState(false);
    const [userInput, setUserInput] = React.useState('');

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput('');
        setOpen(false);
    }

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Create new task
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Create new task</DialogTitle>
                <DialogContent>
                    <TextField autoFocus margin="dense" id='name' label='Task name' value={userInput} onChange={handleChange} type='text' fullWidth variant='standard'/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSubmit}>Save</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}