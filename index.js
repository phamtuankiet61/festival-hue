const sliderList = document.querySelector('.traditional-village-slider-list');
const btnNext = document.querySelector('.btn-next');
const btnPrev = document.querySelector('.btn-prev');

btnNext.onclick = () => {
    const firstItem = sliderList.firstElementChild;
    const activeItem = firstItem.nextElementSibling;
    activeItem.classList.remove('active');
    activeItem.nextElementSibling.classList.add('active');

    //Thêm / Xóa class d-none khi click btn-next
    activeItem.querySelector('.overlay-content').classList.add('d-none');
    const btnChangeClass = activeItem.querySelector('.pull-up.d-none') ? activeItem.querySelector('.pull-down') : activeItem.querySelector('.pull-up');
    btnChangeClass.classList.add('d-none');

    activeItem.nextElementSibling.querySelector('.overlay-content').classList.remove('d-none');
    const btnChangeClass1 = activeItem.nextElementSibling.querySelector('.overlay-content').style.top === '0px' ? activeItem.nextElementSibling.querySelector('.pull-down.d-none') : activeItem.nextElementSibling.querySelector('.pull-up.d-none');
    btnChangeClass1.classList.remove('d-none');
    

    sliderList.removeChild(firstItem);
    sliderList.appendChild(firstItem);
}

btnPrev.onclick = () => {
    const lastItem = sliderList.lastElementChild; 
    const firstItem = sliderList.firstElementChild;
    const activeItem = firstItem.nextElementSibling;
    firstItem.classList.add('active');
    activeItem.classList.remove('active');

    //Thêm / Xóa class d-none khi click btn-prev
    activeItem.querySelector('.overlay-content').classList.add('d-none');
    const btnChangeClass = activeItem.querySelector('.pull-up.d-none') ? activeItem.querySelector('.pull-down') : activeItem.querySelector('.pull-up');
    btnChangeClass.classList.add('d-none');

    firstItem.querySelector('.overlay-content').classList.remove('d-none');
    const btnChangeClass1 = firstItem.querySelector('.overlay-content').style.top === '0px' ? firstItem.querySelector('.pull-down.d-none') : firstItem.querySelector('.pull-up.d-none');
    btnChangeClass1.classList.remove('d-none');


    sliderList.removeChild(lastItem);    
    sliderList.insertBefore(lastItem, sliderList.firstElementChild); 
}

// Xử lý pull up / pull down làng nghề truyền thống
const allBtnPullUps = document.querySelectorAll('.pull-up');
const allBtnPullDowns = document.querySelectorAll('.pull-down');
const btnPullUp = document.querySelector('.traditional-village-slider-item.active .pull-up');
const overlayContent = document.querySelector('.traditional-village-slider-item.active .overlay-content');

btnPullUp.classList.remove('d-none');
overlayContent.classList.remove('d-none');

allBtnPullUps.forEach(btnpullup => {
    const btnpulldown = btnpullup.parentElement.querySelector('.pull-down');
    const overlaycontent = btnpullup.parentElement.querySelector('.overlay-content');

    btnpullup.onclick = () => {
        overlaycontent.style.top = 0;
        setTimeout(() => {
            btnpullup.classList.add('d-none');
            btnpulldown.classList.remove('d-none');
        }, 350);
    }
})

allBtnPullDowns.forEach(btnpulldown => {
    const btnpullup = btnpulldown.parentElement.querySelector('.pull-up');
    const overlaycontent = btnpulldown.parentElement.querySelector('.overlay-content');

    btnpulldown.onclick = () => {
        overlaycontent.style.top = '100%';
        setTimeout(() => {
            btnpulldown.classList.add('d-none');
            btnpullup.classList.remove('d-none');
        }, 350)
    }
})

// Xử lý active button filters
const btnFilters = document.querySelectorAll('.event-filters-btn');

btnFilters.forEach(btnFilter => {
    btnFilter.onclick = e => {
        e.target.parentElement.querySelector('.event-filters-btn.active').classList.remove('active');
        e.target.classList.add('active');
    }
})

// Xử lý active button pagination
const btnNumbers = document.querySelectorAll('.event-pagination .btn-number');
btnNumbers.forEach(btnNumber => {
    btnNumber.onclick = e => {
        e.target.parentElement.querySelector('.event-pagination .btn-number.active').classList.remove('active');
        e.target.classList.add('active');
    }
})

// Xử lý ẩn hiện model form-buy-ticket
const buyTicket = document.querySelector('.buy-ticket');
const buyTicketModel = document.querySelector('.buy-ticket-model');
const footerAboutLinkBuyTicketBtn = document.querySelector('.footer-about-link-buy-ticket-btn');
const btnFooterRegisters = document.querySelectorAll('.footer-register-btn');
const btnBookTickets = document.querySelectorAll('.book-ticket-btn');

btnFooterRegisters.forEach(bnt => {
    bnt.onclick = () => {
        buyTicket.classList.remove('d-none');
    }
})

btnBookTickets.forEach(bnt => {
    bnt.onclick = () => {
        buyTicket.classList.remove('d-none');
    }
})

footerAboutLinkBuyTicketBtn.onclick = () => {
    buyTicket.classList.remove('d-none');
}

buyTicket.onclick = e => {
    if(!buyTicketModel.contains(e.target)) {
        buyTicket.classList.add('d-none');
    }
}

// Xử lý button Back To Top
const btnBackToTop = document.querySelector('.btn-back-to-top');

window.addEventListener("scroll", () => {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        btnBackToTop.classList.add("show");
    } else {
        btnBackToTop.classList.remove("show");
    }
});

btnBackToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

