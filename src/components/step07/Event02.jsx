
// children은 React 컴포넌트의 특수한 props이다. 
// 컴포넌트 태그 안에 전달된 내용을 포함한다.
// 시작 태그와 닫는 태그 사이에 있는 내용을 나타낸다.
function AlertButton({msg, children}) {
    return(
        <button onClick={() => alert(msg)}>
            {children}
        </button>
    );
}
function Event02(props) {
    return (
        <div>
            <AlertButton msg="play" >PlayBtn</AlertButton>
            <AlertButton msg="upload" >UploadBtn</AlertButton>
        </div>
    );
}

export default Event02;