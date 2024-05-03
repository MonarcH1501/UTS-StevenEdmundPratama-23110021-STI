function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "navlist") {
      x.className += " responsive";
    } else {
      x.className = "navlist";
    }
  }

  window.addEventListener("load", function() {
    const profilePhoto = document.getElementById("profile-photo");
    const profileText = document.querySelector(".profile-text");
    const animation = profilePhoto.animate([
      { transform: 'translateY(100px)', opacity: 0 },
      { transform: 'translateY(0)', opacity: 1 }
    ], {
      duration: 1000,
      easing: 'ease-out'
    });
    animation.addEventListener("finish", function() {
      profileText.style.animation = "fade-in 1s ease-out";
    });
  });

  const header=document.querySelector("header");
  window.addEventListener("scroll" ,function(){
    header.classList.toggle("sticky", window.scrollY > 120 );
  });

// Get all dropdown menu items
var dropdownItems = document.querySelectorAll('.dropdown-content a');

// Loop through each dropdown menu item
dropdownItems.forEach(function(item) {
    // Add click event listener to each dropdown menu item
    item.addEventListener('click', function() {
        // Remove active class from all dropdown menu items
        dropdownItems.forEach(function(item) {
            item.classList.remove('active');
        });
        // Add active class to the clicked dropdown menu item
        this.classList.add('active');
        // Add active class to the parent dropdown button
        var dropbtn = this.closest('.dropdown').querySelector('.dropbtn');
        dropbtn.classList.add('active');
    });
});


// alert untuk sosial media container

document.addEventListener("DOMContentLoaded", function() {
  var links = {
      '#instagram': 'https://www.instagram.com/steven_edmund_?igsh=MWl5cWQ2dnQ5azZkZw==',
      '#whatsapp': 'https://wa.me/+62895615283206'
  };

  var messages = {
      '#instagram': 'Follow my Instagram',
      '#whatsapp': 'Chat me on WhatsApp'
  };

  var socialIcons = document.querySelectorAll(".sosial-media a");

  socialIcons.forEach(function(icon) {
      icon.addEventListener("click", function(event) {
          event.preventDefault(); // Prevent the default action (i.e., following the link)

          var href = this.getAttribute("href");
          var link = links[href];
          var message = messages[href];

          if (link && message) {
            var confirmMessage = message + "";
            var confirmed = confirm(confirmMessage);
            if (confirmed) {
                window.open(link, '_blank'); // Open the link in a new tab
            }
        } else {
            alert("No link or message defined for this icon.");
        }
      });
  });
});

// drop down

// Get all dropdown buttons
var dropdownButtons = document.querySelectorAll('.dropdown .dropbtn');

// Loop through each dropdown button
dropdownButtons.forEach(function(button) {
    // Add click event listener to each dropdown button
    button.addEventListener('click', function() {
        // Remove active class from all dropdown buttons
        dropdownButtons.forEach(function(button) {
            button.classList.remove('active');
        });
        // Add active class to the clicked dropdown button
        this.classList.add('active');
    });
});

//coba coba geser picture jadi slide
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

// untuk button page services
var buttons = document.querySelectorAll('.button-service');

// Loop melalui setiap tombol dan tambahkan event listener untuk klik
buttons.forEach(function(button) {
  button.addEventListener('click', function(event) {
    // Menghentikan tindakan default dari link
    event.preventDefault();

    // Periksa id tombol yang diklik
    var id = button.id;
    // Tentukan pesan yang sesuai berdasarkan id tombol
    var pesan;
    if (id === 'web') {
      pesan = 'Want to get Web Development Services?';
    } else if (id === 'mobile') {
      pesan = 'Want to get Mobile Development Services?';
    } else if (id === 'data') {
      pesan = 'Want to get Data Analyst Services?';
    }

    // Tampilkan pesan konfirmasi dengan alert
    if (confirm(pesan)) {
      // Jika pengguna menekan OK dalam alert, arahkan mereka ke halaman baru
      // Tentukan URL yang sesuai berdasarkan id tombol
      var url;
      if (id === 'web') {
        url = 'servicesform.html'; // Ganti dengan URL halaman web development Anda
      } else if (id === 'mobile') {
        url = 'servicesform.html'; // Ganti dengan URL halaman mobile development Anda
      } else if (id === 'data') {
        url = 'servicesform.html'; // Ganti dengan URL halaman data analyst Anda
      }
      // Arahkan pengguna ke halaman baru
      window.location.href = url;
    } else {
      // Jika pengguna menekan Cancel dalam alert, tidak ada tindakan yang diambil
      // Anda bisa menambahkan logika tambahan di sini jika diperlukan
    }
  });
});


