import React, { useState } from 'react';
import { Tab, Tabs, Sonnet } from 'react-bootstrap';
import SignIn from './SignIn';
import TableServiceComp from '../TableServiceComp'

const serviceList = [
    {
        id: 1,
        name: 'tire fitting',
        price: 500,
        warranty: 2,
        description: "very fast, good quality",
        end_date: new Date(Date.now()),
        job_id: 1,
        order_id: 2
    },
    {
        id: 2,
        name: 'car wash',
        price: 1500,
        warranty: 1,
        description: "very fast, good quality",
        end_date: new Date(Date.now()),
        job_id: 1,
        order_id: 3
    },
    {
        id: 3,
        name: 'tire changing',
        price: 700,
        warranty: 2,
        description: "very fast, good quality",
        end_date: new Date(Date.now()),
        job_id: 2,
        order_id: 3
    }
]

const Admin = () => {
    return (
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
            <Tab eventKey="home" title="Services">
                <TableServiceComp serviceList={serviceList}></TableServiceComp>
            </Tab>
            <Tab eventKey="profile" title="Employees">
                <h1>There will be table</h1>
            </Tab>
            <Tab eventKey="contact" title="Contact">
                <h1>There will be table</h1>
            </Tab>
        </Tabs>
    )
}

export default Admin;