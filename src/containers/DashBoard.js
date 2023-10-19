import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import profile from '../static/images/profile.png';
import NavBar from '../components/NavBar';

const user = {
  name: 'Tanka',
  email: 'tom@example.com',
  imageUrl: '../static/images/profile.png',
}
const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Messages', href: '#', current: false },
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function DashBoard() {
  return (
    <>
      <NavBar/>

        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <a
                href="#"
                className="rounded-md bg-emerald-600 px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Create Task
              </a>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">my Content</div>
        </main>
      
    </> 
  )
}