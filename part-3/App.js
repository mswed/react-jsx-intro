const App = () => {
  return (
    <div>
      <Person name="Bob" age={18} hobbies={['Dancing', 'Chess']} />
      <Person name="Zroobavel" age={17} hobbies={['Eating', 'Sleeping']} />
      <Person name="Nicole" age={36} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
