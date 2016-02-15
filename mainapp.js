var App = React.createClass({
	getInitialState:function(){
		return {
		currentGrid: 
		[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
		[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
		[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
		[ 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0 ],
		[ 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0 ],
		[ 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0 ],
		[ 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0 ],
		[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
		[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
		[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ],
		iterations:0
	};
	},

	findNext:function(){
		if(this.state.iterations < 10){
		var currentGrid = this.state.currentGrid;
		var newGrid = [];
		for(var row = 0; row < 10; row++){
			newGrid[row] = [];
			for(var col = 0; col < 16; col++){
				newGrid[row][col] = 0;
			}
		}
		for(var row = 0; row < 10; row++){
			for(var col = 0; col < 16; col++){
				var neighbours = 0;
				if(currentGrid[row-1] != undefined && currentGrid[row-1][col] != undefined && currentGrid[row-1][col] === 1) neighbours++;
				if(currentGrid[row+1] != undefined && currentGrid[row+1][col] != undefined && currentGrid[row+1][col] === 1) neighbours++;
				if(currentGrid[row] != undefined && currentGrid[row][col-1] != undefined && currentGrid[row][col-1] === 1) neighbours++;
				if(currentGrid[row-1] != undefined && currentGrid[row-1][col-1] != undefined && currentGrid[row-1][col-1] === 1) neighbours++;
				if(currentGrid[row-1] != undefined && currentGrid[row-1][col+1] != undefined && currentGrid[row-1][col+1] === 1) neighbours++;
				if(currentGrid[row+1] != undefined && currentGrid[row+1][col-1] != undefined && currentGrid[row+1][col-1] === 1) neighbours++;
				if(currentGrid[row+1] != undefined && currentGrid[row+1][col+1] != undefined && currentGrid[row+1][col+1] === 1) neighbours++;
				if(currentGrid[row] != undefined && currentGrid[row][col+1] != undefined && currentGrid[row][col+1] === 1) neighbours++;
				if(currentGrid[row][col] === 0){
					if(neighbours === 3) newGrid[row][col] = 1;
					if(neighbours <3 || neighbours > 3) newGrid[row][col] = 0;
				}else if(currentGrid[row][col] === 1){
					if(neighbours < 2) newGrid[row][col] = 0;
					if(neighbours > 3) newGrid[row][col] = 0;
					if(neighbours === 2 || neighbours === 3) newGrid[row][col] = 1;
				}
			}
		}
		var nextIteration = this.state.iterations + 1;
		this.setState({
			currentGrid: newGrid,
			iterations: nextIteration
		});
	}

	if(this.state.iterations === 10){
		console.log(this.state.currentGrid);
		var changedIteration = this.state.iterations +1;	
		this.setState({
			iterations: changedIteration
		})
	}
	},

	componentDidMount:function(){
		this.timer = setInterval(this.findNext, 1000);
	},

	render:function(){
		return(
			<container>
			<h1>Hello! Welcome to The Game of Life in React. 1 is alive, and 0 is dead.</h1>
			<pre style={{width: '9em',fontSize:'2em', wordWrap: 'break-word'}}>{this.state.currentGrid}</pre>

			</container>);
	}


})


ReactDOM.render(<App />,document.getElementById('mainApp'));
