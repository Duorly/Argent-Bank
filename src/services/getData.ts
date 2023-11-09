import { fetchApi } from "@/utils/FetchApi";

const LOGIN = `${import.meta.env.VITE_API_URL}/login`;
const PROFILE = `${import.meta.env.VITE_API_URL}/profile`;

export async function login(email: string, password: string): Promise<any | Number> {
	const body = {
		"email": email,
		"password": password
	};
	
	return fetchApi(LOGIN, 'POST', '', body);
};

export async function updateUser(firstName: string, lastName: string, token: string): Promise<object | Number> {
	const body = {
		"firstName": firstName,
		"lastName": lastName
	};
	
	return fetchApi(PROFILE, 'PUT', token, body);
};

export async function getUser(token: string): Promise<object | Number> {
	return fetchApi(PROFILE, 'POST', token);
};