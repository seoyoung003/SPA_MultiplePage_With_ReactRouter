import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import HomePage from './pages/HomePage.js';
import ProductsPage from './pages/ProductsPage.js';
import RootLayout from './pages/RootLayout.js';
import ErrorPage from './pages/Error.js';

// const routeDefiniitons = createRoutesFromChildren(
//   <Route>
//     <Route path="/" element={<HomePage/>}/>
//     <Route path="/products" element={<ProductsPage/>}/>
//   </Route>
// )

//path는 도메인 뒤에 있는 부분이다. 예를 들면 https://example.com/path. 도메인 뒤에 아무것도 없을 때는 '/'만 쓰면 됨.element는 렌더링될 컴포넌트 의미.
const router = createBrowserRouter([ //각각 하나의 개체가 하나의 라우트를 나타낸다.
  {
    path: '/',
    element: <RootLayout/>,//라우터들의 래퍼요소로 사용됨됨
    errorElement: <ErrorPage/>,
    children: [
      {path: '/', element: <HomePage />},
      {path: '/products', element: <ProductsPage />,  }//자녀 라우트로서 사용됨됨
    ]
  },
  
]);

// const router = createBrowserRouter(routeDefiniitons);
function App() {
  return <RouterProvider router={router}/>; //RouterProvider는 라우터를 사용한다는걸 리액트에게 알리기 위함. router라는 지정된 프롭에 라우터 이름 넣어줌.
}

export default App;