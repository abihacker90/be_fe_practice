function _load() {
     const rootElement = document.getElementById('root');

     rootElement.insertAdjacentHTML('beforeend', `
        <button id="send">Go Post!</button>
     `)
    function postToClick(e) {
        fetch('/', {
            method: 'Post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: "HELLO"
        })
        .then(response => response.text())
        .then(data => console.log(data));
    }
     document.getElementById("send").addEventListener('click', postToClick);
     console.log('Frontend betöltődött');

}
window.addEventListener("load", _load);