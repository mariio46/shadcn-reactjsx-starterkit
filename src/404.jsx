import { Link } from 'react-router-dom';
import GuestLayout from '@/layouts/guest-layout';
import { buttonVariants } from '@/components/ui/button';

export default function NotFound() {
    return (
        <div className='flex min-h-screen items-center justify-center'>
            <div className='text-center'>
                <p className='text-base font-semibold text-foreground'>404</p>
                <h1 className='mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-5xl'>
                    Page not found
                </h1>
                <p className='mt-6 text-base leading-7 text-muted-foreground'>
                    Sorry, we couldn’t find the page you’re looking for.
                </p>
                <div className='mt-10 flex items-center justify-center'>
                    <Link to={'/'} className={buttonVariants({ variant: 'outline' })}>
                        Go back home
                    </Link>
                </div>
            </div>
        </div>
    );
}
