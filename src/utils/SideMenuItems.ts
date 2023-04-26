import type SideMenuItem from '@/interfaces/SideMenuItem'
import { Home, LayoutDashboard, UsersIcon, UserCog, FileText, Banknote, CogIcon, LockIcon } from 'lucide-vue-next'

const items: SideMenuItem[] = [
  {
    title: 'Dashboard',
    icon: LayoutDashboard,
    link: '/dashboard'
  },
  {
    title: 'Clientes',
    icon: UsersIcon,
    link: '/dashboard1'
  },
  {
    title: 'Usuarios',
    icon: UserCog,
    link: '/users'
  },
  {
    title: 'Relatórios',
    icon: FileText,
    link: '/dashboard1'
  },
  {
    title: 'Financeiro',
    icon: Banknote,
    link: '/dashboard3'
  },
  {
    title: 'Login',
    icon: LockIcon,
    link: '/login'
  }
]

export default items
