import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import teamService from './teamService'







const initialState = {
	data: [],
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: '',

	createdata: [],
	createisError: false,
	createisSuccess: false,
	createisLoading: false,
	createmessage: '',

	viewdata: [],
	viewisError: false,
	viewisSuccess: false,
	viewisLoading: false,
	viewmessage: '',


	deletedata: [],
	deleteisError: false,
	deleteisSuccess: false,
	deleteisLoading: false,
	deletemessage: '',

	membersdata: [],
	membersisError: false,
	membersisSuccess: false,
	membersisLoading: false,
	membersmessage: '',

	createTeamMembersdata: [],
	createTeamMembersisError: false,
	createTeamMembersisSuccess: false,
	createTeamMembersisLoading: false,
	createTeamMembersmessage: '',

	removeMembersdata: [],
	removeMembersisError: false,
	removeMembersisSuccess: false,
	removeMembersisLoading: false,
	removeMembersmessage: '',
}


// Get Teams
export const getTeam = createAsyncThunk('team/getTeam', async (data, thunkAPI) => {
	try {
		return await teamService.getTeam(data)
	} catch (error: any) {
		const message = (error.response &&
			error.response.data &&
			error.response.data.message) ||
			error.message || error.toString()
		return thunkAPI.rejectWithValue(message)
	}
})


// Craete Team
export const createTeams = createAsyncThunk('team/createTeams', async (data, thunkAPI) => {
	try {
		return await teamService.createTeams(data)
	} catch (error: any) {
		const message = (error.response &&
			error.response.data &&
			error.response.data.message) ||
			error.message || error.toString()
		return thunkAPI.rejectWithValue(message)
	}
})

// View Teams
export const viewTeam = createAsyncThunk('team/viewTeam', async (data, thunkAPI) => {
	try {
		return await teamService.viewTeam(data)
	} catch (error: any) {
		const message = (error.response &&
			error.response.data &&
			error.response.data.message) ||
			error.message || error.toString()
		return thunkAPI.rejectWithValue(message)
	}
})


// Delete Teams
export const deleteTeam = createAsyncThunk('team/deleteTeam', async (data, thunkAPI) => {
	try {
		return await teamService.deleteTeam(data)
	} catch (error: any) {
		const message = (error.response &&
			error.response.data &&
			error.response.data.message) ||
			error.message || error.toString()
		return thunkAPI.rejectWithValue(message)
	}
})
// Get Team Members
export const getTeammembers = createAsyncThunk('team/getTeammembers', async (data, thunkAPI) => {
	try {
		return await teamService.getTeammembers(data)
	} catch (error: any) {
		const message = (error.response &&
			error.response.data &&
			error.response.data.message) ||
			error.message || error.toString()
		return thunkAPI.rejectWithValue(message)
	}
})


// Get Team Members
// @ts-ignore
export const createTeamMembers = createAsyncThunk('team/createTeamMembers', async (data, thunkAPI) => {
	try {
		return await teamService.createTeamMembers(data)
	} catch (error: any) {
		const message = (error.response &&
			error.response.data &&
			error.response.data.message) ||
			error.response.data.errors[0].message || error.message || error.toString()
		return thunkAPI.rejectWithValue(message)
	}
})
// Get Team Members
// @ts-ignore
export const removeTeamMembers = createAsyncThunk('team/removeTeamMembers', async (data, thunkAPI) => {
	try {
		return await teamService.removeTeamMembers(data)
	} catch (error: any) {
		const message = (error.response &&
			error.response.data &&
			error.response.data.message) ||
			error.message || error.toString()
		return thunkAPI.rejectWithValue(message)
	}
})





