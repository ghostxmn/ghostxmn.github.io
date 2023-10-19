// document.getElementById("generate-button").addEventListener("click", function() {
//     // 获取输入点的个数
//     var nodesInput = document.getElementById("nodes-input");
//     var numNodes = parseInt(nodesInput.value);

//     // 获取图形容器
//     var graphContainer = document.getElementById("graph-container");

//     // 清空图形容器
//     graphContainer.innerHTML = '';

//     // 生成相应数量的圆点
//     // 生成相应数量的自定义图片
//     for (var i = 1; i <= numNodes; i++) {
//         var image = document.createElement("img");
//         image.src = "switch.png"; // 替换 'your-custom-image.png' 为你的图片路径
//         image.alt = "Custom Image";
//         image.style.width = "100px"; // 设置宽度为100像素
//         image.style.height = "100px"; // 设置高度为100像素
//         graphContainer.appendChild(image);
//     }
    
// });
document.getElementById("input-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const nodeCount = parseInt(document.getElementById("nodeCount").value);
    const edgesInput = document.getElementById("edges").value;

    // 清空图形容器
    const graphContainer = document.getElementById("graph-container");
    graphContainer.innerHTML = "";

    // 创建节点
    for (let i = 1; i <= nodeCount; i++) {
        const node = document.createElement("div");
        node.className = "node";
        node.style.left = (Math.random() * 300) + "px";
        node.style.top = (Math.random() * 300) + "px";
        node.textContent = i;
        graphContainer.appendChild(node);
    }

    // 创建边
    const edges = edgesInput.split(",").map(edge => edge.trim());
    edges.forEach(edge => {
        const [source, target] = edge.split("-").map(num => parseInt(num));
        const sourceNode = graphContainer.querySelector(`.node:nth-child(${source}`);
        const targetNode = graphContainer.querySelector(`.node:nth-child(${target}`);
        const edgeElement = document.createElement("div");
        edgeElement.className = "edge";
        edgeElement.style.left = parseInt(sourceNode.style.left) + 10 + "px";
        edgeElement.style.top = parseInt(sourceNode.style.top) + 10 + "px";
        edgeElement.style.width = (Math.abs(parseInt(targetNode.style.left) - parseInt(sourceNode.style.left) - 10) + "px";
        edgeElement.style.height = (Math.abs(parseInt(targetNode.style.top) - parseInt(sourceNode.style.top) - 10) + "px";
        graphContainer.appendChild(edgeElement);
    });
});


