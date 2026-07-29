import React from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';

const LoginButton = () => {
    return (
        <Link href={'/login'} className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg">
            <Button 
                variant='default' 
                className='px-6 font-semibold bg-white text-[#2a1645] hover:bg-white/90 shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all duration-300 rounded-lg cursor-pointer h-9 md:h-10 text-sm'
            >
                Login
            </Button>
        </Link>
    );
};

export default LoginButton;