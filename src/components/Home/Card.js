import React, { useState, useEffect, useContext } from 'react';
import { HeartOutlined, HeartFilled, PlusCircleOutlined } from '@ant-design/icons';
import { Avatar, Modal, Button, Divider, Tag, Image } from 'antd';
import { Checkbox } from 'antd';
import { Calendar } from 'antd';
import "./Card.css";

function Card(props) {
    const [isImage, setIsImage] = useState(false);
    const [isLiked, setIsLiked] = useState(false);

    const handleLikeClick = () => setIsLiked(!isLiked);

    useEffect(() => {
        if (props.mediaType === "image") setIsImage(true);
    }, [])

    return (
        <>
            {isImage && <li id='cards' className='cards_item'>
                <div className='cards_item_link' >
                    <div className="picture_area">
                        <img className="picture" src={props.hdurl} />
                    </div>
                    <div className='cards_item_info'>
                        <div className='icon_area'>
                            {!isLiked && <HeartOutlined className='icon_item' onClick={handleLikeClick} />}
                            {isLiked && <HeartFilled id="likeIcon" className='icon_item' onClick={handleLikeClick} />}
                            <PlusCircleOutlined className='icon_item' />
                        </div>
                        <h4 >{props.title}</h4>
                        <p className='cards_item_text'>{props.date}</p>
                    </div>
                </div>
            </li>}
        </>
    );
}

export default Card;