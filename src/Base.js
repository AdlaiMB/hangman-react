import './Base.css';

function Base() {
    
    return (
        <div className="Base">
            <svg width="400" height="400" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="base">
                    <rect width="120" height="100" fill="white"/>
                    <g id="base-hanger" style={{"--order": 3}}>
                        <rect id="hanger" x="33" y="24" width="40" height="4" rx="2" fill="black"/>
                    </g>
                    <g id="base-bottom" style={{"--order": 1}} >
                        <path id="bottom" d="M15 72C15 70.8954 15.8954 70 17 70H53C54.1046 70 55 70.8954 55 72V72C55 73.1046 54.1046 74 53 74H17C15.8954 74 15 73.1046 15 72V72Z" fill="black"/>
                    </g>
                    <g id="base-pole" style={{"--order": 2}}>
                        <rect id="pole" x="33" y="74" width="50" height="4" rx="2" transform="rotate(-90 33 74)" fill="black"/>
                    </g>
                </g>
            </svg>
        </div>
    )
}


export default Base;