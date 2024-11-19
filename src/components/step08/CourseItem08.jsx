import React from 'react';

function HeartIconBtn({ chk = false }) {
    function handleFavorite() {
        chk = !chk;
        alert(chk ? "isGood": "bad");
    }
    return (
        <button className='btn' onClick={handleFavorite}>
            <img className='btn_img' src={chk ? './img/heart-fill-icon.svg': './img/heart-icon.svg'} />
        </button>
    );
}

function CourseItem08({ imgSrc, subject, content, isFavorite }) {
    return (
        <article className="course">
            <img className="course__img" src={imgSrc} alt="" style={{ width: "200px" }} />
            <div className="course__body">
                <div className="course__title">{subject}</div>
                <div className="course__description">{content} </div>
            </div>
            <div className="course_icons">
                <HeartIconBtn chk={isFavorite} />
            </div>
        </article>


    );
}

export default CourseItem08;