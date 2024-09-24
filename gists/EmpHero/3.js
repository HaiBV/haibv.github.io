// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(connections, name1, name2) {
  // write your code in JavaScript
  const allName = connections.reduce((acc, connection) => {
      const [a, b] = connection.split(':');
      acc.add(a);
      acc.add(b);
      return acc;
  }, new Set())
  
  const graph = [...allName].reduce((acc, name) => ({...acc, [name]: {}}), {});

  for (let connection of connections) {
      const [nameA, nameB] = connection.split(":");
      for (let a in graph[nameA]) {
          graph[a][nameB] = graph[nameA][a] + 1;
          graph[nameB][a] = graph[nameA][a] + 1;
      }

      for (let b in graph[nameB]) {
          graph[b][nameA] = graph[nameB][b] + 1;
          graph[nameA][b] = graph[nameB][b] + 1;
      }

      graph[nameA][nameB] = 1;
      graph[nameB][nameA] = 1;
  }

  return graph[name1][name2] || -1 ;
}
