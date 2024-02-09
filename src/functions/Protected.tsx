import { Navigate } from "react-router-dom";

const Protected = ({ loggedIn, children }: any) => {

	if (!loggedIn) {
		return <Navigate to="/" replace />;
	}
	return children;
};
export default Protected;