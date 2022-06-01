module.exports = {
	isAdjecent(node, A) {
		var str = ''
		for (let i = 0; i < A.length; i++) {
			if (A[node][i] === 1) {
				str = `${str}${i+1},`
			}
		}
		return str.slice(0, str.length - 1);
	},

	adjacentColorNode(node, A, C, nodeColor) {
		var nodes = this.isAdjecent(node, A).split(',');
	
		var result = []
		nodes.map((node) => {
			var integerNode = parseInt(node);
			if (nodeColor[parseInt(integerNode) - 1] === 0) {
				result.push(`${node} belum diwarnai`)
			} else {
				result.push(`${node} diwarnai ${C[nodeColor[integerNode - 1]]}`)
			}
		})
	
		var str = '';
		for (let i = 0; i < result.length; i++) {
			str = `${str}${result[i]}; `;
		};
	
		return str.slice(0, str.length - 2);
	},

	isSafe(node, color, A, nodeColor) {
		for (let i = 0; i < A.length; i++) {
			if (A[node][i] === 1 && color === nodeColor[i]) {
				return false;
			}
		}
		return true;
	}
}