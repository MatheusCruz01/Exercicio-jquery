$(document).ready(function () {
    $("#form-tarefa").on("submit", function (e) {
        e.preventDefault();

        const tarefa = $("#input-tarefa").val().trim();
        if (tarefa === "") return;

        $("#lista-tarefas").append(`<li>${tarefa}</li>`);

        $("#input-tarefa").val("").focus();
    });

    $("#lista-tarefas").on("click", "li", function () {
        $(this).toggleClass("tarefa-concluida");
    });
});
