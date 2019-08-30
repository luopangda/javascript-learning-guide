// 广度优先遍历算法，适用于没有权重的图，解决：是否有路径从A到达B， 是否有最短的路径（不带权重）
// let graph = {};
// graph['you'] = ['alice', 'bob', 'claire'];
// graph['alice'] = ['peggy'];
// graph['bob'] = ['anuj', 'peggy'];
// graph['claire'] = ['thom', 'jonny'];
// graph['anuj'] = [];
// graph['peggy'] = [];
// graph['thom'] = [];
// graph['jonny'] = [];
//
// console.log(123);
// let que = [].concat(graph['you']);
// let marks = [];
// while (que.length > 1){
//     let person = que.shift();
//     if(marks.indexOf(person) === -1){
//         if(isTarget(person)){
//             console.log(person + ' is ' + '芒果供应商');
//             break
//         }else {
//             que = que.concat(graph[person])
//         }
//         marks.push(person);
//     }
// }
//
// function isTarget(name){
//     console.log(name);
//     return name[name.length - 1] === 'm'
// }


// 迪杰斯特拉算法： 解决带权重的有向无环图、无负权边，假设：对于处理过的节点，没有前往该节点的最短路径。
// 图的结构（有向无环图）
let graph = {};

graph['start'] = {};
graph['start']['a'] = 6;
graph['start']['b'] = 2;

graph['a'] = {};
graph['a']['fin'] = 1;

graph['b'] = {};
graph['b']['a'] = 3;
graph['b']['fin'] = 5;

// 从起点到达这个节点的花销
let costs = {};

costs['a'] = 6;
costs['b'] = 2;
costs['fin'] = Infinity;

// 父子节点关系
let parents = {};

parents['a'] = 'start';
parents['b'] = 'start';
parents['fin'] = void 0;

// 已处理过的
let processed = [];

// 获取一个花费最低的节点
let node = findLowestCostNode(costs);

// 如果有这个节点的话
while (node){
    // 获取到达这个节点的花费
    let cost = costs[node];
    // 获取它的邻居
    let neighbors = graph[node];
    // 如果花费更小，更新到达邻居的花费，以及邻居的父节点
    for(let neighbor in neighbors){ // neighbors是一个散列表，哈希表
        let newCost = cost + neighbors[neighbor]; // 经child这点到达邻居，比其他方式到达该邻居更近，那么就将这个邻居的花费改写
        if(costs[neighbor] > newCost){ // 和旧的花费对比
            costs[neighbor] = newCost; // 改写邻居的花费
            parents[neighbor] = node; // 改写邻居的父节点
        }
    }
    processed.push(node);
    node = findLowestCostNode(costs);
}

console.log(parents);

let point = 'fin';
let route = ['fin'];
while (point !== 'start'){
    route.push(parents[point]);
    point = parents[point];
}
route.reverse();
console.log(route);

function findLowestCostNode() {
    let lowestCost = Infinity;
    let lowestCostNode = void 0;
    for(let node in costs){
        let cost = costs[node];
        if(cost < lowestCost && processed.indexOf(node) === -1){ // 一定要判断是否已经被处理过
            lowestCost = cost;
            lowestCostNode = node
        }
    }
    return lowestCostNode
}
