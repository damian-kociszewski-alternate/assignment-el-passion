import clsx from 'clsx';

import './Star.scss';

const Star = ({ selected }) => (
    <svg
        className={clsx('star-icon', { 'selected': selected })}
        width="100%"
        height="100%"
        viewBox="0 0 71 67"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g>
            <path
                className="star-icon-inner-path"
                d="M35.412,0l11.672,20.95l23.74,4.513l-16.525,17.462l2.999,23.739l-21.886,-10.16l-21.886,10.16l2.999,-23.739l-16.525,-17.462l23.74,-4.513l11.672,-20.95Z"
            />
            <path
                className="star-icon-outer-path"
                d="M47.084,20.95l23.74,4.513l-16.525,17.462l2.999,23.739l-21.886,-10.16l-21.886,10.16l2.999,-23.739l-16.525,-17.462l23.74,-4.513l11.672,-20.95l11.672,20.95Zm-20.653,3.73l-18.167,3.454l12.642,13.358l-2.302,18.221l16.808,-7.802l16.808,7.802l-2.302,-18.221l12.642,-13.358l-18.167,-3.454l-8.981,-16.119l-8.981,16.119Z"
            />
        </g>
    </svg>
);

export { Star };
