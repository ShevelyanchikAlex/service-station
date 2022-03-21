import React, { useState, useEffect } from 'react';
import axios from 'axios'

export default () => {

    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get("http://localhost:5000/cars");
            console.log(data);
        }
        search();

    }, []);

    return (
        <div>
            Aboba
        </div>
    );
};