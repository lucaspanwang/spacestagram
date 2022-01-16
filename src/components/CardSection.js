import React from 'react';
import './CardSection.css';
import Card from './Card';

function CardSection(props) {
    return (
        <div className="bigger_container">
            <div className='cards_container'>
                <div className='cards_wrapper'>
                    <ul className='cards_items'>
                        {
                            props.data.map((item) => (
                                <Card key={item.date} date={item.date} mediaType={item.media_type} hdurl={item.hdurl} title={item.title} explanation={item.explanation} onlyShowLikes={props.onlyShowLikes} />
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>)
}

export default CardSection;