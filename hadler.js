AFRAME.registerComponent("markerhandler", {
    init: async function () {
  
      this.el.addEventListener("markerFound", () => {
        console.log("marker found")  
        this.handleMarkerFound(toy, markerId);
      });
  
      this.el.addEventListener("markerLost", () => {
        this.handleMarkerLost();
        console.log("marker lost")  
      });
  
    },
    handleMarkerFound: function (toy, markerId) {
      var buttonDiv = document.getElementById("button-div");
      buttonDiv.style.display = "flex";
  
      var ratingButton = document.getElementById("summery-button");
      var orderButtton = document.getElementById("order-button");
  
      summeryButton.addEventListener("click", function () {
        swal({
        
          title: "Order Summery",
          text: "Work In Progress"
        });
      });
  
      orderButtton.addEventListener("click", () => {
        swal({
          
          title: "Thanks For Order!",
          text: "Your order will be delivered soon!"
        });
      });
    },
     
  
    handleMarkerLost: function () {
      var buttonDiv = document.getElementById("button-div");
      buttonDiv.style.display = "none";
    },
   
  });
  