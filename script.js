class Component
{
    notify() {
        this.callback();
    }

    register(callback) {
        this.callback = callback;
    }

    render() {};
}

class Renderer
{
    constructor(component, destination) {
        this.render = component.render.bind(component);
        this.destination = destination;

        component.register(() => {
            return this.listen();
        });

        this.listen();
    }

    listen () {
        this.destination.innerHTML = '';
        this.destination.appendChild(this.render());
    }
}

       
      


      class stopwatch extends Component {
          constructor(){
              super();
          this.milliseconds=0;
          this.seconds=0;
          this.minutes=0;
          this.hours=0;
          this.time;
          }    
          
   
  gitTime() {
    this.time=setInterval(()=>{
        this.milliseconds++;
        if(this.milliseconds>=9){
                  this.milliseconds=0;
                  this.seconds++;
       if (this.seconds >= 60) {
            this.seconds = 0;
              this.minutes++;
        if (this.minutes >= 60) {
            this.minutes = 0;
            this.hours++;
        }
       }
      
      }
this.notify();
    },100);
         };
     
        render(){
          
            return    $('<div>')
            .append($('<h1>')
            .html(`${this.hours > 9 ?this.hours : "0" +this.hours}:${this.minutes > 9 ?this.minutes : "0" +this.minutes}:${this.seconds > 9 ?this.seconds : "0" +this.seconds}:${(this.milliseconds > 9 ?this.milliseconds : "0" +this.milliseconds)}`))
            .append([
                $('<button>').addClass('button1').html('start').on('click', () => {
                    this.gitTime();
                     this.notify;
                }),
                $('<button>').addClass('button2').html('pause').on('click', () => {
                   clearTimeout(this.time);
                    this.notify();
                }),
                $('<button>').addClass('button3').html('reset').on('click', () => {
                    clearInterval(this.time);
                    this.milliseconds=0;
                    this.seconds=0;
                    this.minutes=0;
                    this.hours=0;
                    this.notify();
                })

            ])[0]
        }
         
      }
    
                
                
                
                
                
                
                
                
           