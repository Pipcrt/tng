const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href').substring(1)

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

function showDivOne() {
  document.getElementById('reg_one').style.display = "block";
  document.getElementById('podlojka').style.display = "block";
}

function showDivTwo() {
  document.getElementById('reg_two').style.display = "block";
  document.getElementById('podlojka').style.display = "block";
}

function showDivThree() {
  document.getElementById('reg_three').style.display = "block";
  document.getElementById('podlojka').style.display = "block";
}


function hideDiv() {
  document.getElementById('reg_one').style.display = "none";
  document.getElementById('reg_two').style.display = "none";
  document.getElementById('reg_three').style.display = "none";
  document.getElementById('podlojka').style.display = "none";
}



