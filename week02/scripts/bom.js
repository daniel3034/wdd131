document.addEventListener("DOMContentLoaded", () => {
    const input = document.querySelector('#favchap');
    const button = document.querySelector('button');
    const list = document.querySelector('#list');

    button.addEventListener('click', () => {
        const chapter = input.value.trim();
        if (chapter !== '') {
            addChapterToList(chapter);
            input.value = '';
            input.focus();
        } else {
            // Optionally, provide user feedback for empty input
            // Example: alert("Please enter a chapter");
            input.focus();
        }
    });

    function addChapterToList(chapter) {
        const li = document.createElement('li');
        li.textContent = chapter;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        deleteButton.classList.add('delete');
        deleteButton.addEventListener('click', () => {
            list.removeChild(li);
            input.focus();
        });

        li.appendChild(deleteButton);
        list.appendChild(li);
    }
});