export const teamSlice = createSlice({
	name: 'team',
	initialState,
	reducers: {
		reset: (state) => {

			state.isLoading = false
			state.isSuccess = false
			state.isError = false
			state.message = ''

			state.createisLoading = false
			state.createisSuccess = false
			state.createisError = false
			state.createmessage = ''

			state.viewisLoading = false
			state.viewisSuccess = false
			state.viewisError = false
			state.viewmessage = ''


			state.deleteisLoading = false
			state.deleteisSuccess = false
			state.deleteisError = false
			state.deletemessage = ''

			state.membersisLoading = false
			state.membersisSuccess = false
			state.membersisError = false
			state.membersmessage = ''

			state.createTeamMembersisLoading = false
			state.createTeamMembersisSuccess = false
			state.createTeamMembersisError = false
			state.createTeamMembersmessage = ''

			state.removeMembersisLoading = false
			state.removeMembersisSuccess = false
			state.removeMembersisError = false
			state.removeMembersmessage = ''

		},
	},

	extraReducers: (builder) => {
		builder
			.addCase(getTeam.pending, (state) => {
				state.isLoading = true

			})
			.addCase(getTeam.fulfilled, (state: any, action) => {
				state.isLoading = false
				state.isSuccess = true
				state.data = action.payload?.data
			})
			.addCase(getTeam.rejected, (state: any, action) => {
				state.isLoading = false
				state.isError = true
				state.message = action.payload
				state.data = null
			})

			.addCase(createTeams.pending, (state) => {
				state.createisLoading = true
			})
			.addCase(createTeams.fulfilled, (state: any, action) => {
				state.createisLoading = false
				state.createisSuccess = true
				state.createdata = action.payload?.data
			})
			.addCase(createTeams.rejected, (state: any, action) => {
				state.createisLoading = false
				state.createisError = true
				state.createmessage = action.payload
				state.createdata = null
			})


			.addCase(viewTeam.pending, (state) => {
				state.viewisLoading = true
			})
			.addCase(viewTeam.fulfilled, (state: any, action) => {
				state.viewisLoading = false
				state.viewisSuccess = true
				state.viewdata = action.payload?.data
			})
			.addCase(viewTeam.rejected, (state: any, action) => {
				state.viewisLoading = false
				state.viewisError = true
				state.viewmessage = action.payload
				// state.viewdata = null
			})

			.addCase(deleteTeam.pending, (state) => {
				state.deleteisLoading = true
			})
			.addCase(deleteTeam.fulfilled, (state: any, action) => {
				state.deleteisLoading = false
				state.deleteisSuccess = true
				state.deletedata = action.payload?.data
			})
			.addCase(deleteTeam.rejected, (state: any, action) => {
				state.deleteisLoading = false
				state.deleteisError = true
				state.deletemessage = action.payload
				state.deletedata = null
			})

			.addCase(getTeammembers.pending, (state: any) => {
				state.membersisLoading = true
			})
			.addCase(getTeammembers.fulfilled, (state: any, action) => {
				state.membersisLoading = false
				state.membersisSuccess = true
				state.membersdata = action.payload?.data
			})
			.addCase(getTeammembers.rejected, (state: any, action) => {
				state.membersisLoading = false
				state.membersisError = true
				state.membersmessage = action.payload
				state.membersdata = null
			})

			.addCase(createTeamMembers.pending, (state: any) => {
				state.createTeamMembersisLoading = true
			})
			.addCase(createTeamMembers.fulfilled, (state: any, action) => {
				state.createTeamMembersisLoading = false
				state.createTeamMembersisSuccess = true
				state.createTeamMembersdata = action.payload
			})
			.addCase(createTeamMembers.rejected, (state: any, action) => {
				state.createTeamMembersisLoading = false
				state.createTeamMembersisError = true
				state.createTeamMembersmessage = action.payload
				state.createTeamMembersdata = null
			})

			.addCase(removeTeamMembers.pending, (state: any) => {
				state.removeMembersisLoading = true
			})
			.addCase(removeTeamMembers.fulfilled, (state: any, action) => {
				state.removeMembersisLoading = false
				state.removeMembersisSuccess = true
				state.removeMembersdata = action.payload
			})
			.addCase(removeTeamMembers.rejected, (state: any, action) => {
				state.removeMembersisLoading = false
				state.removeMembersisError = true
				state.removeMembersmessage = action.payload
				state.removeMembersdata = null
			})

	},
})

export const { reset } = teamSlice.actions
export default teamSlice.reducer