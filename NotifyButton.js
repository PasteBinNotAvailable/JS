export function NotifyButton() {
var zNode = document.createElement('button')
zNode.innerHTML = 'Click me for notifications!'
zNode.style.fontFamily = "Arial"
zNode.style.fontSize = "16px"
zNode.style.fontWeight = "500"
zNode.style.padding = "12px"
zNode.style.borderRadius = "24px"
zNode.style.background = "rgb(22,22,22)"
zNode.style.color = "rgb(252, 252, 252)"
zNode.style.boxShadow = "0px 0px 16px black"
zNode.style.top = "50%"
zNode.style.left = "50%"
zNode.style.transform = "translate(-50%, -50%)"
zNode.style.position = "absolute"
zNode.style.cursor = "pointer"
zNode.addEventListener('click', function() {
    zNode.remove()
    zDivNode.remove()
})

var zDivNode = document.createElement('div')
zDivNode.style.zIndex = 9999
zDivNode.style.position = "absolute"
zDivNode.style.top = "0"
zDivNode.style.left = "0"
zDivNode.style.width = "100vw"
zDivNode.style.height = "100vh"
zDivNode.style.backdropFilter = "blur(24px)"

zDivNode.appendChild(zNode)
document.body.appendChild(zDivNode)
}
