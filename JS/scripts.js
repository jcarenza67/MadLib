onload = function() {
    // first we set up an event handler for the form submission
    let form = querySelector("form");
    form.onsubmit = function(event) {
    const person1Input = getElementById("person1Input").value;
    const person2Input = getElementById("person2Input").value;
    const animalInput= getElementById("animalInput").value;
    const exclamationInput = getElementById("exclamationInput").value;
    const verbInput = getElementById("verbInput").value;
    const nounInput = getElementById("nounInput").value;
      // then we print values to the story area;
      // we're hardcoding these values for now
    querySelector("span#person1a").innerText = person1Input;
    querySelector("span#person1b").innerText = person1Input;
    querySelector("span#person1c").innerText = person1Input;
    querySelector("span#person2a").innerText = person2Input;
    querySelector("span#person2b").innerText = person2Input;
    querySelector("span#animal").innerText = animalInput;
    querySelector("span#verb").innerText = verbInput;
    querySelector("span#noun").innerText = nounInput;
    querySelector("span#exclamation").innerText = exclamationInput;

      // then we show the story by removing the class attribute
    querySelector("div#story").removeAttribute("class");
    event.preventDefault();
    };
  };