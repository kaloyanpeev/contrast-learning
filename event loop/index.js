//node myFile.js

const pendingTimers = []
const pendingTasks = []
const pendingOperations = []

//new timers, tasks, operations are recorded from myFile running
myFile.runContents();

//after this is exec we enter event loop

function shouldContinue() {
	//1st check: any pending setTimeout, setInterval, setImmediate?
	//2nd check: any pending OS tasks e.g. If servers are still listening to requests
	//3rd check: any long running operations are still running (fs function call still running)

	return pendingTimers.length || pendingTasks.length || pendingOperations.length

}

while (shouldContinue()) {
	//every time the event loop runs
	//it's called a tick
	
	// 1) Node looks at pending timers and sees if any funcs are ready to be called
	// 2) node looks at pending OS tasks and pending operations and calls relevant callbacks
	// 3) Pause execution. Continue when...
	// - a new pendingOsTask is done
	// a new pendingOperation is done
	// a timer is about to complete 

	// 4) Node looks at pending timers, not setTimeout & setInterval
	// but only setImmediate

	// 5) Handle any 'close' events
}

//exit back to terminal