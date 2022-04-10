import './Base.css';

function Base({mistakes}) {
    
    return (
        <div className="Base">
            <svg width="400" height="400" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="base">
                    <rect width="120" height="100" fill="white"/>
                    <g id="base-hanger" style={{"--order": 3}}>
                        <rect id="hanger" x="45" y="17" width="40" height="3" rx="1.5" fill="black"/>
                    </g>
                    <g id="base-bottom" style={{"--order": 1}}>
                        <path id="bottom" d="M27 81.5C27 80.6716 27.6716 80 28.5 80H65.5C66.3284 80 67 80.6716 67 81.5V81.5C67 82.3284 66.3284 83 65.5 83H28.5C27.6716 83 27 82.3284 27 81.5V81.5Z" fill="black"/>
                    </g>
                    <g id="base-pole" style={{"--order": 2}}>
                        <rect id="pole" x="45" y="83" width="66" height="3" rx="1.5" transform="rotate(-90 45 83)" fill="black"/>
                    </g>
                    {mistakes >= 2 ? (<g id="man-body" className="body">
                        <rect id="body" x="82" y="55" width="29" height="3" rx="1.5" transform="rotate(-90 82 55)" fill="black"/>
                    </g>) : <></>}
                    {mistakes >= 3 ? (<g id="man-leg" className="body">
                        <rect id="leg" x="89.625" y="64.3753" width="14" height="3" rx="1.5" transform="rotate(-123 89.625 64.3753)" fill="black"/>
                    </g>) : <></>}
                    {mistakes >= 5 ? (<g id="man-arm" className="body">
                        <rect id="arm" x="89.625" y="52.3753" width="14" height="3" rx="1.5" transform="rotate(-123 89.625 52.3753)" fill="black"/>
                    </g>) : <></>}
                    {mistakes >= 4 ? (<g id="man-leg_2" className="body">
                        <rect id="leg_2" x="75" y="62.7414" width="14" height="3" rx="1.5" transform="rotate(-57 75 62.7414)" fill="black"/>
                    </g>) : <></>}
                    {mistakes >= 6 ? (<g id="man-arm_2" className="body">
                        <rect id="arm_2" x="75" y="50.7414" width="14" height="3" rx="1.5" transform="rotate(-57 75 50.7414)" fill="black"/>
                    </g>) : <></>}
                    <g id="base-rope" style={{"--order": 4}}>
                        <rect id="rope" x="82" y="24" width="7" height="3" rx="1.5" transform="rotate(-90 82 24)" fill="black"/>
                    </g>
                    {mistakes >= 1 ? (<g id="man-head" className="body">
                        <circle id="head" cx="83.5" cy="29.5" r="7.5" fill="black"/>
                    </g>) : <></>}
                </g>
            </svg>
        </div>
    )
}


export default Base;