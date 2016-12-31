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
    this.state = { sortBy: 'all', scores: LeaderboardScores };
  }

  sortByType(type) {
    // switch (type) {
    //   case 'all':
    //
    //   case 'sorting':
    //
    //   case 'searching':
    //
    //   case 'other':

    // }
  }


  render() {
    const leaderboardSortTitle = this.state.sortBy
      .slice(0, 1)
      .toUpperCase()
      .concat(this.state.sortBy.slice(1));

    const leaderboardScores = this.state.scores.map( (score) => (
      <LeaderboardScore type={score.type}
                        score={score.score}
                        username={score.username}
                        speed={score.speed}
                        golf={score.golf} />
      )
    );
    return (
      <div>
        <h2>{ leaderboardSortTitle }</h2>
        <div className="group leader-nav">
        	<h4>Go to:</h4>
        	<ul className="leaderboard-dropdown">
        		<div className="leaderboard-dropdown-items">
        			<li>Sorting</li>>
        			<li>Searching</li>
        			<li>Other</li>
        			<li>All</li>
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
