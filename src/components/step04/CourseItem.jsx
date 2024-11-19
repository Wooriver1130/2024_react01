function HeartIconBtn({ isFavorite = false }) {
    if (isFavorite) {
        return (
            <button className="btn">
                <img className="btn_img" src="./img/heart-fill-icon.svg" />
            </button>
        )
    }
    return (
        <button className="btn">
            <img className="btn_img" src="./img/heart-icon.svg" />
        </button>
    );
}

function CourseItem({ imgSrc, subject, content, isFavorite }) {
    return (
        <article className="course">
            <img className="course__img" src={imgSrc} alt="" style={{ width: "200px" }} />
            <div className="course__body">
                <div className="course__title">{subject}</div>
                <div className="course__description">{content} </div>
            </div>
            // 후에 추가됨 밑은
            <div className="course">
                <HeartIconBtn isFavorite={isFavorite} />
            </div>
        </article>


    );
}

export default CourseItem;