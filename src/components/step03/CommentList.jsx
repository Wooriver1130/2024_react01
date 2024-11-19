import Comment from "./Comment";

const comments= [{
    name: "김감전", 
    comment: "찌릿찌릿"
},
{
    name: "나무꾼", 
    comment: "나무나무"
}, 
{
    name: "다람쥐", 
    comment: "우물우물"
}, 
{
    name: "리신", 
    comment: "이쿠"
}  
];
function CommentList() {
    return (
        <div>
            {
                comments.map((item) => {
                    return (
                        <Comment name={item.name} comment={item.comment} />
                    );
                })
            }
        </div>
    );
}

export default CommentList;