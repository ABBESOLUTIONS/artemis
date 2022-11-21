import React from "react";



const useToggle = (initialValue=false): [boolean, Function, Function, Function] =>{
    const [open, setOpen] = React.useState(initialValue);

    const handleOpen = React.useCallback(()=>{
        setOpen(true)
    },[])
    const handleClose = React.useCallback(()=>{
        setOpen(true)
    },[])
    const handleSwitch = React.useCallback(()=>{
        setOpen(!open)
    },[])

    return [open, handleOpen, handleClose, handleSwitch ]
}

export default useToggle;