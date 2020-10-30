/*jshint esversion: 6 */
import { createStoreon } from 'storeon';
import {count} from './count';
import {counter} from './count2';
import {state} from './state';

export const store = createStoreon([count, counter, state]);
