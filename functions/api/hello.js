export function onRequest(context) {
	const greetings = [
		"Hello from Cloudflare Pages Functions!",
		"Hi there! Welcome to Cloudflare Pages!",
		"Greetings from Cloudflare!",
	];
	const randomMessage = greetings[Math.floor(Math.random() * greetings.length)];
	const currentTime = new Date().toISOString();

	return new Response(
		JSON.stringify({
			message: `(${currentTime}) ${randomMessage}`,
		}),
		{
			headers: {
				"Content-Type": "application/json",
			},
		},
	);
}
