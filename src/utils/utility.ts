import { ReactElement } from "react";
import { RouteData } from "../model";

const routeData = (path:string, component:ReactElement<any, any>,name:string):RouteData => {
    return {
        routeProps: {
            path,
            element: component
        },
        name,
    }
}
export default {
    routeData
}