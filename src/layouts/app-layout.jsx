import { Head } from '@/components/head';
import Navigation from '@/components/navigation';

export default function AppLayout({ children, title }) {
    return (
        <>
            <Head title={title} />
            <Navigation />
            <div className='mt-[90px]' />
            <main>{children}</main>
        </>
    );
}
