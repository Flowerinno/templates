import { Route, Routes } from "react-router-dom";

import { Landing, Protected } from "../../pages";

export const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Landing />} />
			<Route path="/protected" element={<Protected />} />
		</Routes>
	);
};
