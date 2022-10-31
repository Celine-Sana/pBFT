(function() {
  function runSimulation() {

    var nodes = parseInt($("#pbft_node").val()); // Total number of nodes
    var faultyNodes = parseInt($("#pbft_faulty").val()); // Number of faulty nodes
    var faultyPrimary = $("#pbft_faulty_primary").prop("checked"); // Get whether the primay node faulty box is checked


    document.getElementById('animationCanvas').src = "assets/pbft_Animations" + nodes + faultyNodes + ".html";

    return false;
  }

  $("#pbft_node").on('change', function() {
    var wantedNodes = $(this).val();
    $("#pbft_faulty").empty();
    for (var i = 0; i < wantedNodes; i++) {
      $("#pbft_faulty").append(new Option(i, i));
    }
    console.log();
  });

  $("#pbft_sendRequest").click(runSimulation);

})();
