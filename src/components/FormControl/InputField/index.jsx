import { TextField } from '@material-ui/core';
import { Controller } from 'react-hook-form';

function InputField({ name, control, label }) {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => <TextField {...field} id={name} name={name} label={label} variant="outlined" margin="normal" fullWidth />}
        />
    );
}

export default InputField;
