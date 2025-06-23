"use client"
import { Timeline, Events, Event } from 'vertical-timeline-component-react';

function ExperienceTimeline() {
	const customTheme = {
		borderDotColor: '#ffffff',
		descriptionColor: '#262626',
		dotColor: '#d0cdc4',
		eventColor: '#965500',
		lineColor: '#d0cdc4',
		subtitleColor: '#7c7c7c',
		titleColor: '#405b73',
		yearColor: '#405b73',
	};

	return (
		<Timeline lang="en" dateFormat="short" collapse={false} withoutDay>
			<Events
				title="Web Programming Teaching Assistant"
				subtitle="School of Applied Science Telkom University"
				endDate={'2024/01/10'}
				startDate="2023/09/29"
				defaultClosed
			>
				<Event
					title=""
					description={[
						"Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
						'Is simply dummy text of the printing and typesetting industry.',
					]}
				/>
			</Events>

			<Events
				title="Web Programming Teaching Assistant"
				subtitle="School of Applied Science Telkom University"
				endDate={'2024/01/10'}
				startDate="2023/09/29"
				defaultClosed
			>
				<Event
					title=""
					description={[
						"Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
						'Is simply dummy text of the printing and typesetting industry.',
					]}
				/>
			</Events>
			
			<Events
				title="Fullstack Programmer"
				subtitle="School of Applied Science Telkom University"
				endDate={'2024/06/28'}
				startDate="2023/07/28"
				defaultClosed
			>
				<Event
					title=""
					description={[
						"Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
						'Is simply dummy text of the printing and typesetting industry.',
					]}
				/>
			</Events>

		</Timeline>
	);
}

export default ExperienceTimeline
// import React from 'react'

// function experiencetimeline() {
//   return (
// 	<div>experience-timeline</div>
//   )
// }

// export default experiencetimeline