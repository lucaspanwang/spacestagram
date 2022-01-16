import React, { useState, useEffect } from 'react';
import '../CardSection';
import CardSection from '../CardSection';

function Home() {
    const [data, setData] = useState([]);
    const startDate = "2021-12-30";
    const endDate = "2022-01-14";

    useEffect(() => {
        fetch(`https://api.nasa.gov/planetary/apod?api_key=dcfPZkwMkY5KUH1mWniunfWRgvYZfeHhNQL7N1HC&start_date=${startDate}&end_date=${endDate}`)
            .then(res => res.json())
            .then(res => {
                setData(res);
            });
    }, [])

    return (
        <CardSection data={data} onlyShowLikes={false} />
    )
}

export default Home;