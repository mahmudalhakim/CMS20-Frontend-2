let course = {
    
    // Egenskap
    title : "JavaScript",
    
    // Metod
    info  : function(){
        //console.log(this);
        function demo(){
            console.log(this);       // OBS! => window
            console.log(this.title); // undefined
        }
        demo();
    }
};

console.log(course);
console.log(course.title);
course.info();
console.log("-------------------");


// Lösning 1 till ovanstående
// Skapa en egen referens till this t.ex. self (that)

course = {
    title : "JavaScript",
    info  : function(){
        // Vad pekar this på här? 
        // Svar: course
        
        let self = this; 
        // Vad pekar self på här? 
        // Svar: self pekar på course

        function demo(){
            console.log(self);       // {title:'JavaScript,info: fn()}
            console.log(self.title); // JavaScript
        }
        demo();
    }
};
course.info();

// Lösning 2 till ovanstående
// Använd arrow-funktioner

course = {
    title : "JavaScript",
    info  : function(){
        demo = () =>  console.log(this); // {title:'JavaScript,info: fn()}
        demo();
    }
};
course.info();


