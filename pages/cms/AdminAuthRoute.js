'use client'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import secureLocalStorage from 'react-secure-storage';

export default function AdminWithAuth(Component) {
  return function ProtectedRoute({ ...props }) {
    const router = useRouter();
    const user = secureLocalStorage.getItem('CMSTk');
    const userIsAuthenticated = user !== null;
   

    useEffect(() => {
        if (!userIsAuthenticated) {
          router.replace('/cms/login')
        }

    }, [userIsAuthenticated, router]);

    if(userIsAuthenticated){
      return <Component {...props} />
    }else{
      return (<h1 className='text-center m-4'><img src="https://miro.medium.com/v2/resize:fit:1400/1*CsJ05WEGfunYMLGfsT2sXA.gif" alt="Loader" /></h1>)
    }
  };
}