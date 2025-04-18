import type { ExecutionContext } from "@cloudflare/workers-types";

export const onRequest = async (context: ExecutionContext): Promise<Response> => {
	return new Response(
		JSON.stringify({
			message: "hello!",
		}),
		{
			headers: {
				"Content-Type": "application/json",
			},
		},
	);
};
