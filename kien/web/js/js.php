<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script>
$(document).ready(()=> {
    var st = <?php if (isset($_GET['st'])){ echo "'".$_GET['st']."'";} else {echo "''";}?>;
    var act = "";
    $('#add-province-but').click(function() {
        province_add();
    });
    $('#add-district-but').click(function() {
        district_add();
    });
    $('#add-commune-but').click(function() {
        commune_add();
    });
    $('#add-address-but').click(function() {
        address_add();
    });
    if (<?php echo "'".$_SESSION['type']."'" ?> == 'B2') {
        $('#high').empty();
        $('#high1').empty();
    }
    if (<?php echo "'".$_SESSION['type']."'" ?> == 'A2') {
        if (st == 'local') {
            province_fetch();
        } else if (st == 'official') {
            official_fetch();
        } else if (st == 'resident') {
            resident_fetch();
        }
    } else if (<?php echo "'".$_SESSION['type']."'" ?> == 'A3') {
        if (st == 'local') {
            district_fetch();
        } else if (st == 'official') {
            official_fetch();
        } else if (st == 'resident') {
            resident_fetch();
        }
    } else if (<?php echo "'".$_SESSION['type']."'" ?> == 'B1') {
        if (st == 'local') {
            commune_fetch();
        } else if (st == 'official') {
            official_fetch();
        } else if (st == 'resident') {
            resident_fetch();
        }
    } else if (<?php echo "'".$_SESSION['type']."'" ?> == 'A1') {
        if (st == 'local') {
            tw_fetch();
        } else if (st == 'official') {
            official_fetch();
        } else if (st == 'resident') {
            resident_fetch();
        }
    }
    // lấy status và action để hiển thị chức năng
    let searchParams = new URLSearchParams(window.location.search);
    if (searchParams.has('act')) {
        act = searchParams.get('act');
    }

    $('div.add-div').hide();
    $('#add-button').click(function(){
        $('div.add-div').toggle();
    });
})
function province_add() {
    $.ajax({
        url: "http://localhost/php/address/addCity",
        method: "POST",
        data: {
            
           user_id: <?php echo $_SESSION['user_id'] ?>,
           city_id: $('#province-id').val().substr(0,2),
           city_name: $('#province-name').val()
        },
        
        success: function(data) {
            dataJson = JSON.parse(data);
            if (dataJson.status == 'ok') {
                alert("Thêm thành công");
            }
             else {
                alert("Lỗi, vui lòng kiểm tra lại thông tin");
             }
        }
});
}
function district_add() {
        var cty;
    $.ajax({
        url: "http://localhost/php/address/cityFromUser",
        method: "POST",
        data: {
           user_id: <?php echo $_SESSION['user_id'] ?>,
        },
        
        success: function(data) {
            dataJson = JSON.parse(data);
            district_add_by_id(dataJson[0].city_id);
        }
});

}
function district_add_by_id(cty) {
    $.ajax({
        url: "http://localhost/php/address/addDistrict",
        method: "POST",
        data: {
            
           user_id: <?php echo $_SESSION['user_id'] ?>,
           city_id: cty,
           district_name: $('#district-name').val(),
           district_id: cty+$('#district-id').val().substr(0,2)
        },
        
        success: function(data) {
            dataJson = JSON.parse(data);
            console.log(dataJson.status);
            if (dataJson.status && dataJson.status == 'ok') {
                alert("Thêm thành công");
            }
             else {
                alert("Lỗi, vui lòng kiểm tra lại thông tin");
             }
        }
    });
}
function commune_add() {
        var cty;
    $.ajax({
        url: "http://localhost/php/address/districtFromUser",
        method: "POST",
        data: {
           user_id: <?php echo $_SESSION['user_id'] ?>,
        },
        
        success: function(data) {
            dataJson = JSON.parse(data);
            commune_add_by_id(dataJson[0].district_id);
        }
});

}
function commune_add_by_id(cty) {
    console.log(cty);
    $.ajax({
        url: "http://localhost/php/address/addCommune",
        method: "POST",
        data: {
            
           user_id: <?php echo $_SESSION['user_id'] ?>,
           district_id: cty,
           commune_name: $('#commune-name').val(),
           commune_id: cty+$('#commune-id').val().substr(0,2)
        },
        
        success: function(data) {
            dataJson = JSON.parse(data);
            if (dataJson.status == 'ok') {
                alert("Thêm thành công");
            }
             else {
                alert("Lỗi, vui lòng kiểm tra lại thông tin");
             }
        }
    });
}
function address_add() {
        var cty;
    $.ajax({
        url: "http://localhost/php/address/communeFromUser",
        method: "POST",
        data: {
           user_id: <?php echo $_SESSION['user_id'] ?>,
        },
        
        success: function(data) {
            dataJson = JSON.parse(data);
            address_add_by_id(dataJson[0].commune_id);
        }
});

}
function address_add_by_id(cty) {
    $.ajax({
        url: "http://localhost/php/address/addAddress",
        method: "POST",
        data: {
            
           user_id: <?php echo $_SESSION['user_id'] ?>,
           commune_id: cty,
           address_name: $('#address-name').val(),
           address_id: cty+$('#address-id').val().substr(0,2)
        },
        
        success: function(data) {
            dataJson = JSON.parse(data);
            if (dataJson.status == 'ok') {
                alert("Thêm thành công");
            }
             else {
                alert("Lỗi, vui lòng kiểm tra lại thông tin");
             }
        }
    });
}


