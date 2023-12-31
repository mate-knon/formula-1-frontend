import { SVGAttributes } from 'react';

const ArrowDown = ({ ...props }: SVGAttributes<SVGElement>) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M11.0001 3.67157L13.0001 3.67157L13.0001 16.4999L16.2426 13.2574L17.6568 14.6716L12 20.3284L6.34314 14.6716L7.75735 13.2574L11.0001 16.5001L11.0001 3.67157Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ArrowDown;
