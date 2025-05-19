import {
    createBrowserRouter,
  
} from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>
    },
    {
        path: 'news',
        element: <h1>News</h1>
    }
]);

export default router;