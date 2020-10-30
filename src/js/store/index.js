/*jshint esversion: 6 */
// store/index.js
import { createStoreon } from 'storeon';

import { projects } from './projects';

export const store = createStoreon([projects, users])
