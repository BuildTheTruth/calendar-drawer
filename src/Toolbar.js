// import ArrowLeftIcon from './ArrowLeftIcon'
import { ReactComponent as ChevronLeft } from './svg/chevron-left-solid.svg'
import { ReactComponent as ChevronRight } from './svg/chevron-right-solid.svg'

export default function Toolbar({ date, onNavigate }) {
  const month = ('0' + (date.getMonth() + 1)).slice(-2)
  const label = `${date.getFullYear()}. ${month}`

  return (
    <div className="rbc-toolbar">
      <span className="rbc-btn-group">
        <button type="button" onClick={() => onNavigate('PREV')}>
          <span className="svg-wrapper">
            <ChevronLeft width="16" height="16" />
          </span>
        </button>
        <span className="rbc-toolbar-label">{label}</span>
        <button type="button" onClick={() => onNavigate('NEXT')}>
          <span className="svg-wrapper">
            <ChevronRight width="16" height="16" />
          </span>
        </button>
      </span>
    </div>
  )
}
