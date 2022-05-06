import React from "react";
import { Button, Grid, List } from "@mui/material";
import { ListItem } from "@mui/material";
import { ListSubheader } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import ToDo from "./ToDo";


export default function ContentForm({ toDoList, handleToggle, handleFilter, handleRemoval }) {
    let dateL = [];
    let pushMaster = [];
    return (
        <List
            sx={{
                width: '80%',
                maxWidth: '80%',
                bgcolor: 'rgb(18, 18, 18)',
                position: "relative",
                overflow: "auto",
                maxHeight: '80%',
                marginLeft: '10%',
                marginRight: '10%',
                '& ul': {
                    padding: 0,
                    color: "white"
                },
            }}
            subheader={<li />}
        >
            {
                toDoList.map((task) => {
                    const found = dateL.some(item => item === task.date);
                    pushMaster = []
                    return found ? null
                        :
                        (
                            dateL.push(task.date),
                            <li key={`todo-${task.date}`}>
                                <ul>
                                    <ListSubheader sx={{ color: "white", bgcolor: "rgb(26, 32, 39)" }}>{`I'm Sticky ${task.date}`}</ListSubheader>
                                    {toDoList.forEach(todom => {
                                        if (task.date === todom.date) {
                                            pushMaster.push(
                                                <ListItem key={`Task-${todom.id}`} sx={{ maxWidth: 'parent' }}>
                                                    <Grid justifyContent='space-between' container>
                                                        <Grid item>
                                                            <ToDo todo={todom} handleToggle={handleToggle} handleFilter={handleFilter} />
                                                        </Grid>
                                                        <Grid item>
                                                            <Button onClick={(e) => { e.preventDefault(); handleRemoval(e.currentTarget.parentElement.parentNode.firstChild.firstChild.id); }} variant="outlined" startIcon={<DeleteIcon />} size="small" > Delete</Button>
                                                        </Grid>
                                                    </Grid>
                                                </ListItem>
                                            );
                                        }
                                    })}
                                    {pushMaster}
                                </ul>
                            </li>
                        )
                }
                )
            }
        </List>
    )
}