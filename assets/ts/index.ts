window.addEventListener('DOMContentLoaded', () => {

    navigateOnClick('.nav-brand', '/index.html');
    navigateOnClick('.nav-link.cart-menu', '/checkout.html');
    navigateOnClick('.back', document.referrer);
    navigateOnClick('.checkout', '/order.html');
    navigateOnClick('.to-payment', '/payment.html');
    navigateOnClick('.process-payment', '/confirm-payment.html');

    const shippingAddressToggle = (document.getElementById('diff-shipping-address') as HTMLInputElement);
    const shippingAddrSection = document.getElementsByClassName('shipping-address-section');
    if (shippingAddressToggle && shippingAddrSection[0]) {

        shippingAddressToggle.addEventListener('click', (evt) => {
            if (shippingAddressToggle.checked) {
                shippingAddrSection[0].classList.remove('no-display')
            } else {
                shippingAddrSection[0].classList.add('no-display');
            }
        })
    }

    const paymentMethods = document.querySelectorAll('input[type=radio][name=method]');
    if(paymentMethods && paymentMethods.length>0){
        paymentMethods.forEach((method)=>{
            method.addEventListener('change',(evt)=>{
                  (evt.target as any).parentNode.parentNode.parentNode.nextElementSibling.classList.remove('no-display')
            });

        })
    }

});

function toggleClass(elem, className) {
    if (!elem || !className) {
        return
    }
    if (elem.classList.contains(className)) {
        elem.classList.remove(className)
    } else {
        elem.classList.add(className)
    }
}

//events to navigate through
function navigateOnClick(selector, path) {
    const elems = document.querySelectorAll(selector);
    if (elems && elems.length > 0) {
        elems.forEach((elem) => {
            elem.addEventListener('click', () => {
                window.location.assign(path)
            })
        })
    }

}
