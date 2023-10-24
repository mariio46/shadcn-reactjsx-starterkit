import { NavLink } from 'react-router-dom';

export default function NavigationLink({ url, children, value, ...props }) {
    return (
        <NavLink
            to={url}
            {...props}
            className={({ isActive }) =>
                [
                    isActive
                        ? 'font-semibold capitalize text-foreground'
                        : 'font-normal capitalize text-muted-foreground',
                ].join('capitalize text-muted-foreground hover:text-foreground')
            }>
            {value ?? children}
        </NavLink>
    );
}
