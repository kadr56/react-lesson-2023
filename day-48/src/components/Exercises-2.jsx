export default function Exercises() {
  const arr = [5, 6, 4, 12, 19, 121, 1, 7, 9, 63];
  function findEven(arr) {
    return arr.filter((a) => a % 2 === 0);
  }

  function findOdd(arr) {
    return arr.filter((a) => a % 2 !== 0);
  }

  const evenNumbers = findEven(arr);
  const oddNumbers = findOdd(arr);

  return (
    <div>
      <h1>Find even odd from given array</h1>
      <h1>Even numbers</h1>
      {evenNumbers &&
        evenNumbers.map((n) => {
          return (
            <div>
              <p>{n}</p>
            </div>
          );
        })}
      <h1>Odd numbers</h1>
      {oddNumbers &&
        oddNumbers.map((n) => {
          return (
            <div>
              <p>{n}</p>
            </div>
          );
        })}
    </div>
  );
}
