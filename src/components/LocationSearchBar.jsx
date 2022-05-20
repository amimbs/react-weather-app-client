import * as React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

export default function LocationSearch(props) {

    let handleSubmit = (e) => {
        e.preventDefault();
        let location = encodeURIComponent(e.target.location.value);
        props.submitLocation(location)
    }
    return (
        <Grid item xs={8}>
            <form onSubmit={handleSubmit}>
                <div>
                    <TextField
                        name="location"
                        id="location"
                        label="Location"
                        variant="outlined" />
                </div>
            </form>
        </Grid>
    );
}