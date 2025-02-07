
import { createBrowserRouter, Navigate } from 'react-router-dom';
import HomeLayouts from '../layouts/HomeLayouts';
import ProjectDetails from '../componets/ProjectsDetails';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayouts></HomeLayouts>,
    },
    {
        path: 'about',
        element: <h1>About</h1>
    },
    {
        path: 'career',
        element: <h1>Career</h1>
    },
    {
        path: 'project-details/:id',
        element: <ProjectDetails />
    }
])

export default Router;