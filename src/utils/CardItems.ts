import { ArrowDirection } from '@/enum/ArrowDirection'
import type CardStatsItem from '@/interfaces/CardStatsItem'
import { BarChart2, User, Sticker, Laugh } from 'lucide-vue-next'

const CardItems: CardStatsItem[] = [
  {
    statSubtitle: 'Tráfego',
    statTitle: '104',
    statDescription: 'Último mês',
    statPercent: '3,47',
    arrowDirection: ArrowDirection.UP,
    icon: BarChart2
  },
  {
    statSubtitle: 'Novos Clientes',
    statTitle: '2',
    statDescription: 'Último mês',
    statPercent: '100',
    arrowDirection: ArrowDirection.UP,
    icon: User
  },
  {
    statSubtitle: 'Pedidos',
    statTitle: '11651',
    statDescription: 'Último mês',
    statPercent: '12,26',
    arrowDirection: ArrowDirection.DOWN,
    icon: Sticker
  },
  {
    statSubtitle: 'Taxa de Satisfação',
    statTitle: '97,5%',
    statDescription: 'Último mês',
    statPercent: '0,3',
    arrowDirection: ArrowDirection.UP,
    icon: Laugh
  }
]

export default CardItems
