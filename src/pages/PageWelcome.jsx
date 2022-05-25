import { useContext } from 'react';
import { AppContext } from '../AppContext';
export const PageWelcome = () => {
	const { status, setStatus } = useContext(AppContext);

	return (
		<div className="page_welcome">
			<h2>Welcome</h2>
			<p>Welcome to this site.</p>
			<div>{status}</div>
			<div>
				<button
					onClick={() =>
						setStatus(
							status === 'technology' ? 'history' : 'technology'
						)
					}
				>
					Subject
				</button>
			</div>
		</div>
	);
};
