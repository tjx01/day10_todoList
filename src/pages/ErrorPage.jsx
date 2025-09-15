import {useRouteError} from "react-router";

export function ErrorPage() {
    const error = useRouteError();
    return <div>
        {error.status === 404
            ? <div>404 not found</div>
            : <div>{JSON.stringify(error)}</div>}
    </div>;
}