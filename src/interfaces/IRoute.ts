export interface IRoute {
   route: RouteProps
}

type RouteProps = {
    key: string,
    name: string,
    params: any
}