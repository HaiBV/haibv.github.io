/**
 * 785. Is Graph Bipartite?
 * Graph, Union Find, BFS, DFS
 */

/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function(graph) {
    const nodeCount = graph.length;
    if(!nodeCount) {
        return false;
    }
    const queue = [],
          colors = Array(nodeCount).fill(-1);
    
    for(let node = 0; node < nodeCount; ++node) {
        if(colors[node] !== -1) {
            continue;
        }
        colors[node] = 1;
        queue.push(node);
        
        while(queue.length) {
            const currNode = queue.shift(),
                  nextColor = 1 - colors[currNode];
            
            for(let idx = 0; idx < graph[currNode].length; ++idx) {
                const neiNode = graph[currNode][idx];
                if(colors[neiNode] === colors[currNode]) {
                    return false;
                } else if(colors[neiNode] === -1) {
                    colors[neiNode] = nextColor;
                    queue.push(neiNode);
                }
            }
        }
    }
    return true;
};
