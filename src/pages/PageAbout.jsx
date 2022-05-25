import { useContext } from 'react';
import { AppContext } from '../AppContext';
export const PageAbout = () => {
	const { status } = useContext(AppContext);
	return (
		<div className="page_about">
			<h2>About</h2>

			<p> {status}</p>
			<p>the History is to big to be on this site. ;)</p>
		</div>
	);
};
