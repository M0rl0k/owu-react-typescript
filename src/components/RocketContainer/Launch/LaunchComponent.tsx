import React, {FC} from 'react';
import {ILaunch} from "../../../interfaces/launchInterface";

interface IProps {
    launch: ILaunch
}

const LaunchComponent: FC<IProps> = ({launch}) => {

    const {launch_year, mission_name, links:{mission_patch_small}} = launch

    return (
        <div>
            <h3>{mission_name}</h3>
            <h3>{launch_year}</h3>
            <img src={mission_patch_small} alt={mission_name} style={{width:'200px'}}/>
        </div>
    );
};

export default LaunchComponent;