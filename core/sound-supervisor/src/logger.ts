import debug from 'debug';
import constants from './constants';

const logger = debug('main');

if (constants.debug === undefined) {
	debug.enable('main,main:audio');
}

export default logger;
