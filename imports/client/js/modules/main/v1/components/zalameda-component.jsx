// DUMB COMPONENT THAT CAN BE USED
import React from 'react';

export class Zalameda extends React.Component {
	render() {
		// (1) const {x} = this.props;
		/* (2) w/ default value
			const {x = 'Angelica Zalameda'} = this.props; */
		const {children} = this.props;
		return (
			<div>
				Hello {React.Children.map(children, child=>(child)) }
			</div>
		);
	}
}