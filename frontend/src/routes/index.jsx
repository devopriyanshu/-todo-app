import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { TodoPage } from '../pages/TodoPage'
import { LoginPage } from '../pages/LoginPage'
import { SignupPage } from '../pages/SignupPage'
import Protected from './protected';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/">
            <Route element={<Protected />}>
            <Route index element={<TodoPage/>}/>
            </Route>
            <Route path='login' element={<LoginPage/>}/>
            <Route path='register' element={<SignupPage/>}/>
        </Route>
    )
);

const Index = ()=>{
   return <RouterProvider router={router}/>
}

export default Index;