declare let process: {
	env: {
		NX_APP_API_URL: string;
	};
};

export const baseUrl: string = process.env["NX_APP_API_URL"] || "";
