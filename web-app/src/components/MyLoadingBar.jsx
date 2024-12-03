import { useContext, useEffect, useRef } from 'react';
import LoadingBar from 'react-top-loading-bar';
import { LoadingBarContext } from '../contexts/LoadingBarProvider';


const MyLoadingBar = () => {
    const ref = useRef(null);
    const [progress, setProgress] = useContext(LoadingBarContext);
    
    useEffect(() => {
        if (progress === 1) {
            ref.current.continuousStart();
        }

        if (progress === 2) {
            ref.current.complete();
        }
    }, [progress])

    return (
        <LoadingBar
            ref={ref}
            color='#1A73E8'
            height={2.5}
            onLoaderFinished={() => setProgress(0)}
        />
    )
}

export default MyLoadingBar