import { debug } from 'console';
import * as fs from 'fs';
import * as path from 'path';

const logFilePath = path.join(__dirname, '../../logs/app.log');

// Ensure the logs directory exists
fs.mkdirSync(path.dirname(logFilePath), { recursive: true });
// Truncate the log file on each run
fs.writeFileSync(logFilePath, '');

function log(message: string) {
  const timestamp = new Date().toISOString();
  const formatted = `[${timestamp}] ${message}`;
  // Output to stdout
  console.log(formatted);
  // Append to log file
  fs.appendFileSync(logFilePath, formatted + '\n');
}

log('Logger initialized');

export const logger = {
  log: log,
  info: (msg: string): void => log(`INFO: ${msg}`),
  error: (msg: string): void => log(`ERROR: ${msg}`),
  debug: (msg: string): void => {
    if (process.env.DEBUG) log(`DEBUG: ${msg}`);
  }
};