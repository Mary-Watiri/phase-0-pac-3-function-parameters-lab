// function introduction(name){
//     return `Hi, my name is ${name}.`
// }

// function introductionWithLanguage(name,language){
//          console.log(`Hi, my name is ${name} and I am learning to program in ${language}.`);
//  }
// introductionWithLanguage("Aki","Ember.js");

// function introductionWithLanguageOptional(name,language = "JavaScript"){
//    console.log(`Hi, my name is ${name} and i am learning to program in ${language}.`);
//  }
// introductionWithLanguageOptional("Gracie","language");

// introductionWithLanguageOptional("Gracie","Python");
    
function introduction(name) {
    return `Hi, my name is ${name}.`;
  }
  
  const greeting = introduction("John");
  console.log(greeting); 

    function introductionWithLanguage(name, language) {
        return(`Hi, my name is ${name} and I am learning to program in ${language}.`);
      }

      introductionWithLanguage("Aki", "Ember.js");

      function introductionWithLanguageOptional(name, language = "JavaScript") {
        return (`Hi, my name is ${name} and I am learning to program in ${language}.`);
      }
      
     
      const result = introductionWithLanguageOptional("Gracie");
      console.log(result); 
  

      
      