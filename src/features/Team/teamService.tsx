import createHttpService from '../../components/HttpService';


const getTeam = async (id: any) => {
	const HttpService = createHttpService();
	const { data }: any = await HttpService.get(`/api/v1/team`)
	return data
}

const createTeams = async (input: any) => {
	const HttpService = createHttpService();
	const { data }: any = await HttpService.post(`/api/v1/team`, input)
	return data
}

const viewTeam = async (id: any) => {
	const HttpService = createHttpService();
	const { data }: any = await HttpService.get(`hr/teams/${id}`)
	return data
}

const deleteTeam = async (id: any) => {
	const HttpService = createHttpService();
	const { data }: any = await HttpService.deleteRequest(`hr/teams/${id}`)
	return data
}
const getTeammembers = async (id: any) => {
	const HttpService = createHttpService();
	const { data }: any = await HttpService.get(`/api/v1/team/${id}/members`)
	return data
}
const createTeamMembers = async (inputs: any) => {
	const HttpService = createHttpService();
	const { value, id } = inputs
	const { data }: any = await HttpService.post(`/api/v1/team/${id}/member`, value)
	return data
}

const removeTeamMembers = async (id: any) => {
	const HttpService = createHttpService();
	const { data }: any = await HttpService.patch(`tasks/${id}`)
	return data
}



const teamService = {
	getTeam,
	createTeams,
	viewTeam,
	deleteTeam,
	getTeammembers,
	createTeamMembers,
	removeTeamMembers
}

export default teamService