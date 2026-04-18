import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <Link href="/" className={`flex items-center gap-2 ${className}`}>
      <div className="relative w-8 h-8 overflow-hidden rounded-lg bg-indigo-600 flex items-center justify-center">
         <Image 
            src="/burros.png" 
            alt="Burros.AI Logo" 
            width={32} 
            height={32}
            className="object-contain"
            onError={(e) => {
                (e.target as any).style.display = 'none';
            }}
         />
      </div>
      <span className="font-bold text-xl tracking-tight text-white">Burros<span className="text-indigo-400">.AI</span></span>
    </Link>
  );
};
