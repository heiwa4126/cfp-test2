import type { ExecutionContext } from "@cloudflare/workers-types";
import * as cowsay from "cowsay";

export const onRequest = async (context: ExecutionContext): Promise<Response> => {
	const now = new Date();
	const output: string = cowsay.say({ text: `Moo! ${now.toISOString()}` });

	return new Response(output, {
		headers: {
			"Content-Type": "text/plain",
			"Cache-Control": "no-cache",
		},
	});
};
