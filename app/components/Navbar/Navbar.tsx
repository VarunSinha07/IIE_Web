"use client"
import { Disclosure } from '@headlessui/react';
import Link from 'next/link';
import React from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Image from 'next/image';

interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

const navigation: NavigationItem[] = [
    { name: 'About Us', href: '/aboutUs', current: false },
    { name: 'Programs', href: '/programs', current: false },
    { name: 'Facilities', href: '/facilities', current: false },
    { name: 'Mentors', href: 'mentors', current: false },
    { name: 'IIC Events', href: '/events', current: false },
    { name: 'Insights', href: '/insights', current: false },
    { name: 'Apply Now ', href: '/applyNow', current: false },
    { name: 'Contact Us', href: '/contactUs', current: false },
];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <Disclosure as="nav" className="fixed top-0 left-0 w-full z-50 bg-white shadow">
            <>
                <div className="mx-auto max-w-7xl p-3 md:p-4 lg:px-8">
                    <div className="relative flex h-12 sm:h-20 items-center">
                        <div className="flex flex-1 items-center sm:justify-between">
                            {/* LOGO */}
                            <Link href="/" className='text-2xl sm:text-4xl font-semibold text-black'>
                                <Image
                                    src="/images/navbar/IIELOGO.png"
                                    alt="IIE Logo"
                                    width={130}
                                    height={104}
                                    className="h-8 sm:h-16"
                                />
                            </Link>

                            {/* NAV LINKS */}
                            <div className="hidden lg:flex items-center border-right">
                                <div className="flex justify-end space-x-4">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className={classNames(
                                                item.current ? 'bg-gray-900' : 'navlinks hover:text-black',
                                                'px-3 py-4 rounded-md text-s font-normal'
                                            )}
                                            aria-current={item.href ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* SRM LOGO */}
                            <div>
                                <Image
                                    src="/images/navbar/SRMLOGO.png"
                                    alt="Logo"
                                    width={180}
                                    height={70}
                                    className="h-16 sm:h-32"
                                />
                            </div>
                        </div>

                        {/* DRAWER ICON */}
                        <div className='block lg:hidden'>
                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" onClick={() => setIsOpen(true)} />
                        </div>

                        {/* MOBILE DRAWER */}
                        <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                            <Drawerdata />
                        </Drawer>
                    </div>
                </div>
            </>
        </Disclosure>
    );
};

export default Navbar;
