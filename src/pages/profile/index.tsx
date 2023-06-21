import { Fragment } from 'react';

import { AuthLayout } from '@/layouts';
import type { NextPageWithLayout } from '@/utils/types';

const ProfilePage: NextPageWithLayout = () => {
  return <>Test</>;
};

ProfilePage.layout = page => (
  <AuthLayout title="Profile | Blood Donation App" description="Accueil">
    {page}
  </AuthLayout>
);

export default ProfilePage;
