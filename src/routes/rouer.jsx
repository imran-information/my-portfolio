
import { createBrowserRouter, Navigate } from 'react-router-dom';
import HomeLayouts from '../layouts/HomeLayouts';
import ProjectDetails from '../componets/ProjectsDetails';
import NotFound from '../componets/NotFound';

const Router = createBrowserRouter([
    {
        path: '/',
        errorElement: <NotFound />,
        element: < HomeLayouts></HomeLayouts >,

    },
    {
        path: 'project-details/:id',
        element: <ProjectDetails />
    }
])

export default Router;