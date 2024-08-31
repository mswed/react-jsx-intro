const Tweet = ({ username, name, date, message }) => {
  return (
    <div className="tweet">
      <h3>{name}</h3>
      <h5>
        @{username} on {date}
      </h5>
      <p>{message}</p>
    </div>
  );
};
