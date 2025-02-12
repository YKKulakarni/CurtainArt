import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import newLogo from '../assets/images/newLogo.png';

const navigation = [
    { name: 'HOME', href: '#', current: true },
    { name: 'OUR PRODUCTS', href: '#rating', current: false },
    { name: 'GET ESTIMATE', href: '#', current: false },
    { name: 'ABOUT US', href: '#footer', current: false },
    // { name: 'HELP', href: '#', current: false }
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    return (
        <Disclosure as="nav" style={{ backgroundColor: '#f4e6de' }}>
            <div className="w-full mx-auto  sm:px-6 lg:px-8">
                <div className="w-full relative flex h-16 items-center justify-between ">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button*/}
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white ">
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
                            <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
                        </DisclosureButton>
                    </div>
                    <div className="flex flex-4 mx-auto items-center justify-center sm:items-stretch sm:justify-start gap-8">
                        <div className="flex shrink-0 items-center">
                            <a href="#home">
                                <img
                                    alt="Curtainarts"
                                    src={newLogo}
                                    className="w-16"
                                />
                            </a>
                        </div>
                        <div className="hidden sm:ml-6 sm:block pt-2">
                            <div className="flex space-x-4">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        aria-current={item.current ? 'page' : undefined}
                                        className={classNames(
                                            item.current ? 'text-gray' : 'text-gray-600 hover:bg-gray-700 hover:text-white', 'transition 0.5s ease-in-out',
                                            'rounded-md px-3 py-2 text-sm font-medium',
                                        )}
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <DisclosurePanel className="sm:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    {navigation.map((item) => (
                        <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            aria-current={item.current ? 'page' : undefined}
                            className={classNames(
                                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                'block rounded-md px-3 py-2 text-base font-medium',
                            )}
                        >
                            {item.name}
                        </DisclosureButton>
                    ))}
                </div>
            </DisclosurePanel>
        </Disclosure>
    )
}
