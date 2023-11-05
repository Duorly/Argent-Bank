async function handleResponse(response: Response): Promise<object | Number> {
    const responseBody: any = await response.json();
    if (responseBody.status !== 200 && !responseBody.body) { return responseBody.status; }
    return responseBody.body.token ?? responseBody.body;
}

export async function fetchApi(url: string, method: string, token?: string, body?: object): Promise<object | Number> {
	try {
		const options: RequestInit = {
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`,
			},
			method: method,

		};

		if (body) {
			options.body = JSON.stringify(body);
		}

		const response: Response = await fetch(url, options);
		return await handleResponse(response);
	}

	catch {
		return 404;
	}
};