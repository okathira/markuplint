import path from 'node:path';

import { glob as origin } from 'glob';

// normalize path separator
export const glob = async (pattern: string) => {
	const normalized = pattern.split(path.sep).join('/');
	return await origin(normalized);
};
