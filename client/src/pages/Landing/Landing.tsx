import { AuthForm } from "../../components";
import { trpc } from "../../api/api";

export const Landing = () => {
	// const { data } = trpc.getUser.useQuery("clqmewrxz0001m12xdpwy5yi6"); query example
	return <AuthForm />;
};
