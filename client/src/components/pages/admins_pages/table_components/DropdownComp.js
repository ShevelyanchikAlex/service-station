import React, { useState, useEffect } from 'react';
import server from '../../../../API/server'
import { Table, Container, Row, Col, Card, Button, Form } from 'react-bootstrap';

const DropdownComp = (props) => {
    const [listOfItems, setListOfItems] = useState([])

    // console.log("value is - " + props.value)
    let updateValue = props.updateValue;

    useEffect(() => {
        const search = async (path, func) => {
            const { data } = await server.get(path, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('access_token')
                }
            });
            func(data);
        }
        search(props.path, setListOfItems);
        // console.log(`rerender dropdown ${updateValue}`);
    }, [props.updateValue]);

    const renderedOptions = listOfItems.map((item, index) => {
        let secName = null;
        if (props.secName != null) {
            secName = props.secName;
        }
        if (props.value != undefined && props.value == (item.id)) {
            // console.log("!!!!!!!!!!!set dropdown value- " + item.id);
            return (
                <option key={index} value={item.id} selected>{`${item[props.name]} ${secName ? item[secName] : ""}`}</ option>
            )
        }
        // console.log("set dropdown value- " + item.id);
        return (
            <option key={index} value={item.id} >{`${item[props.name]} ${secName ? item[secName] : ""}`}</ option>
        )
    })

    return (
        <Form.Select aria-label="Default select example" id={props.id}>
            {renderedOptions}
        </Form.Select>
    )
}

export default DropdownComp;