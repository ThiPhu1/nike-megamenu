import React, { useState } from 'react';
import { useWindowDimensions, breakpoint } from './useWindowDimensions';

export default function useDeviceDetect(customBreakpoint) {
    const [isMobile, setMobile] = React.useState(false);
    const [isCustomDevice, setCustomDevice] = useState(false);
    const { width } = useWindowDimensions();

    React.useEffect(() => {
        const userAgent =
            typeof window.navigator === 'undefined' ? '' : navigator.userAgent;
        const mobile = Boolean(
            userAgent.match(
                /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
            )
        );

        if (customBreakpoint) {
            setCustomDevice(width <= customBreakpoint);
        }

        switch (true) {
            case mobile && width <= breakpoint[2]:
                setMobile(true);
                break;
            case width <= breakpoint[2]:
                setMobile(true);
                break;
            case width <= breakpoint[7]:
                setMobile(false);
                break;
            default:
                setMobile(false);
                break;
        }
    }, [width]);

    return { isMobile, isCustomDevice };
}
