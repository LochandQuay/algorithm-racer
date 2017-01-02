import React from 'react';
import LeaderboardScore from './leaderboard_list_items';
const APIUtil = require('../api_util');


class Leaderboard extends React.Component {
  constructor (props) {
    super(props);
    this.state = { sortBy: 'ALL', scores: [], maxScore: undefined};
		this.fetchScores = this.fetchScores.bind(this);
		this.handleAll = this.handleAll.bind(this);
		this.handleSort = this.handleSort.bind(this);
		this.handleSearch = this.handleSearch.bind(this);
		this.handleScroll = this.handleScroll.bind(this);
    this.showCode = this.showCode.bind(this);
		this.fetchScores();
  }

	fetchScores(category) {
		APIUtil.fetchScores(category)
      .then(scores => this.setScores(scores));
	}

	handleAll() {
    this.refs.infiniteScroll.removeAttribute('disabled');

		this.setState({ sortBy: 'ALL' }, this.fetchScores);
	}

	handleSort() {
    this.refs.infiniteScroll.removeAttribute('disabled');

		this.setState(
			{ sortBy: 'SORT' },
			() => (this.fetchScores('SORT'))
		);
	}

	handleSearch() {
    this.refs.infiniteScroll.removeAttribute('disabled');

		this.setState(
			{ sortBy: 'ARRAY_SEARCH' },
			() => (this.fetchScores('ARRAY_SEARCH'))
		);
	}

	handleScroll(e) {
    e.preventDefault();
    APIUtil.fetchScores(this.state.sortBy, this.state.maxScore)
      .then((scores) => {
        if (scores.length < 5) {
          this.refs.infiniteScroll.setAttribute('disabled', 'disabled');
        } else if (scores !== []) {
          return this.setState({
            scores: this.state.scores.concat(scores),
            maxScore: scores[scores.length-1].total_score
          });
        }
      });
	}

	setScores(scores) {
    console.log(scores[0]);
		this.setState({
      scores: scores,
      maxScore: scores[scores.length-1].total_score
    });
	}

  showCode(e) {
    e.preventDefault();
    let $a = $(e.currentTarget);
    console.log($a.find('div.leaderboard-item-code'));
    $a.find('div.leaderboard-item-code').toggleClass('.visible');

  }

  render() {
    const leaderboardSortTitle = () => {
      if (this.state.sortBy === 'SORT') {
        return "Sorting";
      } else if (this.state.sortBy === 'ARRAY_SEARCH') {
        return "Searching";
      } else {
        return "All Categories";
      }
    };

    const leaderboardScores = this.state.scores.map( (score, i) => (
			<a href='#' onClick={this.showCode} key={i}>
				<LeaderboardScore type={score.title}
					score={score.total_score}
					username={score.author}
					speed={score.speed}
					golf={score.golf_score}
          code={score.body} />
			</a>
    )
    );

    return (
      <div>
        <h2>{ leaderboardSortTitle() } Leaderboard</h2>

        <div className="group leader-nav">
        	<h4>Go to:</h4>
        	<ul className="leaderboard-dropdown">
        		<div className="leaderboard-dropdown-items">
        			<li onClick={this.handleSort}>Sorting</li>
        			<li onClick={this.handleSearch}>Searching</li>
        			<li onClick={this.handleAll}>All</li>
        		</div>
        	</ul>
        </div>

        <ol className="leaderboard-list">
          { leaderboardScores }
        </ol>

				<button onClick={this.handleScroll}
                className="infinite-scroll"
                ref="infiniteScroll">
          Load more scores
        </button>

      </div>
    );
  }
}

export default Leaderboard;
