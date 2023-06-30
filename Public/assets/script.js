$(document).ready(function() {
    $("#continue-btn").click(function() {
        $('.pop-up-alert')
        .toggle()
        .slideDown()
        .css({
            "display": "flex"
        });
    });

    $("#refresh-btn").click(function() {
        window.location.reload();
    })

    $(document).ready(function () {
        myCounter($(".circle h1"), 77, 10);
        myCounter($(".reaction span"), 80, 80);
        myCounter($(".memory span"), 92, 80);
        myCounter($(".verbal span"), 61, 80);
        myCounter($(".visual span"),72, 80);
        
        function myCounter(element, countLimit, countSpeed) {

            let count = 1;

            function animate() {
                element.html(count);
                count++;
                if (count > countLimit) {
                    clearInterval(interval);
                }
            }

            let interval = setInterval(animate, countSpeed);
            
        }
    })
})