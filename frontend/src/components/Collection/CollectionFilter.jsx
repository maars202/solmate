import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useTheme } from '@emotion/react';

export default function CollectionFilter() {
    const theme = useTheme();
    const [filter, setfilter] = React.useState('');

    const handleChange = (event) => {
        setfilter(event.target.value);
    };

    return (
        <div>
            <FormControl sx={{ minWidth: 120 }} size='small'>
                <Select
                    value={filter}
                    onChange={handleChange}
                    displayEmpty
                >
                    <MenuItem value="">
                        None
                    </MenuItem>
                    <MenuItem value={10}>Owned</MenuItem>
                    <MenuItem value={20}>Value</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}
