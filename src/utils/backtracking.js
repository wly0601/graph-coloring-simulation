function isColorable(adjacency, neighbour, color, colorNode){
	for(let i = 0; i < adjacency.length; i++){
		if(adjacency[neighbour][i] == 1 && color = colorNode[i]){
			return false;
		}
	}
	return true;
};

function coloring(node, colorNode){
	var y = 0;
	var color = y + 1;

	while(color <= colorNode.length){
		if(isColorable())
	}
}