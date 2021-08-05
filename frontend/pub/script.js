function _load() {
     const rootElement = document.getElementById('root');

     rootElement.insertAdjacentHTML('beforeend', `
        <form>
            <input class="input" name="firstName" placeholder="first name"/>
            <input class="input" name="lastName" placeholder="last name"/>
            <input class="input" name="email" type="email" placeholder="email"/>
            <textarea class="input" name="message" placeholder="message"></textarea>
            <button type="submit" id="send">Send</button>
        </form>
     
     `);
    function postToClick(e) {
        e.preventDefault();

        const inputs = e.target.querySelectorAll('.input'), values = {};

        for (const input of inputs) {
            
            values[`${input.name}`] = input.value;

        }
        console.log(values);

        /* const fd = new FormData();
        fd.append('json', JSON.stringify(values)); */


        fetch('/', {
            method: 'Post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        })
        .then(response => response.text())
        .then(data => console.log(data));
    }
     window.addEventListener('submit', postToClick);
     console.log('Frontend betöltődött');

}
window.addEventListener("load", _load);