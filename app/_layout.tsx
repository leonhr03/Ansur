import { Stack, usePathname, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';

export default function Layout() {
    const pathname = usePathname();
    const router = useRouter();
    const [isMounted, setIsMounted] = useState(false);
    const isLoggedIn = true;

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (!isMounted || !pathname) return;

        if (!isLoggedIn && pathname.startsWith('/tabs')) {
            router.replace('/');
            return;
        }
    }, [isMounted, pathname, isLoggedIn, router]);

    return <Stack screenOptions={{ headerShown: false }} />;
}
