import Cookies from "js-cookie";

export const Protected = () => {
	const token = Cookies.get("token");

	if (!token) {
		window.location.href = "/";
	}

	return <div style={{ fontSize: 40, color: "wheat" }}>Protected</div>;
};
