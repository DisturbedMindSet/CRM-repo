import useRefreshToken from "../../../hooks/useRefreshToken";

const HomeScreen = () => {
	const refresh = useRefreshToken();

	return (
		<div>
			<h1>HomeScreen</h1>
			<button onClick={() => refresh()}>Refresh</button>
		</div>
	);
};

export default HomeScreen;
