import { useState } from 'react';
import { createContext } from 'react';
export const AppContext = createContext();
export const AppProvider = ({ children }) => {
	//data
	const [status, setStatus] = useState('technology');

	return (
		<AppContext.Provider
			value={{
				status,
				setStatus,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
