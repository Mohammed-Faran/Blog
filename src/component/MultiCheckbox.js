import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { useSelector } from 'react-redux';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


export default function MultiCheckbox({value, options, handleChange, label, containerClass, multipleSelect=true}) {
  const [personName, setPersonName] = React.useState(value);
  const {bySearchText} = useSelector(state => state.filter);

  const handleChangeLocal = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      typeof value === 'string' ? value.split(',') : value,
    );
};
React.useEffect(() => {
  handleChange(personName);
  // eslint-disable-next-line
}, [personName]);

React.useEffect(() => {
  setPersonName([]);
  // eslint-disable-next-line
}, [bySearchText]);

  return (
    <div>
      <FormControl className={containerClass} sx={{ width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">{label}</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple={multipleSelect}
          value={value}
          onChange={handleChangeLocal}
          input={<OutlinedInput label={label} />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {options?.map((name) => (
            <MenuItem key={name} value={name}>
              {multipleSelect && (<Checkbox checked={value?.indexOf(name) > -1} />)}
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}