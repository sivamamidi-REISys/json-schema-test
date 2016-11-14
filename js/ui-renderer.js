$(document).ready(function () {
    renderUI();

    // Hook up the submit button to log to the console
    document.getElementById('submit').addEventListener('click', function () {
        // Get the value from the editor
        console.log(editor.getValue());
    });


});

function renderUI(){
    getJson().then(function(data){
        var editor = new JSONEditor(document.getElementById('editor_holder'), {"schema" : data});
    });
}


function getJson() {
    var dfd = jQuery.Deferred();
    var url = window.location.href + 'schema-generator/schemas/dgis-mihvp.json';
    $.ajax({
        dataType: "json",
        url:  url,
        success: function(data){
            console.log(data);
            dfd.resolve(data);
        }
    });
    return dfd.promise();
}



