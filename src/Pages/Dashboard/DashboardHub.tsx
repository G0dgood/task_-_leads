
import { getUserPrivileges } from "../../hooks/auth";
import Dashboard from "../Dashboard/AdminDashboard";
import LandingPage from "../LandingPage/LandingPage";
import EmployeeDashboard from "./EmployeeDashboard";

const DashboardHUB = () => {

	const {
		isSuperAdmin,
		isSupervisor,

	} = getUserPrivileges();

	console.log(isSuperAdmin)
	return (
		<div className="h-100">
			{isSuperAdmin || isSupervisor ? <Dashboard /> : <EmployeeDashboard />}
		</div>
	);
};

export default DashboardHUB;

