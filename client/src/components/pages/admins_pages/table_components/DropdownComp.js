import React, { useState, useEffect } from 'react';
import server from '../../../../API/server'
import { Table, Container, Row, Col, Card, Button, Form } from 'react-bootstrap';

const DropdownComp = (props) => {
    const [listOfItems, setListOfItems] = useState([])
    const [click, setClick] = useState(0)

    useEffect(() => {
        const search = async (path, func) => {
            const { data } = await server.get(path);
            func(data);
            console.log(data);
        }
        search(props.path, setListOfItems);
    }, [click]);

    const renderedOptions = listOfItems.map((item, index) => {
        let secName = null;
        if (props.secName != null) {
            secName = props.secName;
        }
        return (
            <option value={item.id} >{`${item[props.name]} ${secName ? item[secName] : ""}`}</ option>
        )
    })

    return (
        <Form.Select aria-label="Default select example" id={props.id} onClick={(e) => { }}>
            {renderedOptions}
        </Form.Select>
    )
}

export default DropdownComp;