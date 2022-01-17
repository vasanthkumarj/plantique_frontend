import { useRoutes } from "react-router-dom";
import _routes from '../configs/routes';

const Content = ()=>
{
    let element = useRoutes(_routes);
    return element;
}

export default Content;