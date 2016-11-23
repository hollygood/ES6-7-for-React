Restructure Github battle by using ES6/7
* New Variable Declarations with let and const
* import and export with ES6 Modules
--- eg. module.exports / require -> export / import
* Concise object method
--- eg. change getStuff: function() {} to getStuff () {}
* Arrow functions, don't need to use bind() anymore because it does not
create new context
--- eg.

(1)
change:
this.interval = setInterval(function(){
    if (this.state.text === stopper) {
        this.setState({
            text: this.originalText
        })
    } else {
        this.setState({
            text: this.state.text + '.'
        })
    }
}.bind(this), this.props.speed);

to:

this.interval = setInterval(() => {
    if (this.state.text === stopper) {
        this.setState({
            text: this.originalText
        })
    } else {
        this.setState({
            text: this.state.text + '.'
        })
    }
}, this.props.speed);

(2).
const doThing = (thing)

(3).

change:
return repos.data.reduce(function(prev, current){
   return prev + current.stargazers_count
}, 0)

to:

return repos.data.reduce((prev, current) => prev + current.stargazers_count, 0)



