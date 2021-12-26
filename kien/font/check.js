
/*---------Lay du lieu tinh --------------*/
let dropdownp = $('#province');
let dropdownp1 = $('#province1')
let dropdownp2 = $('#province2')
console.log(dropdownp)
dropdownp.empty();
dropdownp1.empty();
dropdownp2.empty();

dropdownp.append('<option disabled>Chọn Tỉnh</option>');
dropdownp1.append('<option disabled>Chọn Tỉnh</option>');
dropdownp2.append('<option disabled>Chọn Tỉnh</option>');
dropdownp.prop('selectedIndex', 0);
dropdownp1.prop('selectedIndex', 0);
dropdownp2.prop('selectedIndex', 0);



$.ajax({
    url: "http://localhost/php/address/allcity",
    method: "POST",

    success: function (data) {
        var datajson = JSON.parse(data);
        $.each(datajson, function (key, entry) {
            console.log(entry)
            dropdownp.append(`<option data='${entry.city_id}'>${entry.name}</option>`)
            dropdownp1.append(`<option data='${entry.city_id}'>${entry.name}</option>`)
            dropdownp2.append(`<option data='${entry.city_id}'>${entry.name}</option>`)
        })
    }
})

/*---------Lay du lieu huyen --------------*/
let dropdownd = $('#district');
let dropdownd1 = $('#district1');
let dropdownd2 = $('#district2');
dropdownd.empty();
dropdownd1.empty();
dropdownd2.empty();

dropdownd.append('<option disabled>Chọn Huyện</option>');
dropdownd1.append('<option disabled>Chọn Huyện</option>');
dropdownd2.append('<option disabled>Chọn Huyện</option>');
dropdownd.prop('selectedIndex', 0);
dropdownd1.prop('selectedIndex', 0);
dropdownd2.prop('selectedIndex', 0);

$('#province').change(function (e) {
    dropdownd.html("")
    dropdownd.append('<option disabled>Chọn Huyện</option>');
    dropdownd.prop('selectedIndex', 0);
    var val = $(e.target).find(":selected").attr('data');
    $.ajax({
        url: 'http://localhost/php/address/districtFromCity',
        method: "POST",
        data: { 
            city_id: val
        },
        success: function (data) {
            var datajson = JSON.parse(data);
            $.each(datajson, function (key, entry) {
                dropdownd.append(`<option data=${entry.district_id}>${entry.name}</option>`);
            })
        }
    })

})

$('#province1').change(function (e) {
    dropdownd1.html("")
    dropdownd1.append('<option disabled>Chọn Huyện</option>');
    dropdownd1.prop('selectedIndex', 0);
    var val = $(e.target).find(":selected").attr('data');
    $.ajax({
        url: 'http://localhost/php/address/districtFromCity',
        method: "POST",
        data: { 
            city_id: val
        },
        success: function (data) {
            var datajson = JSON.parse(data);
            $.each(datajson, function (key, entry) {
                dropdownd1.append(`<option data=${entry.district_id}>${entry.name}</option>`);
            })
        }
    })

})

$('#province2').change(function (e) {
    dropdownd2.html("")
    dropdownd2.append('<option disabled>Chọn Huyện</option>');
    dropdownd2.prop('selectedIndex', 0);
    var val = $(e.target).find(":selected").attr('data');
    $.ajax({
        url: 'http://localhost/php/address/districtFromCity',
        method: "POST",
        data: { 
            city_id: val
        },
        success: function (data) {
            var datajson = JSON.parse(data);
            $.each(datajson, function (key, entry) {
                dropdownd2.append(`<option data=${entry.district_id}>${entry.name}</option>`);
            })
        }
    })

})

/*------------Lay du lieu xa------------*/

let dropdownc = $('#commune');
let dropdownc1 = $('#commune1');
let dropdownc2 = $('#commune2');
dropdownc.empty();
dropdownc1.empty();
dropdownc2.empty();

dropdownc.append('<option  disabled>Chọn xã</option>');
dropdownc1.append('<option  disabled>Chọn xã</option>');
dropdownc2.append('<option  disabled>Chọn xã</option>');
dropdownc.prop('selectedIndex', 0);
dropdownc1.prop('selectedIndex', 0);
dropdownc2.prop('selectedIndex', 0);
$('#district').change(function (e) {
    dropdownc.html('')
    dropdownc.append('<option  disabled>Chọn xã</option>');
    dropdownc.prop('selectedIndex', 0);
    var val = $(e.target).find(":selected").attr('data');
    $.ajax({
        url: 'http://localhost/php/address/communeFromDistrict',
        method: "POST",
        data: { district_id: val },
        success: function (data) {
            var datajson = JSON.parse(data);
            console.log(datajson)
            $.each(datajson, function (key, entry) {
                dropdownc.append(`<option data=${entry.commune_id}>${entry.name}</option>`);
            })
        }
    })

})

