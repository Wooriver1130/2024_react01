import CourseItem from "./CourseItem";

function CourseListCard() {
    return (
        <>
            <div className="card">
                <div className="card__header">강의 목록</div>
                <div className="card__body">
                    <div className="courses">
                        <CourseItem imgSrc="./img/star.png" subject="별빛" content="이 사진은 별빛 사진입니다." />
                        <CourseItem imgSrc="./img/wind.png" subject="바람" content="이 사진은 바람을 상징하는 사진입니다."/>
                        <CourseItem imgSrc="./img/hope.png" subject="희망" content="이 사진은 희망을 상징하는 사진입니다."/>

                    </div>
                </div>
            </div>
        </>
    );
}

export default CourseListCard;