import React, { useState, useEffect, useContext } from 'react';
import { Avatar, Modal, Button, Divider, Tag, Image } from 'antd';
import { Checkbox } from 'antd';
import { Calendar } from 'antd';
import "./Card.css";

function Card(props) {
    const [isImage, setIsImage] = useState(false);

    useEffect(() => {
        if (props.mediaType === "image") setIsImage(true);
    }, [])

    return (
        <>
            {isImage && <li id='cards' className='cards__item'>
                <div className='cards__item__link' >
                    <div className="picture_area">
                        <img className="picture" src={props.hdurl} />
                    </div>
                    <div className='cards__item__info'>
                        <h4 >{props.title}</h4>
                        <p className='cards__item__text'>{props.date}</p>
                    </div>
                </div>
            </li>}
        </>
    );
}

export default Card;