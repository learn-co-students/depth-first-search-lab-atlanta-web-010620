// function findAdjacent(node, vertices, edges){
//     nodesToReturn = [];
//     edges.forEach(edge => {
//         let nodeName = ''; 
//         if (edge[0] === node.name){
//             nodeName = edge[1]; 
//             // nodesToReturn.push(edge[1]); 
//         }else if(edge[1] === node.name){
//             nodeName = edge[0]; 
//             // nodesToReturn.push(edge[0])
//         }

//         if (nodeName !== ''){
//             // find vertice with that name 
//             return vertices.forEach(v => {
//                 if (v.name === nodeName){
//                     return v; 
//                     }
//                 })
//             }
//     })
// }

function findAdjacent(node, vertices, edges){
    let adjacentNodes = []; 
    // loop through edges and find each edge that includes node 
    edges.forEach(edge => {
        if(edge[0] === node.name){
            // filter vertices for the one that has the edge's other element's name 
            let vertice = vertices.filter(v => v.name === edge[1] && v.discovered !== true)[0]
            if (vertice !== undefined){
                adjacentNodes.push(vertice)
            }
        }else if(edge[1] === node.name){
            // filter vertices for the one that has the edge's other element's name 
            let vertice = vertices.filter(v => v.name === edge[0] && v.discovered !== true)[0]
            if (vertice !== undefined){
                adjacentNodes.push(vertice)
            }
        }
    })
    // console.log('ADJACENT NODES');
    // console.log(adjacentNodes);
    return adjacentNodes;
}


function depthFirstSearch(rootNode, vertices, edges){
    //find adjacent nodes 
    let visitedNodes = [rootNode]; 
    let stack = [rootNode]; 
    while (stack.length !== 0){
        let currentNode = stack[stack.length-1]; 
        stack.pop();
        currentNode.discovered = true; 
        // visitedNodes.push(currentNode); 
        let adjacentNodes = findAdjacent(currentNode, vertices, edges); 

        adjacentNodes.forEach(node => {
            stack.push(node); 
            visitedNodes.push(node); 
        });  
        console.log(stack);        
    }
    return visitedNodes; 
}