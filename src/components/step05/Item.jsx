function Item({name, isPacked}) {
    // if (isPacked) {
    //     return <li>{name} ✅</li>
    // }else {
    //     return <li>{name} </li>
    // }
    
    // && 연산자
    // 기존의 AND 기준이 아닌 && 기준으로 왼쪽이 ture이면 오른쪽이 반환된다.
    // 주의사항 &&의 왼쪽에 숫자를 두지 말자. 
    // 참이면 표시, 거짓이면 표시하지 않음
    // return(
    //     <li> {name} {isPacked && '✅'}</li>
    // );

    let itemContent = name ;
    if(isPacked) {
        itemContent = name + "✅";
    }
    return(
        <li>{itemContent} </li>
    );
}

export default Item;