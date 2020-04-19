import styles from './index.module.css'

const MAX_NUMBER = 144

function onClickHandler(event) {
  // Handle clicks on already active items
  if (event.target.getAttribute('data-active') === 'true') {
    for (let i = 1; i <= MAX_NUMBER; i++) {
      const element = document.getElementById(`list-item-${i}`)
      element.setAttribute('data-active', 'false')
    }
    return
  }
  
  // Highlight all numbers divisibile by the number that has been clicked on
  const targetNumber = event.target.innerHTML
  for (let i = 1; i <= MAX_NUMBER; i++) {
    const element = document.getElementById(`list-item-${i}`)
    if (i % targetNumber == 0) {
      element.setAttribute('data-active', 'true')
    } else {
      element.setAttribute('data-active', 'false')
    }
  }
}

export default () => (
  <ul className={styles.list}>
    {[ ...Array(MAX_NUMBER).keys() ].map(i =>
      <li id={`list-item-${i+1}`}
          key={`list-item-${i+1}`}
          onClick={onClickHandler}
          className={styles['list-item']}
        >{i + 1}</li>
    )}
  </ul>
)
