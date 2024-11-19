import Item from "./Item";

function PackingList(props) {
    return (
        <section>
            <h1>조건부 렌더링</h1>
            <ul>
                <Item
                    isPacked={true}
                    name="루피"
                />
                <Item
                    isPacked={false}
                    name="조로"
                />
                <Item
                    isPacked={true}
                    name="상디"
                />
                
            </ul>

        </section>
    );
}

export default PackingList;