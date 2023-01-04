
import './App.css';


function Profile({ img, name = "James", age, profession, hobby }) { // James is the default value. If no parameter is passed, James is used.
  // console.log('props', props);

  // destructuring 
  // const { img, name, age, profession } = props;
  return (
    <div className='container'>
      <div className='profile'>
        <img src={img} className='center' alt='people'></img>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Profession: {profession}</p>
        {/* <p>Hobby: {hobby}</p> */}
      </div>
    </div>
  )
}


function App() {
  // const user = {
  //   img: "img/profile.png",
  //   name: "John Smith",
  //   age: 20,
  //   profession: "Frontend Developer",
  //   hobby: "tennis",
  // }

  // return (
  //   <div className="app">
  //     <Profile
  //       // Spread syntax
  //       {...user}
  //     />
  //   </div>
  // );

  // return (
  //   <div className="app">
  //     <Profile
  //       img="img/avatars/molly.png"
  //       name="Jonh Smith"
  //       age={20}
  //       profession="Frontend Developer"
  //     />

  //     <Profile
  //       img="img/avatars/daniel.jpg"
  //       name="John Snow"
  //       age={25}
  //       profession="New King"
  //     />
  //   </div>
  // );


  return (
    <div className="app">
      <Profile
        img="images/avatars/molly.png"
        name="Jonh Smith"
        age={20}
        profession="Frontend Developer"
      />

      <Profile
        img="images/avatars/daniel.jpg"
        name="John Snow"
        age={25}
        profession="New King"
      />


    </div>
  );

}

export default App;
