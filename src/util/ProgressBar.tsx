import Progressbar from 'react-js-progressbar';

interface ProgressBarProps {
    percentage: number;
}

export default function ProgressBars({ percentage }: ProgressBarProps) {
    // const [percentage, setPercentage] = useState(50);

    // const change_progressbar_input = () => {
    //     setPercentage(50);
    // };

    return (
        <>
            <div id="progressbarContainer" className='w-30'>
                <Progressbar
                    input={percentage}
                    pathWidth={10}
                    pathColor={['#2980B9', '#0A1128']} // use an array for gradient color.
                    trailWidth={10}
                    trailColor="#ABB2B9" // use a string for solid color.
                    textStyle={{ fill: '#0A1128' }} // middle text style
                ></Progressbar>
            </div>
        </>
    );
}
