/*!
 * V4Fire Core
 * https://github.com/V4Fire/Core
 *
 * Released under the MIT license
 * https://github.com/V4Fire/Core/blob/master/LICENSE
 */

import { log as console } from 'core/log/engines/console';
import { LogEngine } from 'core/log/engines/types';
export * from 'core/log/engines/types';

const enginesStrategy: StrictDictionary<LogEngine> = {
	console
};

export default enginesStrategy;
