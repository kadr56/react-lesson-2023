
import './App.css';
import HelloWorld from './HelloWorld'
// import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  const customStyle = {
    color: "#2ecc71",
    fontSize: "26px",
  };

  const element = (<h1 style={customStyle}>Hello, Teacher</h1>)
  const secondElement = (<p className='my-text'> My next text</p>)

  // const user = {
  //   firstName: 'Harper',
  //   lastName: 'Perez'
  // };

  // function formatName(user) {
  //   return user.firstName + ' ' + user.lastName;
  // }

  // const element = (
  //   <h1>
  //     Hello, {formatName(user)}!
  //   </h1>
  // )

  return (
    <div> {element}
      {secondElement}
      <HelloWorld />
    </div>
  );
}

export default App;
