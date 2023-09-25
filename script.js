//your JS code here. If required.
 // Function to execute when the DOM is loaded
        function onDOMLoad() {
            // Get the body element
            const body = document.body;

            // Remove any existing child nodes from the body
            while (body.firstChild) {
                body.removeChild(body.firstChild);
            }

            // Create a text node with the message
            const textNode = document.createTextNode("DOM load success");

            // Append the text node to the body
            body.appendChild(textNode);
        }

        // Add an event listener for the DOMContentLoaded event
        document.addEventListener("DOMContentLoaded", onDOMLoad);