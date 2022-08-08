const button = document.getElementById('button')
const toasts = document.getElementById('toasts')

const messages = [
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four',
]

const types = ['info', 'success', 'error']

button.addEventListener('click', () => {
    const notification = document.createElement('div')
    notification.classList.add('toast')
    notification.classList.add(types[Math.floor(Math.random() * types.length)])

    notification.innerText = messages[Math.floor(Math.random() * messages.length)]

    toasts.appendChild(notification)

    setTimeout(() => {
        notification.remove()
    }, 3000)
})