import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import NotFound from "../pages/not-found/NotFound";
import Container from "../components/container/Container";
import LoginForm from "../components/loginForm/LoginForm";
import UploadPicture from "../components/uploadPicture/UploadPicture";
import ChatRouter from "./ChatRoute"

export const browserRouter = createBrowserRouter([
    {
        path: '/',
        element: <LoginForm />,
        errorElement: <NotFound />,
        children: [
            {
                children: [
                    {
                        element: <Container />
                    }
                ]
            }
        ]
    },
    {
        path: '/login',
        element: <LoginForm />,
        errorElement: <NotFound />,
        index: true,
    },
    {
        path: '/home',
        element: <App />,
        errorElement: <NotFound />,
        children: [
            {
                path: '/home/config',
                element: <UploadPicture />,       
            }
        ]
    },
    {
        path: '/home/chat',
        element: <ChatRouter />,
        errorElement: <NotFound />
    }

])