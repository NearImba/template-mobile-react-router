import Loadable from "react-loadable";
import Loading from "./components/Loading";

export default [
    {
        component: Loadable({
            loader: () => import('./containers/page1'),
            loading: Loading,
        }),
        path: "/",
    }, {
        component: Loadable({
            loader: () => import('./containers/page2'),
            loading: Loading,
        }),
        path: "/page2/",
    },
];
