import React from 'react';
import './landingPop.scss';
// import Button from '@material-ui/core/Button';
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';
// import useMediaQuery from '@material-ui/core/useMediaQuery';
// import { useTheme } from '@material-ui/core/styles';

// import { useState, useEffect } from 'react';

const ResponsiveDialog = () => {
    // const [timedPopup, setTimedPopup] = useState(false);
    // const [open, setOpen] = useState(false);
    // const theme = useTheme();
    // const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const cookieStorage = {
        getItem: (key) => {
            const cookies = document.cookie
                .split(';')
                .map(cookie => cookie.split('='))
                .reduce((acc, [key, value]) => ({ ...acc, [key.trim()]: value }), {});
            return cookies[key];
        },
        setItem: (key, value) => {
            document.cookie = `${key}=${value}`
        },
    }

    const storageType = cookieStorage;
    const consentPropertyName = 'CSP_consent';

    const shouldShowPopup = () => !storageType.getItem(consentPropertyName);
    const saveToStorage = () => storageType.setItem(consentPropertyName, true);

    window.onload = () => {
        const consentPopup = document.getElementById('consent-popup');
        const acceptBtn = document.getElementById('accept');

        const acceptFn = event => {
            saveToStorage(storageType)
            consentPopup.classList.add('hidden');
        };

        acceptBtn.addEventListener('click', acceptFn);



        if (shouldShowPopup(storageType)) {

            setTimeout(() => {
                consentPopup.classList.remove('hidden')
            }, 2000);
        }
    }

    // useEffect(() => {
    //     setTimeout(() => {
    //         setOpen(true);
    //         setTimedPopup(true);
    //     }, 1000);
    // }, []);


    // const handleClose = () => {
    //     setOpen(false);
    // };



    return (
        <div id='consent-popup' class='hidden'>
            {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Open responsive dialog
            </Button> */}
            {/* <Dialog
                trigger={timedPopup}
                setTrigger={setTimedPopup}
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">{"Use Sidmach Technologies service?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Subscribe to our news letter
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose} color="primary">
                        Disagree
                    </Button>
                    <Button onClick={handleClose} color="primary" autoFocus id="accept">
                        Agree
                    </Button>
                </DialogActions>
            </Dialog> */}
            <p>Use this space to summarize your privacy and cookie use policy. Please <a id='accept' href='/'>Accept</a> these before using our site.
            </p>

        </div>
    );
}

export default ResponsiveDialog;