import { Alert, Container, Snackbar } from "@mui/material";
import { useState } from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import Loading from "../components/Loading";
import { TaskContext } from "./TaskContext";

export default function Home() {
  const [task, setTask] = useState({ title: '', detail: ''})
  const [open, setOpen] = useState(false)
  const [alertType, setAlertType] = useState("success")
  const [alertMessage, setAlertMessage] = useState("")
  

  const showAlert = (type, msg) => {
    setAlertType(type)
    setAlertMessage(msg)
    setOpen(true)
  }
  
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false)
  }
  return <Loading type="spin" color="blue" />
  return (
    <TaskContext.Provider value={{ showAlert, task, setTask }}>
      <Container maxWidth="sm">
        <TaskForm/>
          <Snackbar
            open={open}
            autoHideDuration={3000}
            onClose={handleClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'right'}}>
            <Alert onClose={handleClose} severity={alertType} sx={{ width: '100%'}}>
              {alertMessage}
            </Alert>
          </Snackbar>
        <TaskList/>
      </Container>
    </TaskContext.Provider>
  )
}
