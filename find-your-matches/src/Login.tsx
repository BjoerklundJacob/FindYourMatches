import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Stack from "@mui/material/Stack"
import TextField from "@mui/material/TextField"
import React, { FC, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

const Login: FC = () => {
    const navigate = useNavigate()

    const handleLogin = () => {
        navigate('/')
    }

    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', height: '100vh'}}>
            <Box sx={{ margin: '1rem', maxWidth: '25rem', maxHeight: '15rem' }}>
                <Stack spacing={4}>
                    <TextField label="Name" variant="outlined" onKeyDown={(e) => {
                        if(e.key == 'Enter')
                            handleLogin()
                    }} />
                    <Button variant="contained" onClick={handleLogin}>Login</Button>
                </Stack>
            </Box>
        </div>
    )
}

export default Login