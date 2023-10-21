import React, {useEffect, useState} from 'react';

import {ILaunch} from "../../../interfaces/launchInterface";
import {launchesService} from "../../../services/launchesService";
import LaunchComponent from "../Launch/LaunchComponent";

const LaunchesComponent = () => {
    const [launches, setLaunches] = useState<ILaunch[]>([]);

    useEffect(() => {
        launchesService.getAll().then(({data}) => setLaunches(data));
    }, [])


    return (
        <div>
            {launches
                .filter(launch => launch.launch_year !== '2020')
                .map((launch, index) => <LaunchComponent launch={launch} key={index}/>)}
        </div>
    );
};

export default LaunchesComponent;