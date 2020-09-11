import React from 'react'
import p5 from 'p5'

class Sketch extends React.Component {
    constructor(props) {
        super(props)
        //p5 instance mode requires a reference on the DOM to mount the sketch
        //So we use react's createRef function to give p5 a reference
        this.myRef = React.createRef()
    }

    // This uses p5's instance mode for sketch creation and namespacing
    Sketch = (p) => {

        let symmetry = 6;   
        let angle = 360 / symmetry;
        let saveButton, clearButton, mouseButton, keyboardButton;
        let slider;
        // Native p5 functions work as they would normally but prefixed with 
        // a p5 object "p"
        p.setup = () => {
            //Everyhting that normally happens in setup works
            p.createCanvas(400, 400);
            p.angleMode(p.DEGREES);
            p.background(255);
          
        }

        p.draw = () => {
            p.translate(p.width / 2, p.height / 2);

            if (p.mouseX > 0 && p.mouseX < p.width && p.mouseY > 0 && p.mouseY < p.height) {
              let mx = p.mouseX - p.width / 2;
              let my = p.mouseY - p.height / 2;
              let pmx = p.pmouseX - p.width / 2;
              let pmy = p.pmouseY - p.height / 2;
              
              if (p.mouseIsPressed) {
                for (let i = 0; i < symmetry; i++) {
                  p.rotate(angle);
                  p.stroke('#797596')
                  p.strokeWeight(5);
                  p.line(mx, my, pmx, pmy);
                  p.push();
                  p.scale(1, -1);
                  p.line(mx, my, pmx, pmy);
                  p.pop();
                }
              }
            }
            
        }
    }

    componentDidMount() {
        //We create a new p5 object on component mount, feed it 
        this.myP5 = new p5(this.Sketch, this.myRef.current)
    }

    render() {
        return (
            //This div will contain our p5 sketch
            <div ref={this.myRef}>

            </div>
        )
    }
}

export default Sketch