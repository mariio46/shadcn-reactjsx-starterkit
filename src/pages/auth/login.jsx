import PrimaryLink from '@/components/primary-link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import GuestLayout from '@/layouts/guest-layout';

export default function Login() {
    return (
        <GuestLayout title='Login' description='Welcome back, enter your credentials to continue.'>
            <form>
                <div>
                    <Label htmlFor='email'>Email</Label>
                    <Input
                        id='email'
                        name='email'
                        type='email'
                        autoFocus
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
                        className='mt-1 block w-full'
                        required
                    />
                </div>

                <div className='mt-4 flex items-center justify-between'>
                    <PrimaryLink to={'/'} value={'home'} />
                    <div>
                        <PrimaryLink to={'/register'} value={'register?'} />
                        <Button className='ml-4'>Log in</Button>
                    </div>
                </div>
            </form>
        </GuestLayout>
    );
}
