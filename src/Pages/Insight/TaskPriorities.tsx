import React, { useState } from 'react'
import { BiPurchaseTag } from 'react-icons/bi';
import { BsPencil, BsThreeDots, BsTrash } from 'react-icons/bs';
import { FaRegCalendarMinus } from 'react-icons/fa6';

const TaskPrioritiesCard = ({ id, title, date, time, tag }: any) => {


	const [selectedTeam, setSelectedTeam] = useState(null);

	const handleTeamOptionsClick = (teamId: any) => {
		setSelectedTeam(teamId);
	};

	const closeTeamOptions = () => {
		setSelectedTeam(null);
	};


	return (
		<div key={id} className='team-card-container-sup-insight mb-1'>
			<div className='team-card-container-sup-insight-inner'>
				<input
					id={`wp-comment-cookies-consent-${id}`}
					name={`wp-comment-cookies-consent-${id}`}
					type="checkbox"
					value="yes"
				/>
				<div className='mt-3'>
					<h5>{title}</h5>
					<div className='team-card-container-sup-ptext-nem'>
						<FaRegCalendarMinus size={13} /> <p>{date} - {time}</p><BiPurchaseTag size={15} /> <p>{tag}</p>
					</div>
				</div>
			</div>
			<div>
				<div className='BsThreeDots-width' onMouseLeave={closeTeamOptions}>
					<BsThreeDots size={18} onClick={() => handleTeamOptionsClick(id)} onMouseEnter={() => handleTeamOptionsClick(id)} />
					{selectedTeam === id && (
						<div className='team-card-dropdown'>
							<div className='team-card-option' onClick={() => setSelectedTeam}>
								<BsPencil size={16} />
								<span>Edit Task</span>
							</div>
							<div className='team-card-option' onClick={() => console.log('Delete team clicked')}>
								<BsTrash size={16} />
								<span>Delete Task</span>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

const TaskPriorities = ({ Prioritiesdata }: any) => {
	return (
		<div>
			{Prioritiesdata.map((item: any) => (
				<TaskPrioritiesCard
					key={item.id}
					id={item.id}
					title={item.title}
					date={item.date}
					time={item.time}
					tag={item.tag}
				/>
			))}
		</div>
	);
};


export default TaskPriorities
