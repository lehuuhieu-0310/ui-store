import { Box, Button, makeStyles, Typography } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import InputField from '../../../../components/FormControl/InputField';
import PasswordField from '../../../../components/FormControl/PasswordField';

const useStyles = makeStyles((theme) => ({
    title: {
        textAlign: 'center',
        padding: theme.spacing(2),
    },
    button: {
        margin: theme.spacing(2, 0),
    },
}));

function RegisterForm({ onSubmit }) {
    const classes = useStyles();
    const { control, handleSubmit } = useForm({
        defaultValues: {
            fullname: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
    });
    const onHandleSubmit = (data) => {
        onSubmit(data);
    };
    return (
        <Box>
            <Typography className={classes.title} component="h3" variant="h5">
                Create New Account
            </Typography>
            <form onSubmit={handleSubmit(onHandleSubmit)}>
                <InputField name="fullname" label="Full Name" control={control} />
                <InputField name="email" label="Email" control={control} />
                <PasswordField name="password" label="Password" control={control} />
                <PasswordField name="confirmPassword" label="Confirm Password" control={control} />
                <Button type="submit" className={classes.button} color="primary" variant="contained" fullWidth>
                    Sign Up
                </Button>
            </form>
        </Box>
    );
}

export default RegisterForm;
