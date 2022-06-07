import React, {useState, useEffect, useRef} from 'react';
import {Button, Grid} from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import {SharedPeopleView} from './styles';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const ZDSharedDetailsDialog = (props) => {
    const [open, setOpen] = useState(false);
    const sharedList =props.item.userList
    const emailId = localStorage.getItem("emailId")

    useEffect(() => {
        setOpen(props.isOpen);
    },[props.isOpen])

    const handleClose = () => {
        props.handleShareDialogClose(false)
        setOpen(false);
    };

    return (
        <div>
        <Dialog
            sx={{ '& .MuiDialog-paper': { width: '80%', height: '40%'} }}
            maxWidth="xs"
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle>{"Shared with :"}</DialogTitle>
            <DialogContent>
                <SharedPeopleView>
                    {sharedList && sharedList.length > 0 &&  <Grid container spacing={1}>
                        {
                            sharedList.map((object) => {
                                const button = object.user.email != emailId ? <Button key={object.user.email} style={{marginRight: '10px', marginBottom: '10px'}}color="inherit" key={object.user.email} variant="contained">
                                {object.user.email}
                            </Button> :<div></div>
                                return(
                                    button
                                )
                            })

                        }
                    </Grid>}
                </SharedPeopleView>
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose}>Ok</Button>
            </DialogActions>
        </Dialog>
        </div>
    );
}
