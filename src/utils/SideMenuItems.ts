import type SideMenuItem from '@/interfaces/SideMenuItem'
import { RectangleGroupIcon, UserGroupIcon, Cog6ToothIcon, LockClosedIcon } from '@heroicons/vue/24/outline'

const items: SideMenuItem[] = [
  {
    title: 'Dashboard',
    icon: RectangleGroupIcon,
    link: '/dashboard'
  },
  {
    title: 'Clientes',
    icon: UserGroupIcon,
    link: '/components'
  },
  {
    title: 'Configurações',
    icon: Cog6ToothIcon,
    link: '/components'
  },
  {
    title: 'Login',
    icon: LockClosedIcon,
    link: '/login'
  }
]

export default items
