import { Component, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'nextflow-counter',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {

  @Prop({ mutable: true }) startTime: number;

  @Event() counterFinished: EventEmitter;

  interval;

  componentWillLoad() {
    console.log('Component is about to be rendered');

    this.interval = setInterval(()=>{
      console.log(this.startTime);
      this.countdown();
    },1000);
  }

  countdown(){
    let result = --this.startTime;

    if(result == 0){
      clearInterval(this.interval);
      console.log('dispatching event...');
      this.counterFinished.emit();
    } else {
      this.startTime = result;
    }
  }


  render() {
    return (
      <div>
        <p class="counter">{this.startTime}</p>
      </div>
    );
  }
}
