import { UserMenu } from "components/UserMenu/UserMenu";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

import { selectToken } from "redux/selectors";

export const PrivateRoute = () => {

    const token = useSelector(selectToken)

    return token ? <div><UserMenu/><Outlet /></div> : <Navigate to="/login" replace />;
}