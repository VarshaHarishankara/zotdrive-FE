import React, {useState, useEffect, useRef} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import {shareFile} from '../Manager/ZDDataManager'
import TextField from '@mui/material/TextField';
import {FormDialog} from './styles';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const ZDShareDialog = (props) => {
    const fileInputRef = useRef();
    const [open, setOpen] = useState(false);
    const [emailId, setEmailId] = useState("");

    useEffect(() => {
        setOpen(props.isOpen);
    },[props.isOpen])

    const handleClose = () => {
        props.handleShareDialogClose(false)
        setOpen(false);
    };

    const handleCreateClick = () => {
        handleClose()
        if(emailId != "" && props.item){
            shareFile(emailId, props.item, () => {
                setEmailId("")
                props.shouldFetchData()
            },()=>{
                alert("Error! Could not share")
            })
        } 
    }

    const handleCancelClick = () => {
        handleClose()
        setEmailId("")
    }

    const handleEmailIdChange = (event) => {
        setEmailId(event.target.value);
    }

    return (
        <div>
        <Dialog
            sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 435 } }}
            maxWidth="xs"
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle>{"Share with people"}</DialogTitle>
            <DialogContent>
                <FormDialog>
                    <TextField
                        label="Add people"
                        margin="normal"
                        value={emailId}
                        onChange={handleEmailIdChange}
                    />
                </FormDialog>
            </DialogContent>
            <DialogActions>
            <Button onClick={handleCancelClick}>Cancel</Button>
            <Button onClick={handleCreateClick}>Ok</Button>
            </DialogActions>
        </Dialog>
        </div>
    );
}