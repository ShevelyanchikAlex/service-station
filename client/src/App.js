import React, { useState, useEffect } from 'react';
import axios from 'axios'
import server from './API/server'

export default () => {
    const [cars, setCars] = useState([]);
    const [details, setDetails] = useState([]);
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        const search = async () => {
            const { data } = await server.get('/cars');
            console.log(data);
            setCars(data);
        }
        search();
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
                            <h2>Table: Cars</h2>
                            <div className="ui celled list">
                                {renderedCars}
                            </div>
                        </div>
                        <div class="column">
                            <h2>Table: Cars</h2>
                            <div className="ui celled list">
                                {renderedCars}
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};