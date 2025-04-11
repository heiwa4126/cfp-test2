import type { ExecutionContext } from "@cloudflare/workers-types";

export const onRequest = async (context: ExecutionContext): Promise<Response> => {
	const now = new Date();

	return new Response(
		JSON.stringify({
			// timestamp: now.getTime(),
			iso: now.toISOString(),
			// utc: now.toUTCString(),
			// local: now.toString(),
		}),
		{
			headers: {
				"Content-Type": "application/json",
				// "Access-Control-Allow-Origin": "*",
			},
		},
	);
};
