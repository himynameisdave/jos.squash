/**
 * Responsible for returning the path to the `public/` for express static.
 * Can't just use `__dirname` because it doesn't exist in Node 14+/ESM modules.
 * See: https://stackoverflow.com/a/62892482/4060044
 */
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default resolve(__dirname, '../', 'public');
