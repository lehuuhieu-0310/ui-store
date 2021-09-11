import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { useState } from 'react';
import { Controller } from 'react-hook-form';

function PasswordField({ name, control, label }) {
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword((x) => !x);
    };

    return (
        <>
            <FormControl fullWidth variant="outlined" margin="normal">
                <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
                <Controller
                    name={name}
                    control={control}
                    render={({ field }) => (
                        <OutlinedInput
                            {...field}
                            name={name}
                            id={name}
                            label={label}
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton aria-label="toggle password visibility" onClick={toggleShowPassword}>
                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    )}
                />
            </FormControl>
        </>
    );
}

export default PasswordField;
