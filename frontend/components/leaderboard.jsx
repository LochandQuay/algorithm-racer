import React from 'react';
import LeaderboardScore from './leaderboard_list_items';

const LeaderboardScores = [
	{
		type: "Sample",
		username: "Boaty McBoatface",
		speed: "42ms",
		golf: "Par",
		score: 9872
	},
	{
		type: "Sample",
		username: "Boaty McBoatface",
		speed: "42ms",
		golf: "Par",
		score: 9879
	},
	{
		type: "Sample",
		username: "Boaty McBoatface",
		speed: "42ms",
		golf: "Par",
		score: 9016
	},
	{
		type: "Sample",
		username: "Boaty McBoatface",
		speed: "42ms",
		golf: "Par",
		score: 9000
	}
];

class Leaderboard extends React.Component {
  constructor () {
    super();
    this.state = { sortBy: '', scores: LeaderboardScores};
		// this.fetchScores();
		console.log(this.scores);
		this.fetchScores = this.fetchScores.bind(this);
		this.fetchSortScores = this.fetchSortScores.bind(this);
		this.fetchSearchScores = this.fetchSearchScores.bind(this);
  }

	fetchScores() {
		$.ajax ({
			method: 'GET',
			url: 'http://localhost:3000/algorithms',
			dataType: 'json'
		}).then(scores => this.setScores(scores));
	}

	fetchSortScores() {
		$.ajax ({
			method: 'GET',
			url: 'http://localhost:3000/algorithms/sort',
			dataType: 'json'
		}).then(scores => this.setScores(scores));
	}

	fetchSearchScores() {
		$.ajax ({
			method: 'GET',
			url: 'http://localhost:3000/algorithms/array_search',
			dataType: 'json'
		}).then(scores => this.setScores(scores));
	}

	setScores(scores) {
		this.setState({scores: scores});
	}

  render() {
    const leaderboardSortTitle = this.state.sortBy
      .slice(0, 1)
      .toUpperCase()
      .concat(this.state.sortBy.slice(1));

    const leaderboardScores = this.state.scores.map( (score, i) => (
			<a href='#' key={i}>
				<LeaderboardScore type={score.type}
					score={score.score}
					username={score.username}
					speed={score.speed}
					golf={score.golf} />
			</a>
      )
    );
    return (
      <div>
        <h2>{ leaderboardSortTitle }</h2>
        <div className="group leader-nav">
        	<h4>Go to:</h4>
        	<ul className="leaderboard-dropdown">
        		<div className="leaderboard-dropdown-items">
        			<li onClick={this.fetchSortScores}>Sorting</li>
        			<li onClick={this.fetchSearchScores}>Searching</li>
        			<li onClick={this.fetchScores}>All</li>
        		</div>
        	</ul>
        </div>

        <ol className="leaderboard-list">
          { leaderboardScores }
        </ol>
      </div>
    );
  }
}

export default Leaderboard;
