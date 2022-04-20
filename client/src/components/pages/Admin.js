import React, { useState } from 'react';
import { Tab, Tabs, Sonnet } from 'react-bootstrap';
import SignIn from './SignIn';

import TableServiceComp from './admins_pages/TableServiceComp'
import TableCarComp from './admins_pages/TableCarComp'
import TableDetailComp from './admins_pages/TableDetailComp'
import TableEmployeeComp from './admins_pages/TableEmployeeComp'
import TableJobComp from './admins_pages/TableJobComp'
import TableManufactorerComp from './admins_pages/TableManufactorerComp'
import TableOrderComp from './admins_pages/TableOrderComp'

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
    const [updateValue, setUpdateValue] = useState(true);

    const updateAdminsPage = () => {

        setUpdateValue(!updateValue);
    }

    return (
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
            <Tab eventKey="home" title="Services">
                <TableServiceComp updateAdminsPage={updateAdminsPage} updateValue={updateValue}></TableServiceComp>
            </Tab>
            <Tab eventKey="profile" title="Cars">
                <TableCarComp updateAdminsPage={updateAdminsPage} updateValue={updateValue}></TableCarComp>
            </Tab>
            <Tab eventKey="details" title="Detais">
                <TableDetailComp updateAdminsPage={updateAdminsPage} updateValue={updateValue}></TableDetailComp>
            </Tab>
            <Tab eventKey="employee" title="Employees">
                <TableEmployeeComp updateAdminsPage={updateAdminsPage} updateValue={updateValue}></TableEmployeeComp>
            </Tab>
            <Tab eventKey="job" title="Jobs">
                <TableJobComp updateAdminsPage={updateAdminsPage} updateValue={updateValue}></TableJobComp>
            </Tab>
            <Tab eventKey="manufactorer" title="Manufactorers">
                <TableManufactorerComp updateAdminsPage={updateAdminsPage} updateValue={updateValue}></TableManufactorerComp>
            </Tab>
            <Tab eventKey="order" title="Orders">
                <TableOrderComp updateAdminsPage={updateAdminsPage} updateValue={updateValue}></TableOrderComp>
            </Tab>
        </Tabs>
    )
}

export default Admin;