import React from "react";

import PropTypes from "prop-types";
import { useLazyQuery } from "@apollo/react-hooks";
import { GET_CONFIGS} from "shared-api/src/queries";

const Home = () => {
    const [cb,{ data, error, loading }] = useLazyQuery(GET_CONFIGS)
    
    console.log(data)
    return (
        <div>
            <button onClick={() => { cb() }}>op</button>
        </div>
    )
};

Home.propTypes = {};

Home.defaultPropTypes = {};

export default Home;
