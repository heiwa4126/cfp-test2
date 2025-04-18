import type { ExecutionContext } from "@cloudflare/workers-types";

export const onRequestOptions = async (): Promise<Response> => {
	return new Response(null, {
		status: 204,
		headers: {
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Headers": "*",
			"Access-Control-Allow-Methods": "GET, OPTIONS",
			"Access-Control-Max-Age": "86400",
		},
	});
};

export const onRequest = async (context: ExecutionContext): Promise<Response> => {
	return new Response(
		JSON.stringify({
			message: "hello!",
		}),
		{
			headers: {
				"Content-Type": "application/json",
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Max-Age": "86400",
			},
		},
	);
};
