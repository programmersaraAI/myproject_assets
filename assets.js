const apiUrl = "https://demo.thingsboard.io:443/api/assetProfile/names?activeOnly=true";
const accessToken = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJub25hYWx3YWplZWgxNkBnbWFpbC5jb20iLCJ1c2VySWQiOiI2Y2VmZWJjMC1jMDU1LTExZWUtYmFjMi0wZjFkMDhkMjUyYjUiLCJzY29wZXMiOlsiVEVOQU5UX0FETUlOIl0sInNlc3Npb25JZCI6IjgyZDA5ZjRlLTY1M2EtNDJjYy1hODZiLTBiYmI0OTA5N2RiZCIsImlzcyI6InRoaW5nc2JvYXJkLmlvIiwiaWF0IjoxNzEyMjY1MzEwLCJleHAiOjE3MTQwNjUzMTAsImZpcnN0TmFtZSI6Ik5vbmEiLCJsYXN0TmFtZSI6IkFsd2FqZWVoIiwiZW5hYmxlZCI6dHJ1ZSwicHJpdmFjeVBvbGljeUFjY2VwdGVkIjp0cnVlLCJpc1B1YmxpYyI6ZmFsc2UsInRlbmFudElkIjoiNmIwMDc3ZDAtYzA1NS0xMWVlLWJhYzItMGYxZDA4ZDI1MmI1IiwiY3VzdG9tZXJJZCI6IjEzODE0MDAwLTFkZDItMTFiMi04MDgwLTgwODA4MDgwODA4MCJ9.t3_5gpG9ZtUeu-vm9MANCTmBxXFlPlxtaLA6JOz3NzikvxXvlVK8OXl-E3qlFaP4AIRMJ4SN4x0T-HlQNu4l5A";
$(document).ready(function () {

    $.ajax({
        url: apiUrl,
        type: "GET",
        headers: {
            "X-Authorization": "Bearer " + accessToken
        },
        data: { activeOnly: true },
        success: function (response) {
            var assetList = $("#assetList");
            $.each(response, function (index, asset) {
                var listItem = $('<div class="col-12 col-sm-6 col-lg-4 mb-4 mb-3"><div class="card" ><div class="card-body text-center"><i class="bx bx-md bx-bar-chart-alt-2 mb-3"></i>' + asset.name + '</div><a href="assetsdetails.html?profileId=' + asset.id.id + '" type="button" id="showButton" class="btn btn-primary">عرض</a></div></div>');
                assetList.append(listItem);
            });
        },
        error: function (xhr, status, error) {
            console.log("Error retrieving assets:", error);
        }
    });
});
$(document).ready(function () {
    // Define the asset profile API endpoint
   
    
    hrefurl=$(location).attr("href");
    var str = decodeURIComponent(hrefurl.split('=').pop());
    //console.log(str);
   // alert(str)
        const apiEndpoint = 'https://demo.thingsboard.io:443/api/assetProfileInfo/' + str;
         const accessToken = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJub25hYWx3YWplZWgxNkBnbWFpbC5jb20iLCJ1c2VySWQiOiI2Y2VmZWJjMC1jMDU1LTExZWUtYmFjMi0wZjFkMDhkMjUyYjUiLCJzY29wZXMiOlsiVEVOQU5UX0FETUlOIl0sInNlc3Npb25JZCI6IjgyZDA5ZjRlLTY1M2EtNDJjYy1hODZiLTBiYmI0OTA5N2RiZCIsImlzcyI6InRoaW5nc2JvYXJkLmlvIiwiaWF0IjoxNzEyMjY1MzEwLCJleHAiOjE3MTQwNjUzMTAsImZpcnN0TmFtZSI6Ik5vbmEiLCJsYXN0TmFtZSI6IkFsd2FqZWVoIiwiZW5hYmxlZCI6dHJ1ZSwicHJpdmFjeVBvbGljeUFjY2VwdGVkIjp0cnVlLCJpc1B1YmxpYyI6ZmFsc2UsInRlbmFudElkIjoiNmIwMDc3ZDAtYzA1NS0xMWVlLWJhYzItMGYxZDA4ZDI1MmI1IiwiY3VzdG9tZXJJZCI6IjEzODE0MDAwLTFkZDItMTFiMi04MDgwLTgwODA4MDgwODA4MCJ9.t3_5gpG9ZtUeu-vm9MANCTmBxXFlPlxtaLA6JOz3NzikvxXvlVK8OXl-E3qlFaP4AIRMJ4SN4x0T-HlQNu4l5A";
      

        //     // Make AJAX request to the API endpoint with the access token in the headers
        //     $.ajax({
        //         url: 'https://demo.thingsboard.io:443/api/assetProfileInfo/' + profileId,

        // Make AJAX request to the API endpoint
        $.ajax({
            url: apiEndpoint,
             method: 'GET',
           
            headers: {
                'X-Authorization': 'Bearer ' + accessToken
            },
            success: function (data) {
                // Create list items for each profile detail and append them to the list
                const profileList = $('#profileList');
                $.each(data, function(key, value) {
                    const listItem = $('<li>').text(key + ': ' + formatValue(value));
                    var html ='<div class="card"><div class="card-body"><h2>Asset Details</h2>';
                    html += '<p><strong>ID:</strong> ' + data.id.entityType + '</p>';
                    html += '<p><strong>Tenant ID:</strong> ' + data.tenantId.entityType + '</p>';
                    html += '<p><strong>Name:</strong> ' + data.name + '</p></div></div>';
                    // Append HTML to the assetDetails div
                    $('#profileList').html(html);
                  
                    // profileList.append(listItem);
                });
    
                function formatValue(value) {
                    if (typeof value === 'object') {
                        return JSON.stringify(value);
                    } else {
                        return value;
                    }
                }
            },
            error: function (xhr, status, error) {
                console.log('API request failed:', error);
            }
        });
        });

        function getQueryParameter(url, name) {
            const urlParams = new URLSearchParams(url);
           return urlParams.get(name);
       }
     
// });
