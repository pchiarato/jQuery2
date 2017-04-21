$(document).ready(function(){
    
 //initial variables to hold the targets of the elements.   
var input = $(".form-input");
var add = $("#add-todo");
var list = $(".list");
var item = $("<li class='undone-items'></li>");
var btnAdd = $('<button class="add-btn">Add</button>');
var left_btn = $('#l-btn');
var right_btn = $('#r-btn');
var timeBar = $("#time");
var fade = $(".fade-div");
    


  
// function to display the time (real time) on the top of the browser.
    
    function startTime(){
        var time = new Date();
        var hour = time.getHours();
        var minute = time.getMinutes();
        var secounds = time.getSeconds();
        var m = checkTime(minute);
        var s = checkTime(secounds)
        
        timeBar.text(hour+" : "+m+" : "+s);
        
        setTimeout(startTime, 1000);
        function checkTime(i){
            if(i < 10){
                i = "0"+i
            }
                
    
             return i;
        }
       
    }
    startTime();
    
    left_btn.on("click",function(){
        
        var items = $(".tobeDeleted");
        items.each(function(){
            $(this).remove();
            
        });
        
    });
        
    
    
    //button that when clicked will move items to the done list and will get them ready to be deleted.
    
    right_btn.on("click",function(){
        
        console.log("right btn")
                 var items = $(".todo-list li");
                items.each(function(){
                 if($(this).hasClass("highlighted")){
                    $(this).appendTo($('.list-container2-off'));
                     $(this).removeClass("highlighted");
                     $(this).addClass("tobeDeleted");
                 }
                    })
            });


    // function to add li items to our todo list.
   function addItem(){
      
       var inputText = input.val();
       input.val("");
       if(input){
           
        var newItem = item.clone();
           
           newItem.text(inputText);
           list.append(newItem);
       
       
       }
       
   }
    input.on("keydown", function(event){
             
             if(event.which == 13){
        addItem();
    }
             });
    // adds li items to our todo list when button is pushed
    add.on("click", addItem);
    
    // once items are in the list if clicked this will toggle the class to highlight items and possibly be moved to the done list if requested.
    list.on("click", "li", function(){
        $(this).toggleClass("highlighted");
    });
    
    //button to show all elements at the dom.
    
    $('#add-todo').on('click',function(){
       fade.fadeIn();
    });
    
    
})