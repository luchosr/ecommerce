import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import SignIn from './routes/sign-In/sign-in.component';

const Shop = () => {
  return <h1>I am the shop page</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='sign-in' element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;

// import React, { useState, useEffect } from 'react';
// import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
// import './App.css';

// import Home from './routes/home/home.component';
// import Navigation from './routes/navigation/navigation.component';
// import SignIn from './routes/sign-In/sign-in.component';
// import Checkout from './pages/checkout/Checkout';
// import Shop from './pages/shop/Shop';
// import Header from './components/header/Header';
// import SignInUp from './pages/signInUp/SignInUp';
// import { auth } from './utils/firebase/firebase.utils';
// import { setCurrentUser } from './redux/user/userActions';
// import { selectCurrentUser } from './redux/user/userSelector';

// class App extends React.Component {
//   unsubscribeFromAuth = null;

//   componentDidMount() {
//     const { setCurrentUser } = this.props;

//     this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
//       // if (userAuth) {
//       //   const userRef = await createUserProfileDocument(userAuth);

//       //   userRef.onSnapshot((snapShot) => {
//       //     setCurrentUser({
//       //       id: snapShot.id,
//       //       ...snapShot.data(),
//       //     });
//       //   });
//       // }

//       setCurrentUser(userAuth);
//     });
//   }

//   componentWillUnmount() {
//     this.unsubscribeFromAuth();
//   }

//   render() {
//     return (
//       <div>
//         <Header />
//         <Routes>
//           <Route path='/' element={<Navigation />}>
//             <Route index element={<Home />} />
//             <Route path='shop' element={<Shop />} />
//             <Route path='sign-in' element={<SignIn />} />

//             {/* <Route
//               exact
//               path='signin'
//               render={() =>
//                 this.props.currentUser ? <Navigate to='/' /> : <SignInUp />
//               }
//             /> */}
//           </Route>
//         </Routes>
//       </div>
//     );
//   }
// }

// const mapStateToProps = createStructuredSelector({
//   currentUser: selectCurrentUser,
// });

// const mapDispatchToProps = (dispatch) => ({
//   setCurrentUser: (user) => dispatch(setCurrentUser(user)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(App);
