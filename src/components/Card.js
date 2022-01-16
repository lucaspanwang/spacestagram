import React, { useState, useEffect } from 'react';
import { HeartOutlined, HeartFilled, PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons';
import "./Card.css";

function Card(props) {
    const [isImage, setIsImage] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    const [isPlused, setIsPlused] = useState(false);
    const [canShow, setCanShow] = useState(true);

    const handleLikeClick = () => {
        const isLikedTemp = isLiked;
        setIsLiked(!isLiked);
        if (!isLikedTemp) {
            localStorage.setItem(props.date, 'liked');
        } else {
            localStorage.removeItem(props.date);
            setCanShow(false);
        }
    }

    const handlePlusClick = () => {
        setIsPlused(!isPlused);
    }

    useEffect(() => {
        if (props.mediaType === "image") setIsImage(true);
        if (localStorage.getItem(props.date)) {
            setIsLiked(true);
        } else if (props.onlyShowLikes) {
            setCanShow(false);
        }
    }, [])

    return (
        <>
            {isImage && canShow && <li id='cards' className='cards_item'>
                <div className='cards_item_link' >
                    <div className="picture_area">
                        <img className="picture" src={props.hdurl} />
                    </div>
                    <div className='cards_item_info'>
                        <h4 >{props.title}</h4>
                        <p className='cards_item_text'>{props.date}</p>
                        <div className='icon_area'>
                            {!isLiked && <HeartOutlined className='icon_item' onClick={handleLikeClick} />}
                            {isLiked && <HeartFilled id="likeIcon" className='icon_item' onClick={handleLikeClick} />}
                            {!isPlused && <PlusCircleOutlined className='icon_item' onClick={handlePlusClick} />}
                            {isPlused && <MinusCircleOutlined className='icon_item' onClick={handlePlusClick} />}
                        </div>
                        {isPlused && <p className='cards_item_text'>{props.explanation}</p>}
                    </div>
                </div>

            </li>}
        </>
    );
}

export default Card;