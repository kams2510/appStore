// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetail, changeTabBtn, isCurrentTab} = props
  const {tabId, displayText} = tabDetail
  const currentTab = isCurrentTab ? 'active-tab' : null
  const onChangeTab = () => {
    changeTabBtn(tabId, isCurrentTab)
  }
  return (
    <li>
      <button type="button" onClick={onChangeTab} className={currentTab}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
