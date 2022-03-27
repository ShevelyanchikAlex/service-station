import React, { useState, useEffect } from 'react';
import NavbarComp from './components/NavbarComp'
import axios from 'axios'
import server from './API/server'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'


export default () => {
    return (
        <div>
            <NavbarComp></NavbarComp>
        </div>
    );
};
{/*export default () => {
    const [cars, setCars] = useState([]);
    const [details, setDetails] = useState([]);
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        const search = async (path, func) => {
            const { data } = await server.get(path);
            console.log(data);
            func(data);
        }
        search('/cars', setCars).then(() => {
            search('/details', setDetails).then(() => {
                search('/employees', setEmployees)
            })
        });
    }, []);


    const renderedCars = cars.map((result) => {
        return (
            <div key={result.id} className="item">
                <div className="content">
                    <div className="header">
                        {result.car_number}
                    </div>
                    <div>
                        {result.brand + "  " + result.model}
                    </div>
                </div>
            </div>
        )
    })

    const renderedDetails = details.map((result) => {
        return (
            <div key={result.id} className="item">
                <div className="content">
                    <div className="header">
                        {`Name: ${result.name}  Price: ${result.price}`}
                    </div>
                    <div>
                        {`Manufacturer: ${result.manufacturer_id} Warranty: ${result.warranty} year`}
                    </div>
                </div>
            </div>
        )
    })

    const renderedEmployees = employees.map((result) => {
        return (
            <div key={result.id} className="item">
                <div className="content">
                    <div className="header">
                        {`${result.name} ${result.last_name}`}
                    </div>
                    <div>
                        {result.email}
                    </div>
                </div>
            </div>
        )
    })


    return (
        <div style={{ margin: '0px 50px' }}>
            <div className="ui clearing segment"><h2 className="ui left floated header"><i aria-hidden="true" className="settings icon"></i><div className="content">Service Station<div className="sub header">Warning! Website is under development!</div></div></h2></div>
            <form className="ui form">
                <div class="ui divided three column grid">
                    <div class="row">
                        <div class="column">
                            <h2>Table: Cars</h2>
                            <div className="ui celled list">
                                {renderedCars}
                            </div>
                        </div>
                        <div class="column">
                            <h2>Table: Details</h2>
                            <div className="ui celled list">
                                {renderedDetails}
                            </div>
                        </div>
                        <div class="column">
                            <h2>Table: Employees</h2>
                            <div className="ui celled list">
                                {renderedEmployees}
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};
*/}