import React from 'react';
import {Zalameda} from './../components/zalameda-component.jsx'

export default (PageCtx, {FlowRouter, mount}, {Components}) => {

	const {
		CLLayout,
		CLHeader,
		CLDrawer,
		CLHeaderRow,
		CLBody,
		CLNav,
		CLLogo
	} = Components;

	FlowRouter.route ( '/zalameda', {
		action: () => {
			mount (PageCtx, {
				content:(
					/* 
					(1) <Zalameda />
					(2) <Zalameda x='Angelica'/>
					(3) <Zalameda>
							this is a text.
						</Zalameda>
					*/
					<CLLayout>
					
						<CLHeader>
							<CLHeaderRow>
								<CLLogo label='Zalameda' />
								<CLNav links = {[
									{
										url:'/',
										name: 'Home'
									}
								]} />
							</CLHeaderRow>
						</CLHeader>

						<CLDrawer>
							<CLLogo label='Zalameda' />
							<CLNav links = {[
								{
									url:'/',
									name: 'Home'
								}
							]} />
						</CLDrawer>

						<CLBody>
							<div>
								Hello World!
							</div>
						</CLBody>

					</CLLayout>
				)
			});
		}
	});
}
