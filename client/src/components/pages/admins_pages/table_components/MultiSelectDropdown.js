import React, {useEffect, useState} from 'react';
import Select from "react-select";
import server from "../../../../API/server";

const MultiSelectDropDown = (props) => {
    const [listOfItems, setListOfItems] = useState([])

    useEffect( () => {
        const search = async (path, func) => {
            const {data} = await server.get(path);
            func(data);
        }
        search(props.path, setListOfItems);
    }, [props.updateValue]);

    const listOfOptions = listOfItems.map(item => {
        return {
            value: item.id,
            label: item[props.name],
        }
    })

    const handleChange = (options) => {
        props.onSelect(props.id, options);
    };

    return (
        <Select
            key={props.selectedOptions}
            id={props.id}
            isMulti={true}
            options={listOfOptions}
            closeMenuOnSelect={true}
            onChange={handleChange}
            defaultValue={props.selectedOptions}
        />
    )
}

export default MultiSelectDropDown;