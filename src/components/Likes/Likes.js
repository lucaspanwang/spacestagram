import React, { useState, useEffect } from 'react';
import '../CardSection';
import CardSection from '../CardSection';

function Likes() {
    const [data, setData] = useState([]);
    const [hasLikes, setHasLikes] = useState(true);
    const startDate = "2021-12-30";
    const endDate = "2022-01-14";

    useEffect(() => {
        if (localStorage.length) {
            fetch(`https://api.nasa.gov/planetary/apod?api_key=dcfPZkwMkY5KUH1mWniunfWRgvYZfeHhNQL7N1HC&start_date=${startDate}&end_date=${endDate}`)
                .then(res => res.json())
                .then(res => {
                    setData(res);
                });
        } else {
            setHasLikes(false);
        }
    }, [])

    return (
        <>
            {!hasLikes && <div style={{ textAlign: 'center', margin: '2rem' }}>
                <h1>You hasn't liked any image yet. Add some!</h1>
            </div>}
            {hasLikes && <CardSection data={data} onlyShowLikes={true} />}
        </>
    )
}

export default Likes;