function tw_fetch() {
    var cty;
    $.ajax({
        url: "http://localhost/php/address/cityFromUser",
        method: "POST",
        data: {
           user_id: <?php echo $_SESSION['user_id'] ?>,
        },
        
        success: function(data) {
            cty = JSON.parse(data);
            var s = "";
            for (i=0; i<cty.length;i++) {
            s+= '<tr><td>'+cty[i].name+'</td><td>'+cty[i].city_id+'</td></tr>';
        }
        $('#tw-table').html(s);
            
        }
})
}
function province_fetch() {
    var cty;
    $.ajax({
        url: "http://localhost/php/address/cityFromUser",
        method: "POST",
        data: {
           user_id: <?php echo $_SESSION['user_id'] ?>,
        },
        
        success: function(data) {
            cty = JSON.parse(data);
            district_from_city(cty);
        }
})
}
function district_from_city(cty) {
    $.ajax({
        url: "http://localhost/php/address/districtFromCity",
        method: "POST",
        data: {
           city_id: cty[0].city_id,
        },
        
        success: function(data) {
            dataJson = JSON.parse(data);
            var s = "";
            for (i=0; i<dataJson.length;i++) {
            s+= '<tr><td>'+cty[0].name+'</td><td>'+dataJson[i].district_id+'</td><td>'+dataJson[i].name+'</td></tr>';
        }
        $('#province-table').html(s);
    }
})
}
function district_fetch() {
    var dis;
    $.ajax({
        url: "http://localhost/php/address/districtFromUser",
        method: "POST",
        data: {
           user_id: <?php echo $_SESSION['user_id'] ?>,
        },
        
        success: function(data) {
            dis = JSON.parse(data);
            commune_from_district(dis);
        }
})
}
function commune_from_district(dis) {
    $.ajax({
        url: "http://localhost/php/address/communeFromDistrict",
        method: "POST",
        data: {
           district_id: dis[0].district_id,
        },
        
        success: function(data) {
            dataJson = JSON.parse(data);
            var s = "";
            for (i=0; i<dataJson.length;i++) {
            s+= '<tr><td>'+dis[0].name+'</td><td>'+dataJson[i].commune_id+'</td><td>'+dataJson[i].name+'</td></tr>';
        }
        $('#district-table').html(s);
    }
})
}
function commune_fetch() {
    var com;
    $.ajax({
        url: "http://localhost/php/address/communeFromUser",
        method: "POST",
        data: {
           user_id: <?php echo $_SESSION['user_id'] ?>,
        },
        
        success: function(data) {
            com = JSON.parse(data);
            address_from_commune(com);
        }
})
}
function address_from_commune(com) {
    $.ajax({
        url: "http://localhost/php/address/addressFromCommune",
        method: "POST",
        data: {
           commune_id: com[0].commune_id,
        },
        
        success: function(data) {
            dataJson = JSON.parse(data);
            var s = "";
            for (i=0; i<dataJson.length;i++) {
            s+= '<tr><td>'+com[0].name+'</td><td>'+dataJson[i].address_id+'</td><td>'+dataJson[i].name+'</td></tr>';
        }
        $('#commune-table').html(s);
    }
})
}
function official_fetch() {
    var com;
    $.ajax({
        url: "http://localhost/php/account/staff",
        method: "POST",
        data: {
           user_id: <?php echo $_SESSION['user_id'] ?>,
        },
        
        success: function(data) {
            com = JSON.parse(data);
            var s="";
            for (i=0; i<com.staff.length;i++) {
            s+= '<tr><td>'+com.staff[i].user_id+'</td><td>'+com.staff[i].name+'</td></tr>';
        }
        $('#official-table').html(s);
        }
})
}
function resident_fetch() {
    var com;
    $.ajax({
        url: "http://localhost/php/citizen/all",
        method: "POST",
        data: {
           user_id: <?php echo $_SESSION['user_id'] ?>,
        },
        
        success: function(data) {
            com = JSON.parse(data);
            var s="";
            /*for (i=0; i<com.staff.length;i++) {
            s+= '<tr><td>'+com.[i].citizen_id+'</td><td>'+com[i].name+'</td><td>'+com[i].birth'</td><td>'+
            com[i].gender+'</td><td>'+com[i].identifier+'</td><td>'+com[i].address_name'</td><td>'+
            com[i].permanent_address_name+'</td><td>'+com[i].temp_address_name+'</td><td>'+
            com[i].religion+'</td><td>'+com[i].education+'</td><td>'+com[i].job'</td></tr>';
        }
        $('#official-table').html(s);*/
        }
})
}</script>
