/*jshint esversion: 6 */

import { createStoreon } from 'storeon';

// Initial state, reducers and business logic are packed in independent modules
export function count (store)
{
    // Initial state
    store.on('@init', () => ({ count: 0 }));
    // Reducers returns only changed part of the state
    store.on('inc', ({ count }) => ({ count: count + 1 }));
}

//export const store = createStoreon([count]);
//export const store = createStoreon([count]);

