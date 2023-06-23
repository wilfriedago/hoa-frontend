import {
  Bars4Icon,
  CalendarIcon,
  ClockIcon,
  PhotoIcon,
  TableCellsIcon,
  ViewColumnsIcon
} from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Link from 'next/link';

import { AuthLayout } from '@/layouts';
import { useAppSelector } from '@/store';
import type { NextPageWithLayout } from '@/utils/types';

const items = [
  {
    title: 'Créer une organisation',
    description: 'Vous êtes un centre de santé, ou un centre de collecte ?',
    icon: Bars4Icon,
    background: 'bg-pink-500',
    href: '/profile/organizations/new'
  },
  {
    title: 'Je souhaite sauver des vies',
    description: 'Soyez un héros, sauvez des vies en donnant votre sang.',
    icon: CalendarIcon,
    background: 'bg-yellow-500',
    href: '/profile/donors'
  },
  {
    title: 'Créer une campagne de don',
    description: 'Organisez une campagne de don de sang dans votre entreprise ou votre quartier.',
    icon: PhotoIcon,
    background: 'bg-green-500',
    href: '/profile/campaigns/new'
  },
  {
    title: 'Participer à une campagne de don',
    description: 'Vous souhaitez donner votre sang ?',
    icon: ViewColumnsIcon,
    background: 'bg-blue-500',
    href: '/profile/campaigns'
  },
  {
    title: 'Demandes de dons urgentes',
    description: 'Voir les demandes de dons urgentes.',
    icon: TableCellsIcon,
    background: 'bg-rose-500',
    href: '/profile/requests'
  },
  {
    title: 'Consultez votre historique de dons',
    description: 'Voir les détails de vos dons de sang.',
    icon: ClockIcon,
    background: 'bg-purple-500',
    href: '/profile/history'
  }
];

const ProfilePage: NextPageWithLayout = () => {
  const user = useAppSelector(state => state.auth.userInfo);

  return (
    <div className="">
      <h2 className="text-lg font-medium text-gray-900">
        Bienvenue sur votre espace personnel<span className="text-rose-600">&nbsp;{user?.name}</span>
      </h2>
      <p className="mt-1 text-sm text-gray-500">
        Vous pouvez créer une organisation, une campagne de don, ou participer à une campagne de don.
      </p>
      <ul className="mt-6 grid grid-cols-1 gap-6 border-y border-gray-200 py-6 sm:grid-cols-2">
        {items.map((item, itemIdx) => (
          <li key={itemIdx} className="flow-root">
            <div className="relative -m-2 flex items-center space-x-4 rounded-xl p-2 focus-within:ring-2 focus-within:ring-rose-500 hover:bg-gray-50">
              <div className={clsx(item.background, 'flex h-16 w-16 shrink-0 items-center justify-center rounded-lg')}>
                <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900">
                  <Link href={item.href} className="focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true" />
                    <span>{item.title}</span>
                    <span aria-hidden="true"> &rarr;</span>
                  </Link>
                </h3>
                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex">
        <a href="#" className="text-sm font-medium text-rose-600 hover:text-rose-500">
          Or start from an empty project
          <span aria-hidden="true"> &rarr;</span>
        </a>
      </div>
    </div>
  );
};

ProfilePage.layout = page => (
  <AuthLayout title="Profile | Blood Donation App" description="Accueil">
    {page}
  </AuthLayout>
);

export default ProfilePage;
