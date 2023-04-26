import type { FunctionalComponent } from 'vue'
import { ArrowDirection } from '@/enum/ArrowDirection'

interface CardStatsItem {
  statTitle: string
  statSubtitle: string
  statPercent: string
  statDescription: string
  arrowDirection: ArrowDirection
  icon: FunctionalComponent
}

export default CardStatsItem
