function depthFirstSearch(rootNode, vertices, edges) {
    let stack = []
    let result = [rootNode]
    rootNode.discovered = true
    stack.push(rootNode)
    while (!stack.length == 0) {
        let firstNode = stack.pop()
        let adjacentVertices = findAdjacent(firstNode.name, vertices, edges)
        adjacentVertices.forEach(node => {
            node.discovered = true
            stack.push(node)
            result.push(node)
        })
    }
    return result
}


function findNode(nodeName, vertices){
    return vertices.find(function(vertex){
        return vertex.name == nodeName
    })
}

function findAdjacent(nodeName,  vertices, edges){
    return edges.filter(function(edge){
        return edge.includes(nodeName)
    }).map(function(edge){
        return edge.filter(function(node){
            return (node != nodeName)
        })[0]
    }).map(function(name){
        return findNode(name, vertices)
    }).filter(function(node){
        return node.discovered === null;
    })
}