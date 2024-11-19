
// 이벤트 핸들러는 사용자가 마우스를 클릭하거나 입력상자에서 키보드를 타이핑하는 등 
// 사용자와의 상호작용에 따라 실행되는 사용자 정의 함수이다.
// ** 이벤트 핸들러를 추가하기 위해서는 먼저 함수를 정의하고 
//    이를 JSX 태그에 props 현태로 전달한다.
    function Event01() {
        
        function handleClick() { // 사용자 정의 함수(이벤트 핸들러 )
            alert("너, 눌렀구나?");
        }
        return (
            <>
            <button onClick={handleClick}>절대 클릭하지 마시오</button>
            <button onClick={function handleClick2(){alert("너, 눌렀구나?")}}>절대로 클릭하지 마시오2</button>
            <button onClick={() => {alert("너 눌렀구나3")}}>절대로 클릭하지 마시오3</button>
            </>
        );
    }
        
    export default Event01;