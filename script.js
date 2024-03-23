const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});
function circleMouse(){
    window.addEventListener("mousemove",function(dets){
        document.querySelector(".circle1").style.transform =`translate(${dets.clientX}px,${dets.clientY}px)`
    })
}
circleMouse();