import PrimaryLink from '@/components/primary-link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import GuestLayout from '@/layouts/guest-layout';

export default function Register() {
    return (
        <GuestLayout title='Register' description='Hii, enter the fields below to register.'>
            <form>
                <div>
                    <Label htmlFor='name'>Name</Label>
                    <Input
                        id='name'
                        name='name'
                        type='name'
                        autoComplete='name'
                        className='mt-1 block w-full'
                        autoFocus
                        required
                    />
                </div>

                <div className='mt-4'>
                    <Label htmlFor='email'>Email</Label>
                    <Input
                        id='email'
                        name='email'
                        type='email'
                        autoComplete='email'
                        className='mt-1 block w-full'
                        required
                    />
                </div>

                <div className='mt-4'>
                    <Label htmlFor='password'>Password</Label>
                    <Input
                        id='password'
                        name='password'
                        type='password'
                        autoComplete='password'
                        required
                        className='mt-1 block w-full'
                    />
                </div>

                <div className='mt-4'>
                    <Label htmlFor='password_confirmation'>Confirm Password</Label>
                    <Input
                        id='password_confirmation'
                        name='password_confirmation'
                        autoComplete='password_confirmation'
                        type='password'
                        className='mt-1 block w-full'
                        required
                    />
                </div>

                <div className='mt-4 flex items-center justify-between'>
                    <PrimaryLink to={'/'} value={'home'} />
                    <div>
                        <PrimaryLink to={'/login'} value={'login?'} />
                        <Button className='ml-4'>Log in</Button>
                    </div>
                </div>
            </form>
        </GuestLayout>
    );
}
