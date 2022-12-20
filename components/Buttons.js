import Link from 'next/link';
import React from 'react';

const Buttons = (props) => {
	return (
		<div className="scroll-bottom">
			{props.left && (
				<Link href={props.left} className="left hover">
					<span>&#10092;</span>
				</Link>
			)}
			{props.right && (
				<Link href={props.right} className="right hover">
					<span>&#10093;</span>
				</Link>
			)}
		</div>
	);
};

export default Buttons;
