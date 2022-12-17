import { ReactElement } from "react";
export interface RouteData {
    routeProps: RouteProps;
    name: string;
}
export interface RouteProps {
    path: string;
    element : ReactElement<any, any>
}