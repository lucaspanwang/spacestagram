import React, { useState, useEffect, useContext } from 'react';
import { Menu, Dropdown, Button, Input, Space } from 'antd';
import './Home.css';
import Card from './Card';
import { useLocation } from 'react-router';

function Home() {
    const [data, setData] = useState([]);
    const startDate = "2021-12-22";
    const endDate = "2022-01-02";

    useEffect(() => {
        fetch(`https://api.nasa.gov/planetary/apod?api_key=dcfPZkwMkY5KUH1mWniunfWRgvYZfeHhNQL7N1HC&start_date=${startDate}&end_date=${endDate}`)
            .then(res => res.json())
            .then(res => {
                setData(res);
            });
    }, [])

    return (
        <div className="bigger_container">
            <div className='cards_container'>
                <div className='cards_wrapper'>
                    <ul className='cards_items'>
                        {
                            data.map((item) => (
                                <Card key={item.date} date={item.date} mediaType={item.media_type} hdurl={item.hdurl} title={item.title} />
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Home;