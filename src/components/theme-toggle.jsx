import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useTheme } from '@/components/theme-provider';
import { Icon } from './icon';

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant='outline' size='icon' className='h-[2.7rem] w-[2.7rem]'>
                    {theme === 'light' && <Icon className='h-[1.35rem] w-[1.35rem]' name='IconSunLow' />}
                    {theme === 'dark' && <Icon className='h-[1.35rem] w-[1.35rem]' name='IconMoon' />}
                    {theme === 'system' && (
                        <Icon className='h-[1.35rem] w-[1.35rem]' name='IconDeviceDesktop' />
                    )}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
                <DropdownMenuItem onClick={() => setTheme('light')}>Light</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('dark')}>Dark</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('system')}>System</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
