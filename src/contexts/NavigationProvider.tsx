'use client';

import { createAlias } from '@/utils/EstablishmentUtils';
import React, { createContext, useState } from 'react';

interface NavigationContextProps {
  headerTitle: string;
  setHeaderTitle(title: string): void;
  headerColor: string;
  setHeaderColor(color: string): void;
}

const NavigationContext = createContext<NavigationContextProps>({} as any);

export function NavigationProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [title, setTitle] = useState<string>('');
  const [headerColor, setHeaderColor] = useState<string>('');

  return (
    <NavigationContext.Provider
      value={{ title, setTitle, headerColor, setHeaderColor }}
    >
      {children}
    </NavigationContext.Provider>
  );
}

export default NavigationContext;
