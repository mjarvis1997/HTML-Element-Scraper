// accepts user inputted URL and element ID's to pull HTML values
(function() {
    function fetchPageContents() {
        return new Promise(resolve => {
            setTimeout(() => {
                // asks user to enter the URL
                const url = prompt("Enter URL:");

                // attempts to fetch text from URL
                const pageContents = fetch(url);

                // return promise results
                resolve(pageContents);
            }, 2000);
        });
    }(async function asyncCall() {
        
        // waits for page contents to be fetched
        const result = await fetchPageContents();
        
        //waits for results to be formatted into raw text
        const formattedResult = await result.text();

        // converts text from page into HTML object
        const doc = new DOMParser().parseFromString(formattedResult, 'text/html');

        // asks user to input HTML ID's for the target elements
        const elements = prompt("Enter Element ID's separated by comma:");
        
        // splits user input into array based on comma delimiter
        const inputArray = elements.split(",");
        
        // defines empty output array to hold retrieved info
        let outputArray = [];

        // loops through inputted element ID's
        // retrieves value of that element from DOM
        // pushes the value to output array
        for (let i = 0; i < inputArray.length; i++) {
            outputArray.push(doc.getElementById(inputArray[i]).value);
        }

        // build readable string from info in output array
        var output = "";
        for (let i = 0; i < outputArray.length; i++) {
            output += outputArray[i];
            output += "<br>";
        }

        // write information to page
        document.write(output);
    })();
})();


