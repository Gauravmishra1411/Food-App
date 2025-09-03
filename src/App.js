import './App.css';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Body from './Component/Body';
import { createBrowserRouter, RouterProvider ,Outlet} from 'react-router-dom';
import About from './Component/page/About';
import Home from './Component/page/Home';
import Error from './Component/page/Error';
import Contact from './Component/page/Contact';
import RestroMenu from './Component/RestroMenu';
import Profile from './Component/page/Profile'; 
import  { lazy,Suspense } from 'react';
 import { Provider } from 'react-redux';
 import Store from './Component/redux/Store';
// dynamic import lazy(()=>import(location))
// Layout Component
const Imstamart=lazy(()=>import("./Component/page/Instamart"))
const Layout=()=> {
  return (
    <>
    <Provider store={Store}>

      <Header />
      <Outlet />
      <Footer />
    </Provider>
    </>
  );
}

// Router
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />, // fallback for this route & children
    children: [
      { index: true, element: <Body /> },   // default route for "/"
      { path: "about", element: <About />,
        children:[
          {path:"profile",element:<Profile/>}
        ]
       },
      { path: "home", element: <Home /> },
      {path:"contact",element:<Contact/>},
      {path:"restromanu/:id",element:<RestroMenu/>},
      {path:"xyz",element:(<Suspense fallback={<h1>Loading...</h1>}
><Imstamart/></Suspense>)}
    ]
  }
]);

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
