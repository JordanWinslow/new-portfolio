import { Columns, Grid3x2, List, Sheet } from 'lucide-react'
import type { LayoutType } from '@/types/portfolio/LayoutType'

interface IPortfolioLayoutControlsProps {
  layout: LayoutType
  handleLayoutChange: (layout: LayoutType) => void
}

export function PortfolioLayoutControls({
  layout,
  handleLayoutChange,
}: IPortfolioLayoutControlsProps) {
  return (
    <div className="flex items-center gap-2 p-3 bg-black/90 backdrop-blur-md border border-white/20 rounded-xl shadow-2xl">
      {[
        { id: 'grid', icon: Grid3x2, label: 'GRID' },
        {
          id: 'columns',
          icon: Columns,
          label: 'COLUMNS',
          hideWhenMobile: true,
        },
        { id: 'list', icon: List, label: 'LIST' },
        { id: 'table', icon: Sheet, label: 'TABLE' },
      ].map((control) => {
        const Icon = control.icon
        const isSelectedLayout = layout === control.id
        return (
          <button
            type="button"
            key={control.id}
            onClick={() => handleLayoutChange(control.id as LayoutType)}
            className={`cursor-pointer p-3 rounded-lg transition-all duration-300 font-mohave font-semibold text-xs tracking-wide hover-lift ${
              isSelectedLayout
                ? 'bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 text-white shadow-lg'
                : 'text-gray-400 hover:text-white hover:bg-white/10'
            }${control.hideWhenMobile ? ' hide-below-540' : ''}`}
            aria-label={`Switch to ${control.label} layout`}
          >
            <Icon size={20} />
          </button>
        )
      })}
    </div>
  )
}
