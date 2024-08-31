const App = () => {
  return (
    <div>
      <h1>Tweets</h1>
      <Tweet
        username="dongo"
        name="Bob Bobertson"
        date="21/10/2019"
        message="I am tweeting"
      />
      <Tweet
        username="mongo"
        name="Michael Olson"
        date="11/12/2024"
        message="That's a great tweet!"
      />
      <Tweet
        username="zorg"
        name="Lila K"
        date="12/12/2024"
        message="No it is not"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
