let React = require('react');
let ReactDOM = require('react-dom');
let Codemirror = require('../src/Codemirror');
let safeEval = require('safe-eval');

require('codemirror/mode/javascript/javascript');
require('codemirror/mode/ruby/ruby');
require('codemirror/mode/xml/xml');
require('codemirror/mode/markdown/markdown');

let defaults = {
	ruby: "def my_function\n\tputs \"Hello World!\"\nend",
	javascript: 'myFunction = () => {\n\talert("Hello World!");\n}'
};

let App = React.createClass({
	getInitialState () {
		return {
			code: defaults.markdown,
			readOnly: false,
			mode: 'markdown',
		};
	},
	updateCode (newCode) {
		this.setState({
			code: newCode
		});
	},
	changeMode (e) {
		let mode = e.target.value;
		this.setState({
			mode: mode,
			code: defaults[mode]
		});
	},
	toggleReadOnly () {
		this.setState({
			readOnly: !this.state.readOnly
		}, () => this.refs.editor.focus());
	},
	interact (cm) {
		console.log(cm.getValue());
	},
	runCode () {
		safeEval(this.state.code);
	},
	render () {
		let options = {
			lineNumbers: true,
			readOnly: this.state.readOnly,
			mode: this.state.mode
		};
		return (
			<div>
				<Codemirror ref="editor" value={this.state.code} onChange={this.updateCode} options={options} interact={this.interact} />
				<div style={{ marginTop: 10 }}>
					<select onChange={this.changeMode} value={this.state.mode}>
						<option value="javascript">JavaScript</option>
						<option value="ruby">Ruby</option>
					</select>
					<button onClick={this.toggleReadOnly}>Toggle read-only mode (currently {this.state.readOnly ? 'on' : 'off'})</button>
					<button onClick={this.runCode}>Run Code</button>
				</div>
			</div>
		);
	}
});

export default App;
