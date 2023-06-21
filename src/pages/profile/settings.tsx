import React from 'react';

import { AuthLayout } from '@/layouts';
import type { NextPageWithLayout } from '@/utils/types';

const sidebarNavItems = [
  {
    title: 'Profile',
    href: '/examples/forms'
  },
  {
    title: 'Compte',
    href: '/examples/forms/account'
  },
  {
    title: 'Apparence',
    href: '/examples/forms/appearance'
  },
  {
    title: 'Notifications',
    href: '/examples/forms/notifications'
  },
  {
    title: 'Affichage',
    href: '/examples/forms/display'
  }
];

const SettingsPage: NextPageWithLayout = () => {
  return <></>;
};

SettingsPage.layout = page => (
  <AuthLayout title="Paramètres | Blood Donation App" description="Accueil">
    {page}
  </AuthLayout>
);

export default SettingsPage;
