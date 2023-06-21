import Link from 'next/link';

import { InfoLayout } from '@/layouts';
import type { NextPageWithLayout } from '@/utils/types';

const NotFoundPage: NextPageWithLayout = () => {
  return (
    <>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page introuvable</h1>
      <p className="mt-6 text-base leading-7 text-gray-600">Désolé, cette page n&apos;existe pas, ou a été déplacée.</p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <Link
          href="/"
          className="rounded-md bg-rose-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600"
        >
          Revenir à l&apos;accueil
        </Link>
        <Link href="/contact" className="text-sm font-semibold text-gray-900">
          Contacter le support <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </>
  );
};

NotFoundPage.layout = page => (
  <InfoLayout
    title="Page introuvable | Blood Donation App"
    description="Désolé, cette page n'existe pas, ou a été déplacée."
  >
    {page}
  </InfoLayout>
);

export default NotFoundPage;
