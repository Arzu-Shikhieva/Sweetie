var swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 600,
        modifier: 1,
        slideShadows : true,
      },
      pagination: {
        el: '.swiper-pagination',
      },
    });


document.getElementById("cart-info").addEventListener(
	"click" , function() {
		const cart = document.getElementById("cart");
		cart.classList.toggle("show-cart");
		console.log(cart);
	});