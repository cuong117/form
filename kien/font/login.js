/*------------Load bảng -----------*/
$(document).ready(function() {

    var results = $('.form-group:nth-child(3)').children('span');

    var but = $('#login');

    var form = document.querySelector('form');

    $('#login').click(function(e) {

        e.preventDefault();
        var data = new FormData(form);
        fetch('http://localhost/php/account/login', {
                body: data,
                method: 'post'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.login == true) {
                    // location.href = "../font/view.html"
                    /* var sr = document.getElementById('#search');
                    //var divp = document.createElement('p');
                    sr.innerHTML = `<p> ${data.user_id}</p>`
                        //divp.innerHTML = ``;
                    sr.appendChild(divp);
                    console.log(sr)
*/
                    //list.appendChild(divItem);
                } else {
                    $(results).html("Mật khẩu sai");

                }

            })
    })


});








//ajax k load lại trang
//$('.menu').on("click", "a", function() {
//  var hrf = $(this).attr("href");
//var lin = hrf.substring(1, hrf.length);
// alert(lin);
// $('.main-top').load(lin);
//})
$('.phantrang').on("click", "a", function() {
    $(this).siblings().removeClass('act');
    $(this).addClass('act');
    var page = $(this).text();
    alert(page);
    $.post("view.html", {
            page: page
        },
        function(data, textStatus, jqXHR) {
            $('.container').html(data);
        }
    )
})

/*<div>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVwswW5NrmUzQlkpywdl7kYkplXT6BL4VQhw&usqp=CAU" alt="">
                            <div class="detail">
                                <h2>af afaf fafa gaga </h2>
                                <p>afaf faga gsdada </p>
                            </div>
                        </div> */