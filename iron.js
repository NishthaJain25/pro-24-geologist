class Iron{
	constructor(x,y)
	{
	// assign options to the rubber ball
	var options= {
		restitution:0.8,
		friction:3,
		density:30
	}
		this.x=x;
		this.y=y;
		
		this.body=Bodies.rectangle(this.x, this.y, 100,100, options)
		World.add(world, this.body);

	}
	display()
	{
			var ironpos = this.body.position;		
			push()
			translate(ironpos.x, ironpos.y);
			rectMode(CENTER)
			
			fill("green");
			//draw the ellipse here to display the rubber ball
			rect(0,0,100,100);

			pop()
	}

}