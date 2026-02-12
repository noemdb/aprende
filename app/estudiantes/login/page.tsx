'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function StudentLoginPage() {
    const router = useRouter();

    useEffect(() => {
        router.replace('/login');
    }, [router]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#05120d]">
            <p className="text-white">Redirigiendo al login institucional...</p>
        </div>
    );
}
