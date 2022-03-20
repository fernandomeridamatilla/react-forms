import { useRef } from 'react';

const App = () => {
  const inputRef = useRef();
  const fileRef = useRef();
  const submit = () => {
    const form = new FormData();

    form.append('field1', inputRef.current.value);
    form.append('file', fileRef.current.files[0]);

    fetch('endpoint', { method: 'POST', body: form });
  };

  return (
    <div>
      <div>
        <span> title </span>
        <input ref={inputRef} type="text" name="field1" />
        <input ref={fileRef} type="file" />
      </div>
      <input onClick={submit} type="submit" value="enviar" />
    </div>
  );
};

export default App;
