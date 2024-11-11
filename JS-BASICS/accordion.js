// Add your javascript here
const accordionHeaders = document.querySelectorAll('.title-section')
const multiple = document.getElementById('multiselect')
const descriptions = document.querySelectorAll('.description')

for(var i = 1; i < descriptions.length; i++) {
  descriptions[i].style.display = 'none';
}

accordionHeaders.forEach(header => {
  header.addEventListener('click', (event) => {
    console.log('Clicked')
    const title = event.target
    const description = title.parentNode.parentNode.querySelector('.description');
    const collapse = title.parentNode.querySelector('.collapse-icon')

    if (!multiple.checked) {
      const descriptions = document.querySelectorAll('.description')
      descriptions.forEach( des => {
        des.style.display = 'none'
      } )
    }

    if (description.style.display === 'none') {
      description.style.display = 'block';
    } else {
      description.style.display = 'none';
    }

    if (collapse.style.display === 'none') {
      collapse.style.display = 'block';
    } else {
      collapse.style.display = 'none';
    }

  })
})