

export function LoadingCircle() {
    return (
        <svg
            className="w-10 h-10 origin-center animate-spin ease-linear"
            viewBox="0 0 40 40"
            height="40"
            width="40"
        >
            <circle 
                className="stroke-red-600"
                cx="20" 
                cy="20" 
                r="17.5" 
                strokeDasharray={25}
                strokeDashoffset={0}
                strokeLinecap="round"
                pathLength={100}
                stroke-width="5px" 
                fill="none" 
            />
            <circle 
                className="ease-in stroke-blue-500 fill-none"
                cx="20" 
                cy="20" 
                r="17.5" 
                pathLength={100}
                stroke-width="5px" 
                fill="none" 
            />
        </svg>
    )
}

{/* <style>
  .container {
    --uib-size: 40px;
    --uib-color: black;
    --uib-speed: .8s;
    --uib-bg-opacity: 0.1;
    height: var(--uib-size);
    width: var(--uib-size);
    transform-origin: center;
    animation: rotate var(--uib-speed) linear infinite;
    will-change: transform;
    overflow: visible;
  }

  .car {
    fill: none;
    stroke: var(--uib-color);
    stroke-dasharray: 25, 75;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    transition: stroke 0.5s ease;
  }

  .track {
    fill: none;
    stroke: var(--uib-color);
    opacity: var(--uib-bg-opacity);
    transition: stroke 0.5s ease;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
</style> */}

