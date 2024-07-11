document.addEventListener("DOMContentLoaded", () => {
    const input = document.querySelector('#favchap');
    const button = document.querySelector('button');
    const list = document.querySelector('#list');

    // Declare chaptersArray and assign it to the results of getChapterList function or an empty array
    let chaptersArray = getChapterList() || [];

    // Load chapters from chaptersArray when the page loads
    chaptersArray.forEach(chapter => displayList(chapter));

    button.addEventListener('click', () => {
        if (input.value.trim() !== '') { // make sure the input is not empty
            const chapter = input.value.trim();
            displayList(chapter); // call the function that outputs the submitted chapter
            chaptersArray.push(chapter); // add the chapter to the array
            setChapterList(); // update the localStorage with the new array
            input.value = ''; // clear the input
            input.focus(); // set the focus back to the input
        } else {
            input.focus();
        }
    });

    function displayList(item) {
        const li = document.createElement('li');
        li.textContent = item;
    
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        deleteButton.classList.add('delete');
        deleteButton.addEventListener('click', () => {
            deleteChapter(item);
        });
    
        li.appendChild(deleteButton);
        list.appendChild(li);
    }    

    function deleteChapter(chapter) {
        console.log('Deleting chapter:', chapter);
        chaptersArray = chaptersArray.filter(item => item !== chapter); // Filter out the removed chapter
        setChapterList(); // Update the localStorage

        // Remove the deleted item from the DOM
        const items = list.getElementsByTagName('li');
        for (let i = 0; i < items.length; i++) {
            if (items[i].textContent === chapter) {
                list.removeChild(items[i]);
                break;
            }
        }
    }

    function getChapterList() {
        return JSON.parse(localStorage.getItem('myFavBOMList'));
    }

    function setChapterList() {
        localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
    }
});

