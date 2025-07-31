import { Stack, usePathname, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { getFirebaseAuth } from '@/firebase';

export default function AuthLayout() {
    const pathname = usePathname();
    const router = useRouter();
    const [isMounted, setIsMounted] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(null); // null = loading, true/false = status

    useEffect(() => {
        const auth = getFirebaseAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            // @ts-ignore
            setIsLoggedIn(!!user); // true wenn user existiert, sonst false
            setIsMounted(true);
        });

        return unsubscribe; // Clean up listener on unmount
    }, []);

    useEffect(() => {
        if (!isMounted || isLoggedIn === null || !pathname) return;

        // Wenn nicht eingeloggt und in privatem Bereich
        if (!isLoggedIn && pathname.startsWith('/tabs')) {
            router.replace('/');
        }

        // Wenn eingeloggt und auf Loginseite weiterleiten
        if (isLoggedIn && pathname === '/') {
            router.replace('/tabs/home');
        }
    }, [isMounted, isLoggedIn, pathname, router]);

    return <Stack screenOptions={{ headerShown: false }} />;
}
