// import React from "react";
// import { Navigate } from "react-router-dom";

// const PrivateRoute = ({children}) => {
//     const token = localStorage.getItem("token")
//     return  token ? children : <Navigate to="/login" />
// };

// export default PrivateRoute;
import React from "react";
import { Navigate } from "react-router-dom";

const Private = ({ children }) => {
    const token = localStorage.getItem("token")
    return token ? children : <Navigate to="/login" />;
};

export default Private;