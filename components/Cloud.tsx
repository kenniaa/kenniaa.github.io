import { useState, useEffect } from 'react';

import IconButton from './IconButton';
import dynamic from 'next/dynamic';

const CLOUDS = [
    '☁️',
    '🌨️',
    '🌧️',
    '🌩️',
    '⛈️',
    '⛅',
    '🌤️',
    '🌥️',
    '🌦️',
];

const getRandomCloud = () => {
    const index = Math.floor(Math.random() * CLOUDS.length);
    return CLOUDS[index];
}

const Cloud = () => {
    const [cloud, setCloud] = useState(getRandomCloud());

    const handleCloudClick = () => {
        const cloud = getRandomCloud();
        setCloud(cloud);
    };

    useEffect(() => {
        const interval = setInterval(handleCloudClick, 3000);
        return () => clearInterval(interval);
    });

    return <IconButton onClick={handleCloudClick}>
        {cloud}
    </IconButton>
};

export default dynamic(async () => Cloud, {
    ssr: false,
});
