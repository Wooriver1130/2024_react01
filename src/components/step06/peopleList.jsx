const people = [
    'Creola Katherine Johnson: mathematician',
    'Mario José Molina-Pasquel Henríquez: chemist',
    'Mohammad Abdus Salam: physicist',
    'Percy Lavon Julian: chemist',
    'Subrahmanyan Chandrasekhar: astrophysicist'
  ];
  
  function peopleList(props) {
    const peopleItems  = people.map(item => {
      return  <li>{item}</li>
    })
    return (
      <ul>
          {peopleItems}
      </ul>
    );
  }
  
  export default peopleList;