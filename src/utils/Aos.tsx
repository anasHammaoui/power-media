    // AOSProvider.js
    'use client'; // Mark as a client component

    import AOS from 'aos';
    import 'aos/dist/aos.css'; // Import the AOS CSS
    import { ReactNode, useEffect } from 'react';

    const AOSProvider = ({ children  }: {children : ReactNode}) => {
      useEffect(() => {
        AOS.init({
        });
      }, []);

      return <>{children}</>;
    };

    export default AOSProvider;