import React from 'react';

import GuestLayout from '@/layouts/GuestLayout';
import type { NextPageWithLayout } from '@/utils/types';

const RequestsPage: NextPageWithLayout = () => {
  return <div>RequestsPage</div>;
};

RequestsPage.layout = page => (
  <GuestLayout title="Demandes | Blood Donation App" description="Demandes">
    {page}
  </GuestLayout>
);

export default RequestsPage;
