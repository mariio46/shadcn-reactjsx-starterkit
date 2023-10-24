import { Link } from 'react-router-dom';
import reactLogo from '@/assets/react.svg';
import { buttonVariants } from '@/components/ui/button';
import { ThemeToggle } from './theme-toggle';
import NavigationLink from './nav-link';

export default function Navigation() {
    return (
        <header className='relative z-[50] hidden md:block'>
            <div className='fixed left-1/2 top-0 h-[4.5rem] w-full -translate-x-1/2'>
                <nav className='border-b border-border/80 bg-transparent px-6 py-5 backdrop-blur'>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-x-8'>
                            <Link to={'/'}>
                                <img
                                    src={reactLogo}
                                    alt='React Logo'
                                    className='animate-spin [animation-duration:5s]'
                                />
                            </Link>
                            <div className='flex items-center gap-x-4'>
                                <NavigationLink url='/' value={'home'} />
                                <NavigationLink url='/projects' value={'projects'} />
                            </div>
                        </div>
                        <div className='flex items-center gap-x-4'>
                            <ThemeToggle />
                            <Link
                                to={'/login'}
                                className={buttonVariants({
                                    variant: 'outline',
                                    size: 'default',
                                    className: 'h-[2.7rem]',
                                })}>
                                Login
                            </Link>
                            <Link
                                to={'/register'}
                                className={buttonVariants({
                                    variant: 'outline',
                                    size: 'default',
                                    className: 'h-[2.7rem]',
                                })}>
                                Register
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}
