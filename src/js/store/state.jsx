/*jshint esversion: 6 */

let prefix = 'ocg.mobile.';

// Initial state, reducers and business logic are packed in independent modules
/*
let state = store =>
{
    // Initial state
    /*
    store.on('@init', () =>
    {
        alert("i");
        const storage_key = `${prefix}storage.where`;
        let storage = localStorage.getItem(storage_key)
        storage = ( storage != null && storage in ['internal', 'sd_card'] ) ? storage : 'internal';
        const port_key = `${prefix}storage.port`;
        let port = localStorage.getItem(port_key);
        let _port = null;
        port = ( port !== null &&
                Number.isNaN(_port = parseInt(port, 10)) !== true &&
                _port >= 1111 && _port <= 9999
                ) ? _port : 9999;
        localStorage.setItem(storage_key, storage);
        localStorage.setItem(port_key, _port);
        let tmp =
        {
            port: _port,
            storage: storage,
            menu_open: false
        };
        //return tmp;
        store.dispatch('data/loaded', tmp);
    });
    store.on('@init', () => ({ menu_open: false, port: 9999, storage: 'internal' }));
    
    store.on('menu/click', ({ menu_open }) => ({ menu_open: !menu_open }));
    store.on('menu/open', ({ menu_open }) => ({ menu_open: true }));
    store.on('menu/close', ({ menu_open }) => ({ menu_open: false }));

    store.on('data/loaded', data =>
    {
        alert("AAAAAAA");
        console.log('data is => ' + JSON.stringify(data));
        return { data };
    });
};*/

const state = (store) =>
{
    //store.on('@init', () => ({ menu_open: false, port: 9999, storage: 'internal' }));
    //store.on('@init', () => ({port:7777}));
    store.on('@init', () =>
    {
        const storage_key = `${prefix}storage.where`;
        let storage = localStorage.getItem(storage_key)
        storage = ( storage != null && storage in ['internal', 'sd_card'] ) ? storage : 'internal';
        const port_key = `${prefix}storage.port`;
        let port = localStorage.getItem(port_key);
        let _port = null;
        port = ( port !== null &&
                Number.isNaN(_port = parseInt(port, 10)) !== true &&
                _port >= 1111 && _port <= 9999
                ) ? _port : 9999;
        localStorage.setItem(storage_key, storage);
        localStorage.setItem(port_key, _port);
        let tmp =
        {
            port: port,
            storage: storage,
            menu_open: false
        };
        console.log("tmp => " + JSON.stringify(tmp));
        return tmp;
    });
    
    store.on('menu/click', ({ menu_open }) => ({ menu_open: !menu_open }));
    store.on('menu/open', ({ menu_open }) => ({ menu_open: true }));
    store.on('menu/close', ({ menu_open }) => ({ menu_open: false }));
};

export {state};