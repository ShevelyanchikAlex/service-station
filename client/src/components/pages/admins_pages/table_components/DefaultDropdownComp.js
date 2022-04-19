import React, { useState, useEffect } from 'react';
import server from '../../../../API/server'
import { Table, Container, Row, Col, Card, Button, Form } from 'react-bootstrap';

const DefaultDropdownComp = ({ defaultList, id }) => {

    const renderedOptions = defaultList.map((item, index) => {
        return (
            <option key={index} value={item} >{item}</ option>
        )
    })

    return (
        <Form.Select aria-label="Default select example" id={id}>
            {renderedOptions}
        </Form.Select>
    )
}

export default DefaultDropdownComp;