export default function Pascal() {
  const n = 5;
  function pascalTriangle(n) {
    var triangle = [];
    for (var i = 0; i < n; i++) {
      triangle[i] = new Array(i + 1);
      for (var j = 0; j < i + 1; j++) {
        if (j === 0 || j === i) {
          triangle[i][j] = 1;
        } else {
          triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
        }
      }
    }
    return triangle;
  }

  const pascals = pascalTriangle(n);

  let htmlElement = " ";
  for (let i = 0; i < pascals.length; i++) {
    for (let j = 0; j < pascals[i].length; j++) {
      htmlElement += "*";
      htmlElement += pascals[i][j];
    }
    htmlElement += `<br>`;
  }

  return (
    <div>
      <h1>Pascal triangle</h1>
      <div>{`${htmlElement}`}</div>
    </div>
  );
}
