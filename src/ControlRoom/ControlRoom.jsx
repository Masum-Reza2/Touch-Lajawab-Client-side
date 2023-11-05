import { createContext } from "react";
import PropTypes from 'prop-types';

export const GlobalContext = createContext();

const ControlRoom = ({ children }) => {

    const globalInfo = {
        name: 'masum Reza'
    }
    return (
        <GlobalContext.Provider value={globalInfo}>
            {children}
        </GlobalContext.Provider>
    )
}

ControlRoom.propTypes = {
    children: PropTypes.node,

}
export default ControlRoom