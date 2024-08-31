const App = () => {
  return (
    <div>
      <FirstComponent />
      <NamedComponent name="Moshe" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
