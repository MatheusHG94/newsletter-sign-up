import React, { useEffect, useState } from 'react'
import { ReactComponent as SignUpImgMobile } from 'assets/images/illustration-sign-up-mobile.svg';
import { ReactComponent as SignUpImgDesktop } from 'assets/images/illustration-sign-up-desktop.svg';

export default function Banner() {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleScreenWidth = () => {
            setScreenWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleScreenWidth);

        return () => {
            window.removeEventListener('resize', handleScreenWidth);
        }
    }, [])

    if (screenWidth < 1024) {
        return <SignUpImgMobile />
    }
    return <SignUpImgDesktop />
}
