import { cn } from '@/lib/utils';
import * as TablerIcons from '@tabler/icons-react';

export function Icon({ className, name, ...props }) {
    const TablerIcon = TablerIcons[name];
    return <TablerIcon className={cn('h-5 w-5 stroke-[1.3]', className)} {...props} />;
}
