import "./Board.css";

const Board = ({ board, handleClick }) => {
  return (
    <>
      <section className="board">
        {board.map((cell, index) => {
          return (
            <button
              key={index}
              onClick={() => {
                handleClick(index);
              }}
              className="cell"
            >
              {cell}
            </button>
          );
        })}
      </section>
    </>
  );
};

export default Board;
