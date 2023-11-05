import { fetchApi } from "@/utils/FetchApi";

const LOGIN = `${import.meta.env.VITE_API_URL}/login`;

export async function login(email: string, password: string): Promise<any | Number> {
	const body = {
		"email": email,
		"password": password
	};
	
	return fetchApi(LOGIN, 'POST', '', body);
};

