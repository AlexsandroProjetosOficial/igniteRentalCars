import { NextFunction, Request, Response } from "express";

const ensureLogging = (req: Request, res: Response, next: NextFunction) => {
	const user_id = req.user_id;

	const start = new Date().getTime();

	res.on('finish', () => {
		const elapsed = new Date().getTime() - start;
		console.info(`${user_id} ${req.method} ${req.originalUrl} ${res.statusCode} ${elapsed}ms`);
	});

	next();
}

export { ensureLogging };