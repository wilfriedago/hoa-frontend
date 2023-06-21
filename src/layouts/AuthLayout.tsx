import { Menu, Popover, Transition } from '@headlessui/react';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import {
  ArrowTrendingUpIcon,
  Bars3Icon,
  BellIcon,
  FireIcon,
  HomeIcon,
  UserGroupIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { type ComponentProps, Fragment, type PropsWithChildren } from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { ShadPopover, ShadPopoverContent, ShadPopoverTrigger } from '@/components/ui/popover';
import { useAuth, useConfirm } from '@/hooks';
import { signIn, signOut } from '@/lib/logto';

import { Meta } from './Meta';

type Props = PropsWithChildren<ComponentProps<typeof Meta>>;

const user = {
  name: 'Chelsea Hagon',
  email: 'chelsea.hagon@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
};

const navigation = [
  { name: 'Accueil', href: '/profile', icon: HomeIcon, current: true },
  { name: 'Profile', href: '/profile/details', icon: UserGroupIcon, current: false },
  { name: 'Mes rendez-vous', href: '/profile/appointments', icon: FireIcon, current: false },
  { name: 'Historique de dons', href: '/profile/history', icon: ArrowTrendingUpIcon, current: false }
];

const userNavigation = [
  { name: 'Profile', href: '/profile/details' },
  { name: 'Paramètres', href: '/profile/settings' }
];

const Loader = () => (
  <div className="flex animate-pulse space-x-4">
    <div className="flex-1 space-y-4 py-1">
      <div className="space-y-2">
        <div className="h-20 w-20 animate-spin rounded-full border-8 border-double border-rose-600" />
      </div>
    </div>
  </div>
);

export const AuthLayout = ({ children, ...props }: Props) => {
  const confirm = useConfirm();

  const { isAuthenticated, isLoading, userInfo, isError } = useAuth();

  const handleDisconnect = () =>
    confirm.show({
      title: 'Vous êtes sur le point de vous déconnecter.',
      confirmLabel: 'Se déconnecter',
      onConfirm: () => signOut(),
      onCancel: () => confirm.dismiss()
    });

  if (isLoading) {
    return (
      <>
        <Meta {...props} />
        <div className="min-h-full">
          <div className="flex h-screen items-center justify-center">
            <Loader />
          </div>
        </div>
      </>
    );
  }

  if (isError) {
    return (
      <>
        <Meta {...props} />
        <div className="min-h-full">
          <div className="flex h-screen items-center justify-center">
            <h1 className="text-3xl">
              Une erreur est survenue. Veuillez contacter l&apos;administrateur du site si le problème persiste.
            </h1>
          </div>
        </div>
      </>
    );
  }

  if (!isLoading && !isAuthenticated) signIn();

  return (
    <>
      <Meta {...props} />
      <div className="min-h-full">
        <Popover
          as="header"
          className={({ open }) =>
            clsx(open ? 'fixed inset-0 z-40 overflow-y-auto' : '', 'bg-white shadow-sm lg:static lg:overflow-y-visible')
          }
        >
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="relative flex justify-between lg:gap-8 xl:grid xl:grid-cols-12">
                  <div className="flex md:absolute md:inset-y-0 md:left-0 lg:static xl:col-span-2">
                    <div className="flex shrink-0 items-center">
                      <Link href="/profile">
                        <Image
                          unoptimized
                          className="block h-8 w-auto"
                          src="https://tailwindui.com/img/logos/mark.svg?color=rose&shade=500"
                          alt="Your Company"
                          width={32}
                          height={32}
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-5">
                    <div className="flex items-center px-6 py-4 md:mx-auto md:max-w-3xl lg:mx-0 lg:max-w-none xl:px-0">
                      <form className="w-full">
                        <div className="relative">
                          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                          </div>
                          <input
                            id="search"
                            name="search"
                            className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 text-sm placeholder:text-gray-500 focus:border-rose-500 focus:text-gray-900 focus:outline-none focus:ring-1 focus:ring-rose-500 focus:placeholder:text-gray-400 sm:text-sm"
                            placeholder="Rechercher une information"
                            type="search"
                          />
                        </div>
                      </form>
                    </div>
                  </div>

                  <div className="hidden lg:flex lg:items-center lg:justify-end xl:col-span-5">
                    <Button className="mr-6 bg-rose-600 hover:bg-rose-700 focus:ring-rose-500">
                      <Link href="/requests#urgent">Demandes urgentes</Link>
                    </Button>

                    <Button variant="outline" className="mr-6">
                      <Link href="/campaigns">Voir les campagnes</Link>
                    </Button>

                    <ShadPopover>
                      <ShadPopoverTrigger asChild>
                        <Button variant="outline" className="w-10 rounded-full p-0">
                          <BellIcon className="h-6 w-6" />
                          <span className="sr-only">Open popover</span>
                        </Button>
                      </ShadPopoverTrigger>
                      <ShadPopoverContent className="w-80">
                        <div className="grid gap-4">
                          <div className="space-y-2">
                            <h4 className="font-medium leading-none">Dimensions</h4>
                            <p className="text-sm text-muted-foreground">Set the dimensions for the layer.</p>
                          </div>
                        </div>
                      </ShadPopoverContent>
                    </ShadPopover>

                    <Menu as="div" className="relative ml-5 shrink-0">
                      <div>
                        <Menu.Button className="flex rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2">
                          <span className="sr-only">Open user menu</span>
                          <Avatar>
                            <AvatarImage src={user.imageUrl} />
                            <AvatarFallback>CN</AvatarFallback>
                          </Avatar>
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none">
                          {userNavigation.map(item => (
                            <Menu.Item key={item.name}>
                              {({ active }) => (
                                <Link
                                  href={item.href}
                                  className={clsx(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                >
                                  {item.name}
                                </Link>
                              )}
                            </Menu.Item>
                          ))}
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                type="button"
                                onClick={handleDisconnect}
                                className={clsx(
                                  active ? 'bg-gray-100' : '',
                                  'block w-full px-4 py-2 text-start text-sm text-gray-700'
                                )}
                              >
                                Se déconnecter
                              </button>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                  <div className="flex items-center md:absolute md:inset-y-0 md:right-0 lg:hidden">
                    {/* Mobile menu button */}
                    <Popover.Button className="-mx-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-500">
                      <span className="sr-only">Open menu</span>
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Popover.Button>
                  </div>
                </div>
              </div>

              <Popover.Panel as="nav" className="lg:hidden" aria-label="Global">
                <div className="mx-auto max-w-3xl space-y-1 px-2 pb-3 pt-2 sm:px-4">
                  {navigation.map(item => (
                    <Link
                      key={item.name}
                      href={item.href}
                      aria-current={item.current ? 'page' : undefined}
                      className={clsx(
                        item.current ? 'bg-gray-100 text-gray-900' : 'hover:bg-gray-50',
                        'block rounded-md px-3 py-2 text-base font-medium'
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="mx-auto flex max-w-3xl items-center px-4 sm:px-6">
                    <div className="shrink-0">
                      <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium text-gray-800">{user.name}</div>
                      <div className="text-sm font-medium text-gray-500">{user.email}</div>
                    </div>
                    <button
                      type="button"
                      className="ml-auto shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
                    >
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="mx-auto mt-3 max-w-3xl space-y-1 px-2 sm:px-4">
                    {userNavigation.map(item => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                      >
                        {item.name}
                      </Link>
                    ))}
                    <button
                      type="button"
                      onClick={handleDisconnect}
                      className="block w-full rounded-md px-3 py-2 text-start text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                    >
                      Se déconnecter
                    </button>
                  </div>
                </div>
                <div className="mx-auto mt-6 max-w-3xl px-4 sm:px-6">
                  <Button className=" w-full  bg-rose-600 hover:bg-rose-700">
                    <Link href="/requests#urgent">Demandes urgentes</Link>
                  </Button>
                  <Button className="mt-2 w-full" variant="outline">
                    <Link href="/profile/donations">Faire un don</Link>
                  </Button>
                </div>
              </Popover.Panel>
            </>
          )}
        </Popover>

        <div className="py-10">{children}</div>
      </div>
    </>
  );
};
