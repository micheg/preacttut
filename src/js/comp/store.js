/*jshint esversion: 6 */
import { createStoreon } from 'storeon';
import {count} from '../store/count';
import {counter} from '../store/count2';
import {state} from '../store/state';

export const store = createStoreon([count, counter, state]);