$('#district1').change(function (e) {
    dropdownc1.html('')
    dropdownc1.append('<option  disabled>Chọn xã</option>');
    dropdownc1.prop('selectedIndex', 0);
    var val = $(e.target).find(":selected").attr('data');
    $.ajax({
        url: 'http://localhost/php/address/communeFromDistrict',
        method: "POST",
        data: { district_id: val },
        success: function (data) {
            var datajson = JSON.parse(data);
            $.each(datajson, function (key, entry) {
                dropdownc1.append(`<option data=${entry.commune_id}>${entry.name}</option>`);
            })
        }
    })

})

$('#district2').change(function (e) {
    dropdownc2.html('')
    dropdownc2.append('<option  disabled>Chọn xã</option>');
    dropdownc2.prop('selectedIndex', 0);
    var val = $(e.target).find(":selected").attr('data');
    $.ajax({
        url: 'http://localhost/php/address/communeFromDistrict',
        method: "POST",
        data: { district_id: val },
        success: function (data) {
            var datajson = JSON.parse(data);
            $.each(datajson, function (key, entry) {
                dropdownc2.append(`<option data=${entry.commune_id}>${entry.name}</option>`);
            })
        }
    })

})

/*-----------------Lấy dữ liệu xóm----------*/
let dropdowna = $('#address');
let dropdowna1 = $('#address1');
let dropdowna2 = $('#address2');
dropdowna.empty();
dropdowna1.empty();
dropdowna2.empty();

dropdowna.append('<option disabled>Chọn Xóm</option>');
dropdowna1.append('<option disabled>Chọn Xóm</option>');
dropdowna2.append('<option disabled>Chọn Xóm</option>');
dropdowna.prop('selectedIndex', 0);
dropdowna1.prop('selectedIndex', 0);
dropdowna2.prop('selectedIndex', 0);

$('#commune').change(function (e) {
    dropdowna.html('')
    dropdowna.append('<option disabled>Chọn Xóm</option>');
    dropdowna.prop('selectedIndex', 0);
    var val = $(e.target).find(":selected").attr('data');
    $.ajax({
        url: 'http://localhost/php/address/addressFromCommune',
        method: "POST",
        data: { commune_id: val },
        success: function (data) {
            var datajson = JSON.parse(data);
            $.each(datajson, function (key, entry) {
                console.log(datajson);
                dropdowna.append(`<option data=${entry.address_id}>${entry.name}</option>`);
            })
        }
    })

})

$('#commune1').change(function (e) {
    dropdowna1.html('')
    dropdowna1.append('<option disabled>Chọn Xóm</option>');
    dropdowna1.prop('selectedIndex', 0);
    var val = $(e.target).find(":selected").attr('data');
    $.ajax({
        url: 'http://localhost/php/address/addressFromCommune',
        method: "POST",
        data: { commune_id: val },
        success: function (data) {
            var datajson = JSON.parse(data);
            $.each(datajson, function (key, entry) {
                dropdowna1.append(`<option data=${entry.address_id}>${entry.name}</option>`);
            })
        }
    })

})

$('#commune2').change(function (e) {
    dropdowna2.html('')
    dropdowna2.append('<option disabled>Chọn Xóm</option>');
    dropdowna2.prop('selectedIndex', 0);
    var val = $(e.target).find(":selected").attr('data');
    $.ajax({
        url: 'http://localhost/php/address/addressFromCommune',
        method: "POST",
        data: { commune_id: val },
        success: function (data) {
            var datajson = JSON.parse(data);
            $.each(datajson, function (key, entry) {
                dropdowna2.append(`<option data=${entry.address_id}>${entry.name}</option>`);
            })
        }
    })

})

/*-----------------XỬ LÝ KHAI BÁO---------------*/

var but = $('#create');
$('form').submit(function(e){
    e.preventDefault();
})
$('#create').click(function (e) {
    // var yourName = document.querySelector('input[name ="name"]').value;
    // var identifier = document.querySelector('input[name ="identifier"]').value;
    // var birth = document.querySelector('input[name ="birth"]').value;
    // var gender = document.querySelector('select[name ="gender"]').value;
    // var address = document.querySelector('#address')
    // var permanent_address_id = document.querySelector('#address').value;
    // var temp_address_id = document.querySelector('#address').value;
    // var religion = document.querySelector('input[name ="religion"]').value;
    // var education = document.querySelector('select[name ="education"]').value;
    // e.preventDefault();
    var formData = {
        name: $("#name").val(),
        identifier: $("#identifier").val(),
        birth: $("#birth").val(),
        gender: $("#gender").find(":selected").val(),
        address_id: $("#address").find(":selected").attr('data'),
        permanent_address_id: $("#address1").find(":selected").attr('data'),
        temp_address_id: $("#address2").find(":selected").attr('data'),
        religion: $("#religion").val(),
        education: $("#education").val(),
        job: $("#job").val(),
        report_id: 1,
        user_id: 23
    }

    // fetch('http://localhost/php/citizen/add', {
    //     method: 'post',
    //     body: JSON.stringify(formData),
    //     header: {
    //         'Content Type': 'application/json'
    //     }
    // })
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log('Success:', data);
    //     })
    //     .catch((error) => {
    //         console.error('Error:', error);
    //     });

    $.ajax({
        url: "http://localhost/php/citizen/add",
        method: "POST",
        data: formData,
        success: data => {
            console.log(JSON.parse(data))
        }
    })
    
})