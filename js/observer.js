const d = document
export default function animationSkills () {
  const containerSkill = d.querySelector('#container-skills')
  console.log('Container Skill', containerSkill)

  const cb = (objetive, observer) => {
    objetive.forEach(element => {
      if (element.isIntersecting) {
        element.target.style.animation = "skills-bar-fill 2s forwards";
        observer.unobserve(element.target)
      }
    });
  }

  const observer = new IntersectionObserver(cb, {
    threshold: 0.5
  })
  observer.observe(containerSkill)
}