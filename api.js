$(function() {
 
   
      $.ajax({
            url: "http://www.json-generator.com/api/json/get/cgsMHDlBNK?indent=2",
            dataType: 'json',
            type: 'GET',
            success: function (people) {
                doSomething(people);
            },

        });
          
        function  doSomething(people) {
            for(var i=0; i < 1; i++){
               var person = people[i];
               var age = person.age;
           var element = '<div id="people">';
          
                $('#info').append( person.name + '<br>'  + person.age + ' ' + 'years old   ' + '</div>'
                  );

        
   }




}

});

