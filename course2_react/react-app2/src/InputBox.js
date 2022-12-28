const InputBox = ({ newToDo, setNewTODo, addTitle, resetInputField }) => {
  return (
    <div className="AddInput">
      <input
        type="text"
        placeholder="Type Something"
        id="title"
        value={newToDo}
        onChange={(e) => {
          setNewTODo(e.target.value);
        }}
      />
      <button id="bttn1" onClick={addTitle}>
        Add title
      </button>
      <button id="bttn2" onClick={resetInputField}>
        Reset
      </button>
    </div>
  );
};

export default InputBox;
