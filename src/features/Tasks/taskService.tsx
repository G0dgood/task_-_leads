import createHttpService from '../../components/HttpService';


const getTask = async () => {
	const HttpService = createHttpService();
	const { data }: any = await HttpService.get(`/api/v1/task`)
	return data
}

const createTask = async (input: any) => {
	const HttpService = createHttpService();
	const { data }: any = await HttpService.post(`/api/v1/task`, input)
	return data
}

const viewTask = async (id: any) => {
	const HttpService = createHttpService();
	const { data }: any = await HttpService.get(`tasks/${id}`)
	return data
}

const deleteTask = async (id: any) => {
	const HttpService = createHttpService();
	const { data }: any = await HttpService.deleteRequest(`tasks/${id}`)
	return data
}
const updateTask = async (value: any) => {
	const HttpService = createHttpService();
	const { id, input } = value
	const { data }: any = await HttpService.patch(`/api/v1/assigned-task/${id}/status`, input)
	return data
}
const adminUpdateTask = async (value: any) => {
	const HttpService = createHttpService();
	const { id, input } = value
	const { data }: any = await HttpService.patch(`/api/v1/task/${id}`, input)
	return data
}
const noteTask = async (input: any) => {
	const HttpService = createHttpService();
	const { id, inputs } = input
	const { data }: any = await HttpService.patch(`tasks/${id}/notes`, inputs)
	return data
}





const taskService = {
	getTask,
	createTask,
	viewTask,
	deleteTask,
	updateTask,
	noteTask,
	adminUpdateTask
}

export default taskService