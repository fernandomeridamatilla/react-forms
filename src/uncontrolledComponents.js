const App = () => {
  const submit = (event) => {
    event.preventDefault();
    const result = Array.from(new FormData(event.target));

    console.log(Object.fromEntries(result));
  };

  return (
    <form onSubmit={submit}>
      <span> title </span>
      <input name="name" />
      <input name="surname" />
      <input type="submit" value="send" />
    </form>
  );
};

export default App;
