import { Button, makeStyles, Typography } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import InputField from '../../../../components/FormControl/InputField';
import PasswordField from '../../../../components/FormControl/PasswordField';

const useStyles = makeStyles((theme) => ({
    root: {},
    title: {
        paddingTop: theme.spacing(3),
        textAlign: 'center',
    },
    form: {
        position: 'relative',
        marginTop: theme.spacing(2),
    },
    button: {
        margin: theme.spacing(3, 0, 2, 0),
    },
}));

function LoginForm({ onSubmit }) {
    const classes = useStyles();

    const { control, handleSubmit } = useForm({
        defaultValues: {
            email: '',
            password: '',
        },
    });

    const onHandleSubmit = (data) => {
        onSubmit(data);
    };

    return (
        <div className={classes.root}>
            <Typography component="h3" variant="h5" className={classes.title}>
                Login
            </Typography>
            <form onSubmit={handleSubmit(onHandleSubmit)}>
                <InputField name="email" label="Email" control={control} className={classes.form} />
                <PasswordField name="password" label="Password" control={control} className={classes.form} />
                <Button type="submit" variant="contained" color="primary" className={classes.button} fullWidth>
                    Login
                </Button>
            </form>
        </div>
    );
}

export default LoginForm;
