function CourseItem({imgSrc, subject, content}) {
    return (
                        <article className="course">
                            <img className="course__img" src={imgSrc} alt="" style={{width: "200px"}} />
                            <div className="course__body">
                                <div className="course__title">{subject}</div>
                                <div className="course__description">{content} </div>
                            </div>
                        </article>
                       
    );
}

export default CourseItem;