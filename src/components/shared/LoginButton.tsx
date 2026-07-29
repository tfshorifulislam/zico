import React from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';

const LoginButton = () => {
    return (
        <Link href={'/login'}>
            <Button variant='outline' className='px-5 cursor-pointer'>
                Login

            </Button>
        </Link>
    );
};

export default LoginButton;