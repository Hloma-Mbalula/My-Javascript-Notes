// Append and AppendChild

// Append lets you append elements/strings to your doc

const bodyEl = document.body
bodyEl.append("[Hello Hloma] ") //Appending a strings
bodyEl.append("[Append", " Multiple", "Things] ") //You can append multiple things

// An example where im appending a button element 

const button = document.createElement("button")
button.innerText = "Submit"
bodyEl.append(button)

//AppendChild can only append the above since its a element
const button2 = document.createElement("button")
button2.textContent = "Restart"
bodyEl.appendChild(button2)

        //difference between innerText and textContent

        const div = document.querySelector("div")

        console.log(div.textContent)
        console.log(div.innerText)

        /* textContent will give you all of the text inside the div
        strings + indentation, etc */

        /* While innerText will only print out what is actually visible
        , it goes through the styling if i may say */

//innerHTML - Renders html elements directly inside javascript
//It has security concerns

const container = document.createElement("div")
bodyEl.append(container)

    container.innerHTML = (
        "<h2> Hloma is manipulating the DOM in Javascript </h2>"
    )


// We can also remove elements from the DOM using the remove() function

const removedEl = document.getElementById('removed')

removedEl.remove()

// We can add it back 

bodyEl.append(removedEl)


//Access html attributes from JS using the getAttribute() function 

const attributes = document.getElementById("attributes--pract")
console.log( attributes.getAttribute('title') )
//logs : attri--div

    //You can also set the attribute using the setAttribute () function

    attributes.setAttribute('class', 'checkthisout')
    console.log( attributes.className )
    //logs : checkthisout

    //OR

    attributes.className  = "justChangedIt";
    console.log( attributes.className)

    // Can also remove Attributes from an element
    attributes. 

