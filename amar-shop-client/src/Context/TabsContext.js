import React, { createContext, useState } from 'react';

export const Tabs_Context = createContext()

const TabsContext = ({ children }) => {

    const [tab1, setTab1] = useState(true)
    const [tab2, setTab2] = useState(false)
    const [tab3, setTab3] = useState(false)

    const TabsInfo = { setTab1, tab1, setTab2, tab2, setTab3, tab3, }
    return (
        // eslint-disable-next-line react/jsx-pascal-case
        <Tabs_Context.Provider value={TabsInfo}>
            {children}
        </Tabs_Context.Provider>

    );
};

export default TabsContext;