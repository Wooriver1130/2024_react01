const people = [{
  id: 0,
  name: 'Creola Katherine Johnson',
  profession: 'mathematician',
}, {
  id: 1,
  name: 'Mario José Molina-Pasquel Henríquez',
  profession: 'chemist',
}, {
  id: 2,
  name: 'Mohammad Abdus Salam',
  profession: 'physicist',
}, {
  id: 3,
  name: 'Percy Lavon Julian',
  profession: 'chemist',
}, {
  id: 4,
  name: 'Subrahmanyan Chandrasekhar',
  profession: 'astrophysicist',
}];

function People3() {
  const filterChemist = people.filter(item => {
    return item.profession == 'chemist'
  });
  const detail = filterChemist.map(item => {
    return <li key={item.id}>{item.name}</li>
  });
  return (
    <ul></ul>
  );
}

export default People3;