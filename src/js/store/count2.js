/*jshint esversion: 6 */

// Initial state, reducers and business logic are packed in independent modules
export function counter (store)
{
    // Initial state
    store.on('@init', () => ({ pippo: 'ciao', bunter: {stop: 99, start: 0 }}));
    // Reducers returns only changed part of the state
    store.on('pink', ({ bunter }) => ({ bunter: {stop: 99, start: bunter.start + 1 }}));
}

