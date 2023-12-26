import { Route, Routes } from "react-router-dom";

import { Landing } from "../../pages";

export const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Landing />} />
		</Routes>
	);
};
