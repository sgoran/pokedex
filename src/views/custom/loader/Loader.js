import React from 'react'
import { CircularProgress } from 'material-ui/Progress';
import purple from 'material-ui/colors/purple';

export default () => (
    <div className="loader">
        <CircularProgress
            style={{
                color: purple[500],
                margin: '20 auto'
            }}
            thickness={7}
        />
    </div>
)



