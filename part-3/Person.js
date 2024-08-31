const Person = ({ name, age, hobbies = [] }) => {
  return (
    <div>
      <p>Learn some info about {name}</p>
      <ul>
        <li>Name: {name.length > 8 ? name.slice(0, 6) : name}</li>
        <li>Age: {age}</li>
      </ul>
      <h4>{hobbies.length !== 0 ? 'Hobbies:' : ''}</h4>
      <ul>
        {hobbies.map((h) => (
          <li>{h}</li>
        ))}
      </ul>
      <h3>{age >= 18 ? 'Please go vote' : 'You must be 18'}</h3>
    </div>
  );
};
