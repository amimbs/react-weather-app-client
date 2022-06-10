import React from 'react'
import { Link } from '@mui/material';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';

function LeftLink() {
    return (
        <>
            <MenuItem>
                <Link href='/Login' textAlign="center" color='primary'>Login</Link>
            </MenuItem>

            <MenuItem>
                <Link href='/Login' textAlign="center" color='primary'>Register</Link>
            </MenuItem>

        </>
    )
}

export default LeftLink