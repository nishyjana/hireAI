const SpinLoader = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{
            margin: 'auto',
            background: '#fff',
            display: 'block',
            shapeRendering: 'auto',
        }}
        width={42}
        height={42}
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
        {...props}
    >
        <g transform="translate(78 50)">
            <circle r={6} fill="#8b5cf6">
                <animateTransform
                    attributeName="transform"
                    type="scale"
                    begin="-0.7415254237288136s"
                    values="1.6600000000000001 1.6600000000000001;1 1"
                    keyTimes="0;1"
                    dur="0.8474576271186441s"
                    repeatCount="indefinite"
                />
                <animate
                    attributeName="fill-opacity"
                    keyTimes="0;1"
                    dur="0.8474576271186441s"
                    repeatCount="indefinite"
                    values="1;0"
                    begin="-0.7415254237288136s"
                />
            </circle>
        </g>
        <g transform="rotate(45 -49.355 119.154)">
            <circle r={6} fill="#8b5cf6" fillOpacity={0.875}>
                <animateTransform
                    attributeName="transform"
                    type="scale"
                    begin="-0.6355932203389831s"
                    values="1.6600000000000001 1.6600000000000001;1 1"
                    keyTimes="0;1"
                    dur="0.8474576271186441s"
                    repeatCount="indefinite"
                />
                <animate
                    attributeName="fill-opacity"
                    keyTimes="0;1"
                    dur="0.8474576271186441s"
                    repeatCount="indefinite"
                    values="1;0"
                    begin="-0.6355932203389831s"
                />
            </circle>
        </g>
        <g transform="rotate(90 -14 64)">
            <circle r={6} fill="#8b5cf6" fillOpacity={0.75}>
                <animateTransform
                    attributeName="transform"
                    type="scale"
                    begin="-0.5296610169491526s"
                    values="1.6600000000000001 1.6600000000000001;1 1"
                    keyTimes="0;1"
                    dur="0.8474576271186441s"
                    repeatCount="indefinite"
                />
                <animate
                    attributeName="fill-opacity"
                    keyTimes="0;1"
                    dur="0.8474576271186441s"
                    repeatCount="indefinite"
                    values="1;0"
                    begin="-0.5296610169491526s"
                />
            </circle>
        </g>
        <g transform="rotate(135 .645 41.154)">
            <circle r={6} fill="#8b5cf6" fillOpacity={0.625}>
                <animateTransform
                    attributeName="transform"
                    type="scale"
                    begin="-0.42372881355932207s"
                    values="1.6600000000000001 1.6600000000000001;1 1"
                    keyTimes="0;1"
                    dur="0.8474576271186441s"
                    repeatCount="indefinite"
                />
                <animate
                    attributeName="fill-opacity"
                    keyTimes="0;1"
                    dur="0.8474576271186441s"
                    repeatCount="indefinite"
                    values="1;0"
                    begin="-0.42372881355932207s"
                />
            </circle>
        </g>
        <g transform="rotate(180 11 25)">
            <circle r={6} fill="#8b5cf6" fillOpacity={0.5}>
                <animateTransform
                    attributeName="transform"
                    type="scale"
                    begin="-0.31779661016949157s"
                    values="1.6600000000000001 1.6600000000000001;1 1"
                    keyTimes="0;1"
                    dur="0.8474576271186441s"
                    repeatCount="indefinite"
                />
                <animate
                    attributeName="fill-opacity"
                    keyTimes="0;1"
                    dur="0.8474576271186441s"
                    repeatCount="indefinite"
                    values="1;0"
                    begin="-0.31779661016949157s"
                />
            </circle>
        </g>
        <g transform="rotate(-135 21.355 8.846)">
            <circle r={6} fill="#8b5cf6" fillOpacity={0.375}>
                <animateTransform
                    attributeName="transform"
                    type="scale"
                    begin="-0.21186440677966104s"
                    values="1.6600000000000001 1.6600000000000001;1 1"
                    keyTimes="0;1"
                    dur="0.8474576271186441s"
                    repeatCount="indefinite"
                />
                <animate
                    attributeName="fill-opacity"
                    keyTimes="0;1"
                    dur="0.8474576271186441s"
                    repeatCount="indefinite"
                    values="1;0"
                    begin="-0.21186440677966104s"
                />
            </circle>
        </g>
        <g transform="rotate(-90 36 -14)">
            <circle r={6} fill="#8b5cf6" fillOpacity={0.25}>
                <animateTransform
                    attributeName="transform"
                    type="scale"
                    begin="-0.10593220338983052s"
                    values="1.6600000000000001 1.6600000000000001;1 1"
                    keyTimes="0;1"
                    dur="0.8474576271186441s"
                    repeatCount="indefinite"
                />
                <animate
                    attributeName="fill-opacity"
                    keyTimes="0;1"
                    dur="0.8474576271186441s"
                    repeatCount="indefinite"
                    values="1;0"
                    begin="-0.10593220338983052s"
                />
            </circle>
        </g>
        <g transform="rotate(-45 71.355 -69.154)">
            <circle r={6} fill="#8b5cf6" fillOpacity={0.125}>
                <animateTransform
                    attributeName="transform"
                    type="scale"
                    begin="0s"
                    values="1.6600000000000001 1.6600000000000001;1 1"
                    keyTimes="0;1"
                    dur="0.8474576271186441s"
                    repeatCount="indefinite"
                />
                <animate
                    attributeName="fill-opacity"
                    keyTimes="0;1"
                    dur="0.8474576271186441s"
                    repeatCount="indefinite"
                    values="1;0"
                    begin="0s"
                />
            </circle>
        </g>
    </svg>
);

export default SpinLoader;
