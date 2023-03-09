export default function hamburguerMenu (btn, panel) {
  const d = document,
    c = console.log

  d.addEventListener("click", e => {
    if(e.target.matches(btn) || e.target.matches(`${btn} *`)) {
      d.querySelector(`${btn}`).classList.toggle('is-active')
      d.querySelector(`${panel}`).classList.toggle('active-menu')
    }
  })
}