import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

export default function PrimaryLink({ className, value, children, ...props }) {
    return (
        <Link
            className={cn('text-sm capitalize text-muted-foreground hover:text-foreground', className)}
            {...props}>
            {value || children}
        </Link>
    );
}
